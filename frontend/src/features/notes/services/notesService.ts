import apiClient from '@shared/utils/apiClient';
import { ApiResponse } from '@shared/types/common.types';
import { Note, CreateNotePayload, UpdateNotePayload } from '../types/notes.types';

export const notesService = {
  getByClientId: async (clientId: string) => {
    return apiClient.get<ApiResponse<{ notes: Note[] }>>(`/notes/client/${clientId}`);
  },

  create: async (payload: CreateNotePayload) => {
    return apiClient.post<ApiResponse<{ note: Note }>>('/notes', payload);
  },

  update: async (id: string, payload: UpdateNotePayload) => {
    return apiClient.put<ApiResponse<{ note: Note }>>(`/notes/${id}`, payload);
  },

  delete: async (id: string) => {
    return apiClient.delete<ApiResponse>(`/notes/${id}`);
  },
};