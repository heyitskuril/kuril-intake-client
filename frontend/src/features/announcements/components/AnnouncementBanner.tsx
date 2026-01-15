import React from 'react';
import { Alert } from '@shared/components/UI/Alert';
import { Announcement } from '../types/announcements.types';

interface AnnouncementBannerProps {
  announcements: Announcement[];
}

export const AnnouncementBanner: React.FC<AnnouncementBannerProps> = ({ announcements }) => {
  if (announcements.length === 0) return null;

  // Sort by priority (higher priority first)
  const sortedAnnouncements = [...announcements].sort((a, b) => b.priority - a.priority);

  return (
    <div className="space-y-3">
      {sortedAnnouncements.map((announcement) => (
        <Alert
          key={announcement.id}
          type={announcement.type}
          title={announcement.title}
          message={announcement.message}
        />
      ))}
    </div>
  );
};