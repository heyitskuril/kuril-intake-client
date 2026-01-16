import React from 'react';
import { Plus } from 'lucide-react';
import { Button } from '../shared/components/UI/Button';
import { ClientList } from '../features/clients/components/ClientList';
import { ClientFilters } from '../features/clients/components/ClientFilters';
import { useClients } from '../features/clients/hooks/useClients';
export const ClientsPage: React.FC = () => {
  const {
    clients,
    isLoading,
    filters,
    setFilters
  } = useClients();
  return <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Clients</h1>
          <p className="text-gray-500 mt-1">
            Manage your client inquiries and projects
          </p>
        </div>
        <Button disabled>
          <Plus className="w-4 h-4 mr-2" />
          Add Client
        </Button>
      </div>

      <ClientFilters filters={filters} onFilterChange={setFilters} />

      <ClientList clients={clients} isLoading={isLoading} />
    </div>;
};