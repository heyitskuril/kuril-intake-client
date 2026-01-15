import apiClient from '@shared/utils/apiClient';
import { ApiResponse } from '@shared/types/common.types';
import { Service, CreateServicePayload, UpdateServicePayload } from '../types/services.types';

export const servicesService = {
  getAll: async () => {
    return apiClient.get<ApiResponse<{ services: Service[] }>>('/services');
  },

  getPublic: async () => {
    return apiClient.get<ApiResponse<{ services: Service[] }>>('/services/public');
  },

  getById: async (id: string) => {
    return apiClient.get<ApiResponse<{ service: Service }>>(`/services/${id}`);
  },

  create: async (payload: CreateServicePayload) => {
    return apiClient.post<ApiResponse<{ service: Service }>>('/services', payload);
  },

  update: async (id: string, payload: UpdateServicePayload) => {
    return apiClient.put<ApiResponse<{ service: Service }>>(`/services/${id}`, payload);
  },

  delete: async (id: string) => {
    return apiClient.delete<ApiResponse>(`/services/${id}`);
  },
};