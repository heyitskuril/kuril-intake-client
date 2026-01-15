export interface CreateAnnouncementPayload {
  title: string;
  message: string;
  type?: string;
  is_active?: boolean;
  priority?: number;
  start_date?: Date;
  end_date?: Date;
}

export interface UpdateAnnouncementPayload {
  title?: string;
  message?: string;
  type?: string;
  is_active?: boolean;
  priority?: number;
  start_date?: Date;
  end_date?: Date;
}