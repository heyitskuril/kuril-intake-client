import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Input } from '@shared/components/UI/Input';
import { Textarea } from '@shared/components/UI/Textarea';
import { Select } from '@shared/components/UI/Select';
import { Button } from '@shared/components/UI/Button';

const announcementSchema = z.object({
  title: z.string().min(1, 'Title is required').max(255),
  message: z.string().min(1, 'Message is required'),
  type: z.enum(['info', 'warning', 'success', 'error']),
  priority: z.number().min(0).max(100),
  is_active: z.boolean().optional(),
  start_date: z.string().optional(),
  end_date: z.string().optional(),
});

type AnnouncementFormData = z.infer<typeof announcementSchema>;

interface AnnouncementEditorProps {
  onSubmit: (data: AnnouncementFormData) => Promise<void>;
  defaultValues?: Partial<AnnouncementFormData>;
  submitLabel?: string;
}

export const AnnouncementEditor: React.FC<AnnouncementEditorProps> = ({
  onSubmit,
  defaultValues,
  submitLabel = 'Create Announcement',
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<AnnouncementFormData>({
    resolver: zodResolver(announcementSchema),
    defaultValues: {
      ...defaultValues,
      type: defaultValues?.type || 'info',
      priority: defaultValues?.priority || 0,
      is_active: defaultValues?.is_active ?? true,
    },
  });

  const typeOptions = [
    { value: 'info', label: 'Info' },
    { value: 'success', label: 'Success' },
    { value: 'warning', label: 'Warning' },
    { value: 'error', label: 'Error' },
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <Input
        label="Title"
        {...register('title')}
        error={errors.title?.message}
        required
      />

      <Textarea
        label="Message"
        {...register('message')}
        error={errors.message?.message}
        rows={4}
        required
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Select
          label="Type"
          options={typeOptions}
          {...register('type')}
          error={errors.type?.message}
          required
        />

        <Input
          label="Priority"
          type="number"
          {...register('priority', { valueAsNumber: true })}
          error={errors.priority?.message}
          helperText="Higher priority appears first (0-100)"
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Start Date"
          type="datetime-local"
          {...register('start_date')}
          error={errors.start_date?.message}
          helperText="Optional: When to start showing"
        />

        <Input
          label="End Date"
          type="datetime-local"
          {...register('end_date')}
          error={errors.end_date?.message}
          helperText="Optional: When to stop showing"
        />
      </div>

      <div className="flex items-center">
        <input
          type="checkbox"
          {...register('is_active')}
          className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
        />
        <label className="ml-2 text-sm text-gray-700">Active</label>
      </div>

      <Button type="submit" isLoading={isSubmitting} fullWidth>
        {submitLabel}
      </Button>
    </form>
  );
};