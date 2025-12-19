// React Query Hooks for Intakes
// Custom hooks untuk data fetching dengan caching

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { intakeAPI } from '../services/api';
import { toast } from 'react-hot-toast';

// Get all intakes with pagination
export const useIntakes = (params) => {
  return useQuery({
    queryKey: ['intakes', params],
    queryFn: () => intakeAPI.getAll(params),
    keepPreviousData: true,
    staleTime: 30000, // 30 seconds
  });
};

// Get single intake by ID
export const useIntake = (id) => {
  return useQuery({
    queryKey: ['intake', id],
    queryFn: () => intakeAPI.getById(id),
    enabled: !!id,
  });
};

// Submit intake form (public)
export const useSubmitIntake = () => {
  return useMutation({
    mutationFn: intakeAPI.submit,
    onSuccess: () => {
      toast.success('Form submitted successfully!');
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || 'Failed to submit form');
    },
  });
};

// Update intake status
export const useUpdateIntakeStatus = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, status }) => intakeAPI.updateStatus(id, status),
    onSuccess: () => {
      toast.success('Status updated successfully!');
      queryClient.invalidateQueries(['intakes']);
      queryClient.invalidateQueries(['intake']);
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || 'Failed to update status');
    },
  });
};

// Delete intake
export const useDeleteIntake = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: intakeAPI.delete,
    onSuccess: () => {
      toast.success('Intake deleted successfully!');
      queryClient.invalidateQueries(['intakes']);
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || 'Failed to delete intake');
    },
  });
};