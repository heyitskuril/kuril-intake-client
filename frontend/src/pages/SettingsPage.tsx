import React from 'react';
import { MainLayout } from '@shared/components/Layout/MainLayout';
import { Card } from '@shared/components/UI/Card';

export const SettingsPage: React.FC = () => {
  return (
    <MainLayout>
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Settings</h1>
        <Card>
          <p className="text-gray-600">Settings page - Coming soon</p>
        </Card>
      </div>
    </MainLayout>
  );
};