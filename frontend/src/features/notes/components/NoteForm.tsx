import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Textarea } from '@shared/components/UI/Textarea';
import { Button } from '@shared/components/UI/Button';

const noteSchema = z.object({
  note: z.string().min(1, 'Note cannot be empty').max(1000, 'Note is too long'),
});

type NoteFormData = z.infer<typeof noteSchema>;

interface NoteFormProps {
  onSubmit: (data: NoteFormData) => Promise<void>;
  defaultValue?: string;
  submitLabel?: string;
}

export const NoteForm: React.FC<NoteFormProps> = ({ 
  onSubmit, 
  defaultValue = '',
  submitLabel = 'Add Note'
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<NoteFormData>({
    resolver: zodResolver(noteSchema),
    defaultValues: { note: defaultValue },
  });

  const handleFormSubmit = async (data: NoteFormData) => {
    await onSubmit(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
      <Textarea
        {...register('note')}
        error={errors.note?.message}
        placeholder="Add a note..."
        rows={4}
      />
      <Button type="submit" isLoading={isSubmitting}>
        {submitLabel}
      </Button>
    </form>
  );
};