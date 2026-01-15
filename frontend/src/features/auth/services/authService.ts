import { LoginPayload, LoginResponse, User } from '../types/auth.types';
import { ApiResponse } from '@shared/types/common.types';

const FAKE_USER: User = {
  id: '1',
  name: 'Kuril Admin',
  email: 'admin@kuril.dev',
  role: 'admin',
};

const FAKE_PASSWORD = 'admin123';

export const authService = {
  login: async (
    payload: LoginPayload
  ): Promise<ApiResponse<LoginResponse>> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          payload.email === FAKE_USER.email &&
          payload.password === FAKE_PASSWORD
        ) {
          resolve({
            success: true,
            data: {
              accessToken: 'fake-access-token',
              refreshToken: 'fake-refresh-token',
              user: FAKE_USER,
            },
          });
        } else {
          reject({
            response: {
              data: {
                error: 'Invalid email or password',
              },
            },
          });
        }
      }, 800);
    });
  },

  logout: () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('user');
  },
};
