import React from 'react';
import { useForm } from 'react-hook-form';
import { CreateUserData, UserRole } from '../types/users.types';
import { Modal } from '../../../shared/components/UI/Modal';
import { Input } from '../../../shared/components/UI/Input';
import { Button } from '../../../shared/components/UI/Button';
import { Select } from '../../../shared/components/UI/Select';
interface RegisterFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: CreateUserData) => Promise<void>;
  isLoading?: boolean;
}
export const RegisterForm: React.FC<RegisterFormProps> = ({
  isOpen,
  onClose,
  onSubmit,
  isLoading
}) => {
  const {
    register,
    handleSubmit,
    formState: {
      errors
    },
    reset
  } = useForm<CreateUserData>();
  const handleFormSubmit = async (data: CreateUserData) => {
    await onSubmit(data);
    reset();
    onClose();
  };
  return <Modal isOpen={isOpen} onClose={onClose} title="Add New User" maxWidth="md">
      <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
        <Input label="Full Name" {...register('name', {
        required: 'Name is required'
      })} error={errors.name?.message} />

        <Input label="Email Address" type="email" {...register('email', {
        required: 'Email is required',
        pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          message: 'Invalid email address'
        }
      })} error={errors.email?.message} />

        <Input label="Password" type="password" {...register('password', {
        required: 'Password is required',
        minLength: {
          value: 8,
          message: 'Must be at least 8 characters'
        }
      })} error={errors.password?.message} />

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Role
          </label>
          <select {...register('role')} className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm">
            <option value="viewer">Viewer (Read only)</option>
            <option value="assistant">Assistant (Manage clients)</option>
            <option value="admin">Admin (Full access)</option>
          </select>
        </div>

        <div className="pt-4 flex justify-end gap-3">
          <Button type="button" variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit" isLoading={isLoading}>
            Create User
          </Button>
        </div>
      </form>
    </Modal>;
};