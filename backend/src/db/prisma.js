// Prisma Client Singleton
// Kenapa dipisah? Supaya cuma ada 1 instance Prisma Client di seluruh app
// Menghindari "too many connections" error

const { PrismaClient } = require('@prisma/client');

// Create single instance
const prisma = new PrismaClient({
  log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
});

// Graceful shutdown
process.on('beforeExit', async () => {
  await prisma.$disconnect();
});

module.exports = prisma;