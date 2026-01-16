import { useState, useEffect, useCallback } from 'react';
import { Announcement, AnnouncementFormData } from '../types/announcements.types';
import { announcementsService } from '../services/announcementsService';
import { useToast } from '../../../shared/hooks/useToast';
export const useAnnouncements = () => {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const {
    showToast
  } = useToast();
  const fetchAnnouncements = useCallback(async () => {
    setIsLoading(true);
    try {
      const data = await announcementsService.getAnnouncements();
      setAnnouncements(data);
    } catch (err) {
      showToast('Failed to load announcements', 'error');
    } finally {
      setIsLoading(false);
    }
  }, [showToast]);
  useEffect(() => {
    fetchAnnouncements();
  }, [fetchAnnouncements]);
  const saveAnnouncement = async (data: AnnouncementFormData) => {
    try {
      const saved = await announcementsService.saveAnnouncement(data);
      if (data.id) {
        setAnnouncements(prev => prev.map(a => a.id === saved.id ? saved : a));
        showToast('Announcement updated', 'success');
      } else {
        setAnnouncements(prev => [...prev, saved]);
        showToast('Announcement created', 'success');
      }
    } catch (err) {
      showToast('Failed to save announcement', 'error');
      throw err;
    }
  };
  const deleteAnnouncement = async (id: string) => {
    try {
      await announcementsService.deleteAnnouncement(id);
      setAnnouncements(prev => prev.filter(a => a.id !== id));
      showToast('Announcement deleted', 'success');
    } catch (err) {
      showToast('Failed to delete announcement', 'error');
    }
  };
  return {
    announcements,
    isLoading,
    saveAnnouncement,
    deleteAnnouncement
  };
};