export type UserRole = 'admin' | 'assistant' | 'viewer';
export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  isActive: boolean;
  lastLogin: string;
  createdAt: string;
}
export interface CreateUserData {
  name: string;
  email: string;
  role: UserRole;
  password?: string; // Optional for mock
}