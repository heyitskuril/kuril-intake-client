import axios from 'axios';
import { config } from '@config/env';
import { ApiResponse } from '@shared/types/common.types';

// Create a separate axios instance for public requests (no auth required)
const publicApiClient = axios.create({
  baseURL: config.apiUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Response interceptor for error handling
publicApiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle errors without authentication logic
    return Promise.reject(error);
  }
);

export interface PublicIntakePayload {
  name: string;
  email: string;
  business_type?: string;
  service_type?: string;
  budget?: number;
  notes?: string;
  attachment_url?: string;
  form_data?: Record<string, any>;
}

export const publicIntakeService = {
  /**
   * Submit a new client intake form
   */
  submitIntake: async (payload: PublicIntakePayload) => {
    return publicApiClient.post<ApiResponse<{ client: any }>>('/clients', payload);
  },

  /**
   * Get active services (for service selection in form)
   */
  getServices: async () => {
    return publicApiClient.get<ApiResponse<{ services: any[] }>>('/services/public');
  },

  /**
   * Get active form fields (for dynamic form rendering)
   */
  getFormFields: async () => {
    return publicApiClient.get<ApiResponse<{ fields: any[] }>>('/form-builder/public');
  },

  /**
   * Get branding settings (for customizing public page)
   */
  getBrandingSettings: async () => {
    return publicApiClient.get<ApiResponse<{ settings: any[] }>>('/branding/public');
  },

  /**
   * Get active announcements (for displaying on public page)
   */
  getAnnouncements: async () => {
    return publicApiClient.get<ApiResponse<{ announcements: any[] }>>('/announcements/active');
  },

  /**
   * Upload file (if file upload is needed)
   */
  uploadFile: async (file: File) => {
    const formData = new FormData();
    formData.append('file', file);

    return publicApiClient.post<ApiResponse<{ url: string }>>('/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
};