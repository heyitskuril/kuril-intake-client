import apiClient from '@shared/utils/apiClient';
import { ApiResponse, PaginatedResponse } from '@shared/types/common.types';
import {
  Client,
  CreateClientPayload,
  UpdateClientPayload,
  ClientFilters,
} from '../types/clients.types';

export const clientsService = {
  getAll: async (filters?: ClientFilters) => {
    return apiClient.get<ApiResponse<PaginatedResponse<Client>>>('/clients', {
      params: filters,
    });
  },

  getById: async (id: string) => {
    return apiClient.get<ApiResponse<{ client: Client }>>(`/clients/${id}`);
  },

  create: async (payload: CreateClientPayload) => {
    return apiClient.post<ApiResponse<{ client: Client }>>('/clients', payload);
  },

  update: async (id: string, payload: UpdateClientPayload) => {
    return apiClient.put<ApiResponse<{ client: Client }>>(`/clients/${id}`, payload);
  },

  delete: async (id: string) => {
    return apiClient.delete<ApiResponse>(`/clients/${id}`);
  },
};