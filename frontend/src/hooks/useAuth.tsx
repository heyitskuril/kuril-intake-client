// Auth Hooks
// Custom hooks untuk authentication

import { useMutation, useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { authAPI } from '../services/api';
import useAuthStore from '../store/authStore';
import { toast } from 'react-hot-toast';

// Login mutation
export const useLogin = () => {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);

  return useMutation({
    mutationFn: authAPI.login,
    onSuccess: (data) => {
      const { token, user } = data.data;
      login(user, token);
      toast.success('Login successful!');
      navigate('/admin/dashboard');
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || 'Login failed');
    },
  });
};

// Logout
export const useLogout = () => {
  const navigate = useNavigate();
  const logout = useAuthStore((state) => state.logout);

  return () => {
    logout();
    toast.success('Logged out successfully');
    navigate('/admin/login');
  };
};

// Get current user profile
export const useMe = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  return useQuery({
    queryKey: ['me'],
    queryFn: authAPI.getMe,
    enabled: isAuthenticated,
    retry: false,
  });
};