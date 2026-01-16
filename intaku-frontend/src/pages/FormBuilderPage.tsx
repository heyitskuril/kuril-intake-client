import React from 'react';
import { MainLayout } from '../shared/components/Layout/MainLayout';
import { FormBuilderPanel } from '../features/formBuilder/components/FormBuilderPanel';
export const FormBuilderPage: React.FC = () => {
  return <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Form Builder</h1>
          <p className="text-gray-500">Customize your client intake form</p>
        </div>
        <FormBuilderPanel />
      </div>
    </MainLayout>;
};