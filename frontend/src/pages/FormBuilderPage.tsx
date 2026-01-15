import React from 'react';
import { MainLayout } from '@shared/components/Layout/MainLayout';
import { FormBuilderPanel } from '@features/formBuilder/components/FormBuilderPanel';

export const FormBuilderPage: React.FC = () => {
  return (
    <MainLayout>
      <FormBuilderPanel />
    </MainLayout>
  );
};