import React from 'react';
import { MainLayout } from '@shared/components/Layout/MainLayout';
import { Dashboard } from '@features/dashboard/components/Dashboard';

export const DashboardPage: React.FC = () => {
  return (
    <MainLayout>
      <Dashboard />
    </MainLayout>
  );
};