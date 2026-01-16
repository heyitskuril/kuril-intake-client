import React, { useEffect, useState, createContext } from 'react';
import { AuthContextType, AuthState, LoginCredentials } from '../types/auth.types';
import { authService } from '../services/authService';
import { tokenStorage } from '../utils/tokenStorage';
import { useToast } from '../../../shared/hooks/useToast';
export const AuthContext = createContext<AuthContextType | null>(null);
export function AuthProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const [state, setState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    isLoading: true
  });
  const {
    toast
  } = useToast();
  const checkAuth = async () => {
    const token = tokenStorage.getToken();
    const user = tokenStorage.getUser();
    if (token && user) {
      setState({
        user,
        isAuthenticated: true,
        isLoading: false
      });
    } else {
      setState({
        user: null,
        isAuthenticated: false,
        isLoading: false
      });
    }
  };
  useEffect(() => {
    checkAuth();
  }, []);
  const login = async (credentials: LoginCredentials) => {
    try {
      const response = await authService.login(credentials);
      tokenStorage.setToken(response.accessToken);
      tokenStorage.setRefreshToken(response.refreshToken);
      tokenStorage.setUser(response.user);
      setState({
        user: response.user,
        isAuthenticated: true,
        isLoading: false
      });
      toast.success('Welcome back!');
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  };
  const logout = () => {
    authService.logout(); // Fire and forget
    tokenStorage.clear();
    setState({
      user: null,
      isAuthenticated: false,
      isLoading: false
    });
    toast.info('You have been logged out');
  };
  return <AuthContext.Provider value={{
    ...state,
    login,
    logout,
    checkAuth
  }}>
      {children}
    </AuthContext.Provider>;
}