import { useState, useEffect, useCallback } from 'react';
import { formBuilderService } from '../services/formBuilderService';
import { FormField } from '../types/formBuilder.types';

export const useFormBuilder = (publicOnly: boolean = false) => {
  const [fields, setFields] = useState<FormField[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchFields = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = publicOnly
        ? await formBuilderService.getPublic()
        : await formBuilderService.getAll();
      setFields(response.data.data?.fields || []);
    } catch (err: any) {
      setError(err.response?.data?.error || 'Failed to fetch form fields');
    } finally {
      setLoading(false);
    }
  }, [publicOnly]);

  useEffect(() => {
    fetchFields();
  }, [fetchFields]);

  return {
    fields,
    loading,
    error,
    refetch: fetchFields,
  };
};