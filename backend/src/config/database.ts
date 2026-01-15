import { PrismaClient } from '@prisma/client';
import { logger } from '@/shared/utils/logger';

const prismaClientSingleton = () => {
  return new PrismaClient({
    log: [
      { level: 'query', emit: 'event' },
      { level: 'error', emit: 'event' },
      { level: 'warn', emit: 'event' },
    ],
  });
};

declare global {
  var prisma: PrismaClient | undefined;
}

export const prisma = globalThis.prisma ?? prismaClientSingleton();

if (process.env.NODE_ENV !== 'production') {
  globalThis.prisma = prisma;
}

// 🔹 Bikin interface type sendiri supaya TS nggak complain
interface QueryEvent {
  query: string;
  params: string;
  duration: number;
  target: string;
}

interface LogEvent {
  level: 'info' | 'warn' | 'error';
  message: string;
  target?: string;
}

// Log queries in dev
if (process.env.NODE_ENV === 'development') {
  prisma.$on('query', (event: QueryEvent) => {
    logger.debug(`Query: ${event.query}`);
    logger.debug(`Duration: ${event.duration}ms`);
  });
}

prisma.$on('error', (event: LogEvent) => {
  logger.error('Database error:', event);
});

prisma.$on('warn', (event: LogEvent) => {
  logger.warn('Database warning:', event);
});

export async function connectDatabase() {
  try {
    await prisma.$connect();
    logger.info('✅ Database connected successfully');
  } catch (error) {
    logger.error('❌ Database connection failed:', error);
    process.exit(1);
  }
}

export async function disconnectDatabase() {
  await prisma.$disconnect();
  logger.info('Database disconnected');
}
