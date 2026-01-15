export interface ApiResponse<T = any> {
  success: boolean;
  message?: string;
  data?: T;
  error?: string;
  details?: any;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  limit: number;
  offset: number;
}

export type UserRole = 'admin' | 'assistant' | 'viewer';

export type ClientStatus = 'new' | 'in_progress' | 'completed' | 'rejected' | 'archived';

export type FieldType = 
  | 'text' 
  | 'textarea' 
  | 'email' 
  | 'number' 
  | 'select' 
  | 'radio' 
  | 'checkbox' 
  | 'date' 
  | 'file';

export type ActivityAction =
  | 'client_created'
  | 'client_updated'
  | 'status_changed'
  | 'note_added'
  | 'note_updated'
  | 'note_deleted'
  | 'user_created'
  | 'user_updated'
  | 'user_deleted'
  | 'announcement_created'
  | 'announcement_updated'
  | 'settings_updated'
  | 'service_created'
  | 'service_updated'
  | 'service_deleted'
  | 'form_field_created'
  | 'form_field_updated'
  | 'form_field_deleted'
  | 'branding_updated'
  | 'login'
  | 'logout';