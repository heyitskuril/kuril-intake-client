import React from 'react';
import { MainLayout } from '@shared/components/Layout/MainLayout';
import { ClientList } from '@features/clients/components/ClientList';

export const ClientsPage: React.FC = () => {
  return (
    <MainLayout>
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Clients</h1>
        <ClientList />
      </div>
    </MainLayout>
  );
};