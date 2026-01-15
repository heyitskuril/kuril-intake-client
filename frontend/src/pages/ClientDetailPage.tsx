import React from 'react';
import { MainLayout } from '@shared/components/Layout/MainLayout';
import { ClientDetail } from '@features/clients/components/ClientDetail';

export const ClientDetailPage: React.FC = () => {
  return (
    <MainLayout>
      <ClientDetail />
    </MainLayout>
  );
};