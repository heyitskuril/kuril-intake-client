import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Announcement, AnnouncementFormData } from '../types/announcements.types';
import { Modal } from '../../../shared/components/UI/Modal';
import { Input } from '../../../shared/components/UI/Input';
import { Button } from '../../../shared/components/UI/Button';
interface AnnouncementEditorProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: AnnouncementFormData) => Promise<void>;
  initialData?: Announcement;
  isLoading?: boolean;
}
export const AnnouncementEditor: React.FC<AnnouncementEditorProps> = ({
  isOpen,
  onClose,
  onSubmit,
  initialData,
  isLoading
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: {
      errors
    }
  } = useForm<AnnouncementFormData>();
  useEffect(() => {
    if (isOpen) {
      reset(initialData || {
        title: '',
        message: '',
        type: 'info',
        isActive: true,
        priority: 0
      });
    }
  }, [isOpen, initialData, reset]);
  const handleFormSubmit = async (data: AnnouncementFormData) => {
    await onSubmit({
      ...data,
      id: initialData?.id
    });
    onClose();
  };
  return <Modal isOpen={isOpen} onClose={onClose} title={initialData ? 'Edit Announcement' : 'New Announcement'} maxWidth="md">
      <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
        <Input label="Title" {...register('title', {
        required: 'Title is required'
      })} error={errors.title?.message} />

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea {...register('message', {
          required: 'Message is required'
        })} rows={3} className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" />
          {errors.message && <p className="mt-1 text-sm text-red-600">
              {errors.message.message}
            </p>}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Type
            </label>
            <select {...register('type')} className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm">
              <option value="info">Info (Blue)</option>
              <option value="warning">Warning (Yellow)</option>
              <option value="success">Success (Green)</option>
              <option value="error">Error (Red)</option>
            </select>
          </div>
          <Input label="Priority (0-10)" type="number" {...register('priority', {
          valueAsNumber: true
        })} />
        </div>

        <div className="flex items-center space-x-2 pt-2">
          <input type="checkbox" {...register('isActive')} className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
          <label className="text-sm font-medium text-gray-700">Active</label>
        </div>

        <div className="pt-4 flex justify-end gap-3">
          <Button type="button" variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit" isLoading={isLoading}>
            Save
          </Button>
        </div>
      </form>
    </Modal>;
};