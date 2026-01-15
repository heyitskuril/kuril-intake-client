import React from 'react';
import { ServiceCard } from './ServiceCard';
import { Loading } from '@shared/components/UI/Loading';
import { Alert } from '@shared/components/UI/Alert';
import { useServices } from '../hooks/useService';

interface ServiceListProps {
  publicOnly?: boolean;
  onServiceClick?: (serviceId: string) => void;
}

export const ServiceList: React.FC<ServiceListProps> = ({ 
  publicOnly = false,
  onServiceClick 
}) => {
  const { services, loading, error } = useServices(publicOnly);

  if (loading) {
    return <Loading size="lg" message="Loading services..." />;
  }

  if (error) {
    return <Alert type="error" message={error} />;
  }

  if (services.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500">
        No services available
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service) => (
        <ServiceCard
          key={service.id}
          service={service}
          onClick={() => onServiceClick?.(service.id)}
        />
      ))}
    </div>
  );
};