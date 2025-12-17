// App Configuration
// Kenapa dipisah dari server.js? Supaya mudah di-test dan di-reuse

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const intakeRoutes = require('./routes/intake.routes');
const authRoutes = require('./routes/auth.routes');
const { errorHandler, notFoundHandler } = require('./middlewares/error.middleware');

const app = express();

// ====================
// MIDDLEWARE
// ====================

// Security headers
app.use(helmet());

// CORS - Allow frontend access
app.use(
  cors({
    origin: process.env.CLIENT_URL || 'http://localhost:3000',
    credentials: true,
  })
);

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ====================
// ROUTES
// ====================

// Health check
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Kuril Intake API is running',
    version: '1.0.0',
    timestamp: new Date().toISOString(),
  });
});

// API Routes
app.use('/api/intake', intakeRoutes);
app.use('/api/auth', authRoutes);

// ====================
// ERROR HANDLING
// ====================

// 404 handler
app.use(notFoundHandler);

// Global error handler
app.use(errorHandler);

module.exports = app;