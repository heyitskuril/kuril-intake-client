import express, { Application } from 'express';
import helmet from 'helmet';
import { corsMiddleware } from '@shared/middleware/cors';
import { requestLogger } from '@shared/middleware/RequestLogger';
import { rateLimiter } from '@shared/middleware/RateLimiter';
import { sanitizeInput } from '@shared/middleware/sanitize';
import { errorHandler, notFoundHandler } from '@shared/middleware/ErrorHandler';

// Import routes
import authRoutes from '@domains/auth/auth.routes';
import usersRoutes from '@domains/users/users.routes';
import clientsRoutes from '@domains/clients/clients.routes';
import notesRoutes from '@domains/notes/notes.routes';
import servicesRoutes from '@domains/services/services.routes';
import formBuilderRoutes from '@domains/formBuilder/formBuilder.routes';
import brandingRoutes from '@domains/branding/branding.routes';
import announcementsRoutes from '@domains/announcements/announcements.routes';
import activityLogsRoutes from '@domains/activityLogs/activityLogs.routes';
import dashboardRoutes from '@domains/dashboard/dashboard.routes';

const app: Application = express();

// Security middleware
app.use(helmet());
app.use(corsMiddleware);
app.use(notFoundHandler);
app.use(errorHandler);


// Body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request logging
app.use(requestLogger);

// Rate limiting
app.use('/api/', rateLimiter);

// Input sanitization
app.use(sanitizeInput);

// Health check
app.get('/health', (req, res) => {
  return req;
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/clients', clientsRoutes);
app.use('/api/notes', notesRoutes);
app.use('/api/services', servicesRoutes);
app.use('/api/form-builder', formBuilderRoutes);
app.use('/api/branding', brandingRoutes);
app.use('/api/announcements', announcementsRoutes);
app.use('/api/activity-logs', activityLogsRoutes);
app.use('/api/dashboard', dashboardRoutes);

// Error handling
app.use(notFoundHandler);
app.use(errorHandler);

export default app;