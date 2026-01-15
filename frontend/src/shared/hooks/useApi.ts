import { useState, useCallback } from 'react';
import { AxiosError } from 'axios';
import { ApiResponse } from '@shared/types/common.types';

interface UseApiState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

interface UseApiReturn<T> extends UseApiState<T> {
  execute: (...args: any[]) => Promise<T | null>;
  reset: () => void;
}

export const useApi = <T = any>(
  apiFunc: (...args: any[]) => Promise<any>
): UseApiReturn<T> => {
  const [state, setState] = useState<UseApiState<T>>({
    data: null,
    loading: false,
    error: null,
  });

  const execute = useCallback(
    async (...args: any[]): Promise<T | null> => {
      setState({ data: null, loading: true, error: null });

      try {
        const response = await apiFunc(...args);
        const data = response.data?.data || response.data;
        
        setState({ data, loading: false, error: null });
        return data;
      } catch (err) {
        const error = err as AxiosError<ApiResponse>;
        const errorMessage = 
          error.response?.data?.error || 
          error.response?.data?.message || 
          error.message || 
          'An error occurred';
        
        setState({ data: null, loading: false, error: errorMessage });
        return null;
      }
    },
    [apiFunc]
  );

  const reset = useCallback(() => {
    setState({ data: null, loading: false, error: null });
  }, []);

  return { ...state, execute, reset };
};