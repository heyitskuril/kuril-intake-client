export interface ApiResponse<T = unknown> {
  success: boolean;
  message?: string;
  data?: T;
  error?: string;
}
export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'assistant' | 'viewer';
  avatar?: string;
}
export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}
export type ThemeMode = 'light' | 'dark' | 'system';
export interface SelectOption {
  label: string;
  value: string | number;
  disabled?: boolean;
}