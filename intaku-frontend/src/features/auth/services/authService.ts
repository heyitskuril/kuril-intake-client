import { apiClient } from '../../../shared/utils/apiClient';
import { AuthResponse, LoginCredentials } from '../types/auth.types';
import { User } from '../../../shared/types/common.types';

// Mock implementation for development
const MOCK_DELAY = 1000;
const mockUser: User = {
  id: '1',
  name: 'Admin User',
  email: 'admin@kuril.dev',
  role: 'admin',
  avatar: 'https://ui-avatars.com/api/?name=Admin+User&background=3B82F6&color=fff'
};
export const authService = {
  login: async (credentials: LoginCredentials): Promise<AuthResponse> => {
    // In real app: return apiClient.post('/auth/login', credentials);

    // Mock response
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (credentials.email === 'admin@kuril.dev' && credentials.password === 'Admin123!') {
          resolve({
            accessToken: 'mock_access_token_' + Date.now(),
            refreshToken: 'mock_refresh_token_' + Date.now(),
            user: mockUser
          });
        } else {
          reject(new Error('Invalid email or password'));
        }
      }, MOCK_DELAY);
    });
  },
  logout: async (): Promise<void> => {
    // In real app: return apiClient.post('/auth/logout');
    return Promise.resolve();
  },
  getCurrentUser: async (): Promise<User> => {
    // In real app: return apiClient.get('/auth/me');
    return Promise.resolve(mockUser);
  }
};