import apiClient from '@shared/utils/apiClient';
import { ApiResponse, PaginatedResponse } from '@shared/types/common.types';
import { User, CreateUserPayload, UpdateUserPayload } from '../types/users.types';

export const usersService = {
  getAll: async () => {
    return apiClient.get<ApiResponse<PaginatedResponse<User>>>('/users');
  },

  getById: async (id: string) => {
    return apiClient.get<ApiResponse<{ user: User }>>(`/users/${id}`);
  },

  create: async (payload: CreateUserPayload) => {
    return apiClient.post<ApiResponse<{ user: User }>>('/auth/register', payload);
  },

  update: async (id: string, payload: UpdateUserPayload) => {
    return apiClient.put<ApiResponse<{ user: User }>>(`/users/${id}`, payload);
  },

  delete: async (id: string) => {
    return apiClient.delete<ApiResponse>(`/users/${id}`);
  },
};