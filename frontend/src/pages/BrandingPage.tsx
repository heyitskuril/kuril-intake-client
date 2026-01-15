import React from 'react';
import { MainLayout } from '@shared/components/Layout/MainLayout';
import { BrandingSettings } from '@features/branding/components/BrandingSettings';

export const BrandingPage: React.FC = () => {
  return (
    <MainLayout>
      <BrandingSettings />
    </MainLayout>
  );
};