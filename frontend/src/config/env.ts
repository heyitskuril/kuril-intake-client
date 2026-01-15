export const config = {
  apiUrl: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
  appName: import.meta.env.VITE_APP_NAME || 'Kuril Intake Client',
  isDevelopment: import.meta.env.DEV,
  isProduction: import.meta.env.PROD,
};