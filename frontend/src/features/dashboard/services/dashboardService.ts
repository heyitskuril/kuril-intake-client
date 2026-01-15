import apiClient from '@shared/utils/apiClient';
import { ApiResponse } from '@shared/types/common.types';
import { DashboardData } from '../types/dashboard.types';

export const dashboardService = {
  getData: async () => {
    return apiClient.get<ApiResponse<DashboardData>>('/dashboard');
  },
};