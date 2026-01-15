import { useState, useEffect, useCallback } from 'react';
import { announcementsService } from '../services/announcementsService';
import { Announcement } from '../types/announcements.types';

export const useAnnouncements = (activeOnly: boolean = false) => {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchAnnouncements = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = activeOnly
        ? await announcementsService.getActive()
        : await announcementsService.getAll();
      setAnnouncements(response.data.data?.announcements || []);
    } catch (err: any) {
      setError(err.response?.data?.error || 'Failed to fetch announcements');
    } finally {
      setLoading(false);
    }
  }, [activeOnly]);

  useEffect(() => {
    fetchAnnouncements();
  }, [fetchAnnouncements]);

  return {
    announcements,
    loading,
    error,
    refetch: fetchAnnouncements,
  };
};