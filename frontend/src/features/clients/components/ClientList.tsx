import React from 'react';
import { ClientCard } from './ClientCard';
import { ClientFilters } from './ClientFilters';
import { Loading } from '@shared/components/UI/Loading';
import { Alert } from '@shared/components/UI/Alert';
import { useClients } from '../hooks/useClients';

export const ClientList: React.FC = () => {
  const { clients, loading, error, updateFilters } = useClients();

  if (loading) {
    return <Loading size="lg" message="Loading clients..." />;
  }

  if (error) {
    return <Alert type="error" message={error} />;
  }

  return (
    <div>
      <ClientFilters onFilterChange={updateFilters} />

      {clients.length === 0 ? (
        <div className="text-center py-12 text-gray-500">
          No clients found
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clients.map((client) => (
            <ClientCard key={client.id} client={client} />
          ))}
        </div>
      )}
    </div>
  );
};