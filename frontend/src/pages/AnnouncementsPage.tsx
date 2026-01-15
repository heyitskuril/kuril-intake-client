import React from 'react';
import { MainLayout } from '@shared/components/Layout/MainLayout';
import { AnnouncementManagement } from '@features/announcements/components/AnnouncementManagement';

export const AnnouncementsPage: React.FC = () => {
  return (
    <MainLayout>
      <AnnouncementManagement />
    </MainLayout>
  );
};