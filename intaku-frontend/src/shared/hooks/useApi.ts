import { useState, useCallback } from 'react';
import { AxiosError } from 'axios';
interface UseApiState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}
interface UseApiOptions<T> {
  onSuccess?: (data: T) => void;
  onError?: (error: string) => void;
}
export function useApi<T>(apiFunc: (...args: any[]) => Promise<any>, options: UseApiOptions<T> = {}) {
  const [state, setState] = useState<UseApiState<T>>({
    data: null,
    loading: false,
    error: null
  });
  const execute = useCallback(async (...args: any[]) => {
    setState(prev => ({
      ...prev,
      loading: true,
      error: null
    }));
    try {
      const response = await apiFunc(...args);
      const data = response.data;
      setState({
        data,
        loading: false,
        error: null
      });
      options.onSuccess?.(data);
      return data;
    } catch (err) {
      const error = err as AxiosError<{
        message: string;
      }>;
      const errorMessage = error.response?.data?.message || error.message || 'Something went wrong';
      setState({
        data: null,
        loading: false,
        error: errorMessage
      });
      options.onError?.(errorMessage);
      throw err;
    }
  }, [apiFunc, options]);
  return {
    ...state,
    execute
  };
}