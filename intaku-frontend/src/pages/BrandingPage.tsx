import React from 'react';
import { MainLayout } from '../shared/components/Layout/MainLayout';
import { BrandingSettings } from '../features/branding/components/BrandingSettings';
export const BrandingPage: React.FC = () => {
  return <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Branding & Customization
          </h1>
          <p className="text-gray-500">
            Customize the look and feel of your public intake page
          </p>
        </div>
        <BrandingSettings />
      </div>
    </MainLayout>;
};