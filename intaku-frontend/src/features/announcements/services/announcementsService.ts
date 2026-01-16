import { Announcement, AnnouncementFormData } from '../types/announcements.types';
let MOCK_ANNOUNCEMENTS: Announcement[] = [{
  id: '1',
  title: 'Limited Availability',
  message: 'Currently booking projects for Q2 2024. Q1 is fully booked.',
  type: 'info',
  isActive: true,
  priority: 5,
  startDate: '2024-01-01',
  endDate: '2024-03-31'
}];
export const announcementsService = {
  getAnnouncements: async (): Promise<Announcement[]> => {
    await new Promise(resolve => setTimeout(resolve, 600));
    return [...MOCK_ANNOUNCEMENTS];
  },
  saveAnnouncement: async (data: AnnouncementFormData): Promise<Announcement> => {
    await new Promise(resolve => setTimeout(resolve, 800));
    if (data.id) {
      const index = MOCK_ANNOUNCEMENTS.findIndex(a => a.id === data.id);
      if (index === -1) throw new Error('Not found');
      const updated = {
        ...MOCK_ANNOUNCEMENTS[index],
        ...data
      };
      MOCK_ANNOUNCEMENTS[index] = updated;
      return updated;
    } else {
      const newAnnouncement: Announcement = {
        ...data,
        id: Math.random().toString(36).substr(2, 9)
      };
      MOCK_ANNOUNCEMENTS.push(newAnnouncement);
      return newAnnouncement;
    }
  },
  deleteAnnouncement: async (id: string): Promise<void> => {
    await new Promise(resolve => setTimeout(resolve, 500));
    MOCK_ANNOUNCEMENTS = MOCK_ANNOUNCEMENTS.filter(a => a.id !== id);
  }
};