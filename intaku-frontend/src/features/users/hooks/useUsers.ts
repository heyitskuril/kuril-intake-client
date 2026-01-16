import { useState, useEffect, useCallback } from 'react';
import { User, CreateUserData, UserRole } from '../types/users.types';
import { usersService } from '../services/usersService';
import { useToast } from '../../../shared/hooks/useToast';
export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const {
    showToast
  } = useToast();
  const fetchUsers = useCallback(async () => {
    setIsLoading(true);
    try {
      const data = await usersService.getUsers();
      setUsers(data);
    } catch (err) {
      showToast('Failed to load users', 'error');
    } finally {
      setIsLoading(false);
    }
  }, [showToast]);
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);
  const createUser = async (data: CreateUserData) => {
    try {
      const newUser = await usersService.createUser(data);
      setUsers(prev => [...prev, newUser]);
      showToast('User created successfully', 'success');
      return newUser;
    } catch (err) {
      showToast('Failed to create user', 'error');
      throw err;
    }
  };
  const updateUserRole = async (id: string, role: UserRole) => {
    try {
      const updated = await usersService.updateUserRole(id, role);
      setUsers(prev => prev.map(u => u.id === id ? updated : u));
      showToast('User role updated', 'success');
    } catch (err) {
      showToast('Failed to update role', 'error');
    }
  };
  const toggleUserStatus = async (id: string) => {
    try {
      const updated = await usersService.toggleUserStatus(id);
      setUsers(prev => prev.map(u => u.id === id ? updated : u));
      showToast(`User ${updated.isActive ? 'activated' : 'deactivated'}`, 'success');
    } catch (err) {
      showToast('Failed to update status', 'error');
    }
  };
  const deleteUser = async (id: string) => {
    try {
      await usersService.deleteUser(id);
      setUsers(prev => prev.filter(u => u.id !== id));
      showToast('User deleted', 'success');
    } catch (err) {
      showToast('Failed to delete user', 'error');
    }
  };
  return {
    users,
    isLoading,
    createUser,
    updateUserRole,
    toggleUserStatus,
    deleteUser
  };
};