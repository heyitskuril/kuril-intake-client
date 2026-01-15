import apiClient from '@shared/utils/apiClient';
import { ApiResponse } from '@shared/types/common.types';
import { FormField, CreateFormFieldPayload, UpdateFormFieldPayload } from '../types/formBuilder.types';

export const formBuilderService = {
  getAll: async () => {
    return apiClient.get<ApiResponse<{ fields: FormField[] }>>('/form-builder');
  },

  getPublic: async () => {
    return apiClient.get<ApiResponse<{ fields: FormField[] }>>('/form-builder/public');
  },

  getById: async (id: string) => {
    return apiClient.get<ApiResponse<{ field: FormField }>>(`/form-builder/${id}`);
  },

  create: async (payload: CreateFormFieldPayload) => {
    return apiClient.post<ApiResponse<{ field: FormField }>>('/form-builder', payload);
  },

  update: async (id: string, payload: UpdateFormFieldPayload) => {
    return apiClient.put<ApiResponse<{ field: FormField }>>(`/form-builder/${id}`, payload);
  },

  delete: async (id: string) => {
    return apiClient.delete<ApiResponse>(`/form-builder/${id}`);
  },

  reorder: async (fieldIds: string[]) => {
    return apiClient.post<ApiResponse>('/form-builder/reorder', { fieldIds });
  },
};