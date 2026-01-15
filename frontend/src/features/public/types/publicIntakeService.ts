import apiClient from '@shared/utils/apiClient';
import { ApiResponse } from '@shared/types/common.types';

export const publicIntakeService = {
  submitIntake: async (payload: any) => {
    return apiClient.post<ApiResponse>('/clients', payload);
  },
};