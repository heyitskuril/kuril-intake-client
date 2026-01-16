export type AnnouncementType = 'info' | 'warning' | 'success' | 'error';
export interface Announcement {
  id: string;
  title: string;
  message: string;
  type: AnnouncementType;
  isActive: boolean;
  priority: number;
  startDate?: string;
  endDate?: string;
}
export interface AnnouncementFormData extends Omit<Announcement, 'id'> {
  id?: string;
}