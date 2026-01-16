export const APP_NAME = 'Intaku';

// API Configuration - Update this URL to point to your backend
export const API_BASE_URL = 'http://localhost:5000/api';
export const ROUTES = {
  LOGIN: '/login',
  DASHBOARD: '/',
  CLIENTS: '/clients',
  SERVICES: '/services',
  FORM_BUILDER: '/form-builder',
  BRANDING: '/branding',
  ANNOUNCEMENTS: '/announcements',
  USERS: '/users',
  SETTINGS: '/settings'
};
export const ROLES = {
  ADMIN: 'admin',
  ASSISTANT: 'assistant',
  VIEWER: 'viewer'
} as const;
export const DATE_FORMATS = {
  DISPLAY: 'MMM d, yyyy',
  API: 'yyyy-MM-dd',
  DATETIME: 'MMM d, yyyy h:mm a'
};
export const STORAGE_KEYS = {
  ACCESS_TOKEN: 'intaku_access_token',
  REFRESH_TOKEN: 'intaku_refresh_token',
  USER: 'intaku_user',
  THEME: 'intaku_theme'
};