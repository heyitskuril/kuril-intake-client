export const CONSTANTS = {
  SALT_ROUNDS: 10,
  
  PAGINATION: {
    DEFAULT_LIMIT: 50,
    MAX_LIMIT: 100,
  },
  
  FILE_UPLOAD: {
    MAX_SIZE: 5 * 1024 * 1024, // 5MB
    ALLOWED_TYPES: {
      IMAGE: ['image/jpeg', 'image/png', 'image/jpg'],
      DOCUMENT: ['application/pdf'],
    },
  },
  
  RATE_LIMIT: {
    WINDOW_MS: 15 * 60 * 1000, // 15 minutes
    MAX_REQUESTS: 100,
  },
  
  JWT: {
    ACCESS_TOKEN_EXPIRY: '15m',
    REFRESH_TOKEN_EXPIRY: '7d',
  },
};

export const ERROR_MESSAGES = {
  AUTH: {
    INVALID_CREDENTIALS: 'Invalid email or password',
    UNAUTHORIZED: 'Unauthorized access',
    TOKEN_EXPIRED: 'Token has expired',
    TOKEN_INVALID: 'Invalid token',
    INSUFFICIENT_PERMISSIONS: 'Insufficient permissions',
  },
  VALIDATION: {
    REQUIRED_FIELD: 'This field is required',
    INVALID_EMAIL: 'Invalid email format',
    INVALID_FORMAT: 'Invalid format',
  },
  DATABASE: {
    NOT_FOUND: 'Resource not found',
    DUPLICATE_ENTRY: 'Duplicate entry',
    OPERATION_FAILED: 'Database operation failed',
  },
  SERVER: {
    INTERNAL_ERROR: 'Internal server error',
    SERVICE_UNAVAILABLE: 'Service temporarily unavailable',
  },
};

export const SUCCESS_MESSAGES = {
  AUTH: {
    LOGIN_SUCCESS: 'Login successful',
    LOGOUT_SUCCESS: 'Logout successful',
    REGISTER_SUCCESS: 'User registered successfully',
  },
  CLIENT: {
    CREATED: 'Client created successfully',
    UPDATED: 'Client updated successfully',
    DELETED: 'Client deleted successfully',
    SUBMISSION_RECEIVED: 'Submission received successfully',
  },
  NOTE: {
    CREATED: 'Note added successfully',
    UPDATED: 'Note updated successfully',
    DELETED: 'Note deleted successfully',
  },
  SERVICE: {
    CREATED: 'Service created successfully',
    UPDATED: 'Service updated successfully',
    DELETED: 'Service deleted successfully',
  },
};