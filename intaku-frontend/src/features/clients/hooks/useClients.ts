import { useState, useEffect, useCallback } from 'react';
import { Client, ClientsResponse, ClientFilters, ClientStatus } from '../types/clients.types';
import { clientsService } from '../services/clientsService';
import { useToast } from '../../../shared/hooks/useToast';
export const useClients = (initialFilters?: ClientFilters) => {
  const [clients, setClients] = useState<Client[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState<ClientFilters>(initialFilters || {
    search: '',
    status: 'all',
    dateRange: 'all'
  });
  const {
    showToast
  } = useToast();
  const fetchClients = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await clientsService.getClients(page, 20, filters);
      setClients(response.data);
      setTotal(response.total);
    } catch (err) {
      showToast('Failed to fetch clients', 'error');
    } finally {
      setIsLoading(false);
    }
  }, [page, filters, showToast]);
  useEffect(() => {
    fetchClients();
  }, [fetchClients]);
  const updateStatus = async (id: string, status: ClientStatus) => {
    try {
      await clientsService.updateClientStatus(id, status);
      showToast('Client status updated', 'success');
      fetchClients(); // Refresh list
      return true;
    } catch (err) {
      showToast('Failed to update status', 'error');
      return false;
    }
  };
  return {
    clients,
    total,
    page,
    setPage,
    isLoading,
    filters,
    setFilters,
    updateStatus,
    refresh: fetchClients
  };
};
export const useClientDetail = (id: string) => {
  const [client, setClient] = useState<Client | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const {
    showToast
  } = useToast();
  const fetchClient = useCallback(async () => {
    if (!id) return;
    try {
      setIsLoading(true);
      const data = await clientsService.getClientById(id);
      setClient(data);
    } catch (err) {
      showToast('Failed to fetch client details', 'error');
    } finally {
      setIsLoading(false);
    }
  }, [id, showToast]);
  useEffect(() => {
    fetchClient();
  }, [fetchClient]);
  const updateStatus = async (status: ClientStatus) => {
    if (!client) return;
    try {
      const updated = await clientsService.updateClientStatus(client.id, status);
      setClient(updated);
      showToast('Status updated successfully', 'success');
    } catch (err) {
      showToast('Failed to update status', 'error');
    }
  };
  return {
    client,
    isLoading,
    updateStatus,
    refresh: fetchClient
  };
};