import apiClient from '@shared/utils/apiClient';
import { ApiResponse } from '@shared/types/common.types';
import { Announcement, CreateAnnouncementPayload, UpdateAnnouncementPayload } from '../types/announcements.types';

export const announcementsService = {
  getAll: async () => {
    return apiClient.get<ApiResponse<{ announcements: Announcement[] }>>('/announcements');
  },

  getActive: async () => {
    return apiClient.get<ApiResponse<{ announcements: Announcement[] }>>('/announcements/active');
  },

  getById: async (id: string) => {
    return apiClient.get<ApiResponse<{ announcement: Announcement }>>(`/announcements/${id}`);
  },

  create: async (payload: CreateAnnouncementPayload) => {
    return apiClient.post<ApiResponse<{ announcement: Announcement }>>('/announcements', payload);
  },

  update: async (id: string, payload: UpdateAnnouncementPayload) => {
    return apiClient.put<ApiResponse<{ announcement: Announcement }>>(`/announcements/${id}`, payload);
  },

  delete: async (id: string) => {
    return apiClient.delete<ApiResponse>(`/announcements/${id}`);
  },
};