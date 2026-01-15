export interface Announcement {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'warning' | 'success' | 'error';
  is_active: boolean;
  priority: number;
  start_date?: string;
  end_date?: string;
  created_at: string;
  updated_at: string;
}

export interface CreateAnnouncementPayload {
  title: string;
  message: string;
  type: 'info' | 'warning' | 'success' | 'error';
  is_active?: boolean;
  priority?: number;
  start_date?: string;
  end_date?: string;
}

export interface UpdateAnnouncementPayload {
  title?: string;
  message?: string;
  type?: 'info' | 'warning' | 'success' | 'error';
  is_active?: boolean;
  priority?: number;
  start_date?: string;
  end_date?: string;
}