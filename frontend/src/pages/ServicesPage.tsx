import React from 'react';
import { MainLayout } from '@shared/components/Layout/MainLayout';
import { ServiceManagement } from '@features/services/components/ServiceManagement';

export const ServicesPage: React.FC = () => {
  return (
    <MainLayout>
      <ServiceManagement />
    </MainLayout>
  );
};