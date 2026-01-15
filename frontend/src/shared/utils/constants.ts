import { ClientStatus, UserRole } from '@shared/types/common.types';

export const CLIENT_STATUS_LABELS: Record<ClientStatus, string> = {
  new: 'New',
  in_progress: 'In Progress',
  completed: 'Completed',
  rejected: 'Rejected',
  archived: 'Archived',
};

export const CLIENT_STATUS_COLORS: Record<ClientStatus, string> = {
  new: 'bg-blue-100 text-blue-800',
  in_progress: 'bg-yellow-100 text-yellow-800',
  completed: 'bg-green-100 text-green-800',
  rejected: 'bg-red-100 text-red-800',
  archived: 'bg-gray-100 text-gray-800',
};

export const USER_ROLE_LABELS: Record<UserRole, string> = {
  admin: 'Admin',
  assistant: 'Assistant',
  viewer: 'Viewer',
};

export const USER_ROLE_COLORS: Record<UserRole, string> = {
  admin: 'bg-purple-100 text-purple-800',
  assistant: 'bg-blue-100 text-blue-800',
  viewer: 'bg-gray-100 text-gray-800',
};

export const ITEMS_PER_PAGE = 50;