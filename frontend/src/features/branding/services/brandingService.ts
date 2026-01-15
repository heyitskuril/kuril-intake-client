import apiClient from '@shared/utils/apiClient';
import { ApiResponse } from '@shared/types/common.types';
import { BrandingSetting, UpdateBrandingPayload } from '../types/branding.types';

export const brandingService = {
  getAll: async () => {
    return apiClient.get<ApiResponse<{ settings: BrandingSetting[] }>>('/branding');
  },

  getPublic: async () => {
    return apiClient.get<ApiResponse<{ settings: BrandingSetting[] }>>('/branding/public');
  },

  update: async (payload: UpdateBrandingPayload) => {
    return apiClient.post<ApiResponse<{ setting: BrandingSetting }>>('/branding', payload);
  },

  bulkUpdate: async (settings: UpdateBrandingPayload[]) => {
    return apiClient.post<ApiResponse<{ settings: BrandingSetting[] }>>('/branding/bulk', { settings });
  },
};