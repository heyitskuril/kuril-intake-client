// API Service Layer
// Semua API calls di satu tempat - mudah maintain

import axios from './axios';

// ==========================================
// AUTH API
// ==========================================

export const authAPI = {
  // Login admin
  login: async (credentials) => {
    const response = await axios.post('/api/auth/login', credentials);
    return response.data;
  },

  // Get current admin profile
  getMe: async () => {
    const response = await axios.get('/api/auth/me');
    return response.data;
  },

  // Register admin (dev only)
  register: async (data) => {
    const response = await axios.post('/api/auth/register', data);
    return response.data;
  },
};

// ==========================================
// INTAKE API
// ==========================================

export const intakeAPI = {
  // Submit intake form (PUBLIC)
  submit: async (data) => {
    const response = await axios.post('/api/intake', data);
    return response.data;
  },

  // Get all intakes with pagination (PROTECTED)
  getAll: async (params = {}) => {
    const response = await axios.get('/api/intake', { params });
    return response.data;
  },

  // Get single intake by ID (PROTECTED)
  getById: async (id) => {
    const response = await axios.get(`/api/intake/${id}`);
    return response.data;
  },

  // Update intake status (PROTECTED)
  updateStatus: async (id, status) => {
    const response = await axios.patch(`/api/intake/${id}/status`, { status });
    return response.data;
  },

  // Delete intake (PROTECTED)
  delete: async (id) => {
    const response = await axios.delete(`/api/intake/${id}`);
    return response.data;
  },
};

// ==========================================
// HEALTH CHECK API
// ==========================================

export const healthAPI = {
  check: async () => {
    const response = await axios.get('/');
    return response.data;
  },
};