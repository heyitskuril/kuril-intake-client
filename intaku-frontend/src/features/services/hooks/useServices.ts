import { useState, useEffect, useCallback } from 'react';
import { Service, ServiceFormData } from '../types/services.types';
import { servicesService } from '../services/servicesService';
import { useToast } from '../../../shared/hooks/useToast';
export const useServices = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const {
    showToast
  } = useToast();
  const fetchServices = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await servicesService.getServices();
      setServices(data);
    } catch (err) {
      setError('Failed to fetch services');
      showToast('Failed to load services', 'error');
    } finally {
      setIsLoading(false);
    }
  }, [showToast]);
  useEffect(() => {
    fetchServices();
  }, [fetchServices]);
  const createService = async (data: ServiceFormData) => {
    try {
      const newService = await servicesService.createService(data);
      setServices(prev => [...prev, newService]);
      showToast('Service created successfully', 'success');
      return newService;
    } catch (err) {
      showToast('Failed to create service', 'error');
      throw err;
    }
  };
  const updateService = async (id: string, data: Partial<ServiceFormData>) => {
    try {
      const updatedService = await servicesService.updateService(id, data);
      setServices(prev => prev.map(s => s.id === id ? updatedService : s));
      showToast('Service updated successfully', 'success');
      return updatedService;
    } catch (err) {
      showToast('Failed to update service', 'error');
      throw err;
    }
  };
  const deleteService = async (id: string) => {
    try {
      await servicesService.deleteService(id);
      setServices(prev => prev.filter(s => s.id !== id));
      showToast('Service deleted successfully', 'success');
    } catch (err) {
      showToast('Failed to delete service', 'error');
      throw err;
    }
  };
  const reorderServices = async (orderedIds: string[]) => {
    // Optimistic update
    const currentServices = [...services];
    const reorderedMap = new Map(services.map(s => [s.id, s]));
    const reordered = orderedIds.map(id => reorderedMap.get(id)).filter(Boolean) as Service[];
    setServices(reordered);
    try {
      await servicesService.reorderServices(orderedIds);
    } catch (err) {
      // Revert on error
      setServices(currentServices);
      showToast('Failed to reorder services', 'error');
    }
  };
  return {
    services,
    isLoading,
    error,
    fetchServices,
    createService,
    updateService,
    deleteService,
    reorderServices
  };
};