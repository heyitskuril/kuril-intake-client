import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Input } from '@shared/components/UI/Input';
import { Textarea } from '@shared/components/UI/Textarea';
import { Select } from '@shared/components/UI/Select';
import { Button } from '@shared/components/UI/Button';
import { FieldType } from '@shared/types/common.types';
import { X } from 'lucide-react';

const fieldSchema = z.object({
  field_name: z.string().min(1, 'Field name is required'),
  field_label: z.string().min(1, 'Field label is required'),
  field_type: z.enum(['text', 'textarea', 'email', 'number', 'select', 'radio', 'checkbox', 'date', 'file']),
  placeholder: z.string().optional(),
  help_text: z.string().optional(),
  is_required: z.boolean().optional(),
  is_active: z.boolean().optional(),
});

type FieldFormData = z.infer<typeof fieldSchema>;

interface FieldEditorProps {
  onSubmit: (data: FieldFormData & { options?: string[] }) => Promise<void>;
  defaultValues?: Partial<FieldFormData & { options?: string[] }>;
  submitLabel?: string;
}

export const FieldEditor: React.FC<FieldEditorProps> = ({
  onSubmit,
  defaultValues,
  submitLabel = 'Create Field',
}) => {
  const [options, setOptions] = useState<string[]>(defaultValues?.options || []);
  const [newOption, setNewOption] = useState('');

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FieldFormData>({
    resolver: zodResolver(fieldSchema),
    defaultValues: {
      ...defaultValues,
      is_required: defaultValues?.is_required ?? false,
      is_active: defaultValues?.is_active ?? true,
    },
  });

  const fieldType = watch('field_type');
  const needsOptions = ['select', 'radio', 'checkbox'].includes(fieldType);

  const addOption = () => {
    if (newOption.trim()) {
      setOptions([...options, newOption.trim()]);
      setNewOption('');
    }
  };

  const removeOption = (index: number) => {
    setOptions(options.filter((_, i) => i !== index));
  };

  const handleFormSubmit = async (data: FieldFormData) => {
    await onSubmit({ ...data, options: needsOptions ? options : undefined });
  };

  const fieldTypeOptions = [
    { value: 'text', label: 'Text' },
    { value: 'textarea', label: 'Textarea' },
    { value: 'email', label: 'Email' },
    { value: 'number', label: 'Number' },
    { value: 'select', label: 'Select Dropdown' },
    { value: 'radio', label: 'Radio Buttons' },
    { value: 'checkbox', label: 'Checkboxes' },
    { value: 'date', label: 'Date' },
    { value: 'file', label: 'File Upload' },
  ];

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Field Name"
          {...register('field_name')}
          error={errors.field_name?.message}
          helperText="Internal identifier (no spaces)"
          required
        />

        <Input
          label="Field Label"
          {...register('field_label')}
          error={errors.field_label?.message}
          helperText="Label shown to users"
          required
        />
      </div>

      <Select
        label="Field Type"
        options={fieldTypeOptions}
        {...register('field_type')}
        error={errors.field_type?.message}
        required
      />

      <Input
        label="Placeholder"
        {...register('placeholder')}
        error={errors.placeholder?.message}
        helperText="Optional placeholder text"
      />

      <Textarea
        label="Help Text"
        {...register('help_text')}
        error={errors.help_text?.message}
        helperText="Optional help text for users"
        rows={2}
      />

      {needsOptions && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Options
          </label>
          <div className="flex gap-2 mb-3">
            <Input
              value={newOption}
              onChange={(e) => setNewOption(e.target.value)}
              placeholder="Add an option..."
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  addOption();
                }
              }}
            />
            <Button type="button" onClick={addOption}>
              Add
            </Button>
          </div>
          <div className="space-y-2">
            {options.map((option, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-gray-50 px-3 py-2 rounded-lg"
              >
                <span className="text-sm text-gray-700">{option}</span>
                <button
                  type="button"
                  onClick={() => removeOption(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="flex items-center space-x-6">
        <div className="flex items-center">
          <input
            type="checkbox"
            {...register('is_required')}
            className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
          />
          <label className="ml-2 text-sm text-gray-700">Required Field</label>
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            {...register('is_active')}
            className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
          />
          <label className="ml-2 text-sm text-gray-700">Active</label>
        </div>
      </div>

      <Button type="submit" isLoading={isSubmitting} fullWidth>
        {submitLabel}
      </Button>
    </form>
  );
};