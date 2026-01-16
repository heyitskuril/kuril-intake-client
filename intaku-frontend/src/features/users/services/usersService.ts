import { User, CreateUserData, UserRole } from '../types/users.types';

// Mock data
let MOCK_USERS: User[] = [{
  id: '1',
  name: 'Admin User',
  email: 'admin@kuril.dev',
  role: 'admin',
  isActive: true,
  lastLogin: '2024-01-15T10:30:00Z',
  createdAt: '2024-01-01T00:00:00Z'
}, {
  id: '2',
  name: 'Sarah Assistant',
  email: 'sarah@example.com',
  role: 'assistant',
  isActive: true,
  lastLogin: '2024-01-14T15:20:00Z',
  createdAt: '2024-01-05T00:00:00Z'
}, {
  id: '3',
  name: 'Mike Viewer',
  email: 'mike@example.com',
  role: 'viewer',
  isActive: false,
  lastLogin: '2024-01-10T09:00:00Z',
  createdAt: '2024-01-08T00:00:00Z'
}];
export const usersService = {
  getUsers: async (): Promise<User[]> => {
    await new Promise(resolve => setTimeout(resolve, 600));
    return [...MOCK_USERS];
  },
  createUser: async (data: CreateUserData): Promise<User> => {
    await new Promise(resolve => setTimeout(resolve, 800));
    const newUser: User = {
      id: Math.random().toString(36).substr(2, 9),
      name: data.name,
      email: data.email,
      role: data.role,
      isActive: true,
      lastLogin: new Date().toISOString(),
      // Mock
      createdAt: new Date().toISOString()
    };
    MOCK_USERS.push(newUser);
    return newUser;
  },
  updateUserRole: async (id: string, role: UserRole): Promise<User> => {
    await new Promise(resolve => setTimeout(resolve, 500));
    const user = MOCK_USERS.find(u => u.id === id);
    if (!user) throw new Error('User not found');
    user.role = role;
    return {
      ...user
    };
  },
  toggleUserStatus: async (id: string): Promise<User> => {
    await new Promise(resolve => setTimeout(resolve, 500));
    const user = MOCK_USERS.find(u => u.id === id);
    if (!user) throw new Error('User not found');
    user.isActive = !user.isActive;
    return {
      ...user
    };
  },
  deleteUser: async (id: string): Promise<void> => {
    await new Promise(resolve => setTimeout(resolve, 600));
    MOCK_USERS = MOCK_USERS.filter(u => u.id !== id);
  }
};