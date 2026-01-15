import { useState, useEffect, useCallback } from 'react';
import { servicesService } from '../services/servicesService';
import { Service } from '../types/services.types';

export const useServices = (publicOnly: boolean = false) => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchServices = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = publicOnly 
        ? await servicesService.getPublic()
        : await servicesService.getAll();
      setServices(response.data.data?.services || []);
    } catch (err: any) {
      setError(err.response?.data?.error || 'Failed to fetch services');
    } finally {
      setLoading(false);
    }
  }, [publicOnly]);

  useEffect(() => {
    fetchServices();
  }, [fetchServices]);

  return {
    services,
    loading,
    error,
    refetch: fetchServices,
  };
};