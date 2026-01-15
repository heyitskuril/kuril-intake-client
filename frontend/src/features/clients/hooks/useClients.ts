import { useState, useEffect, useCallback } from 'react';
import { clientsService } from '../services/clientsService';
import { Client, ClientFilters } from '../types/clients.types';

export const useClients = (initialFilters?: ClientFilters) => {
  const [clients, setClients] = useState<Client[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState<ClientFilters>(initialFilters || {});

  const fetchClients = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await clientsService.getAll(filters);
      setClients(response.data.data?.data || []);
      setTotal(response.data.data?.total || 0);
    } catch (err: any) {
      setError(err.response?.data?.error || 'Failed to fetch clients');
    } finally {
      setLoading(false);
    }
  }, [filters]);

  useEffect(() => {
    fetchClients();
  }, [fetchClients]);

  const updateFilters = (newFilters: Partial<ClientFilters>) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  };

  return {
    clients,
    total,
    loading,
    error,
    filters,
    updateFilters,
    refetch: fetchClients,
  };
};