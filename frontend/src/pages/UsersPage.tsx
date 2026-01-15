import React from 'react';
import { MainLayout } from '@shared/components/Layout/MainLayout';
import { UserList } from '@features/users/components/UserList';

export const UsersPage: React.FC = () => {
  return (
    <MainLayout>
      <UserList />
    </MainLayout>
  );
};