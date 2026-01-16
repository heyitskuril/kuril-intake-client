import { useState, useEffect } from 'react';
import { DashboardData } from '../types/dashboard.types';
import { dashboardService } from '../services/dashboardService';
import { useToast } from '../../../shared/hooks/useToast';
export const useDashboard = () => {
  const [data, setData] = useState<DashboardData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const {
    showToast
  } = useToast();
  const fetchDashboardData = async () => {
    try {
      setIsLoading(true);
      const result = await dashboardService.getDashboardData();
      setData(result);
      setError(null);
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to fetch dashboard data';
      setError(message);
      showToast(message, 'error');
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchDashboardData();
  }, []);
  return {
    data,
    isLoading,
    error,
    refetch: fetchDashboardData
  };
};