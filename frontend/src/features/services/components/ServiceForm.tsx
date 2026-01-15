import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Input } from '@shared/components/UI/Input';
import { Textarea } from '@shared/components/UI/Textarea';
import { Button } from '@shared/components/UI/Button';
import { X } from 'lucide-react';

const serviceSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  description: z.string().min(1, 'Description is required'),
  slug: z.string().min(1, 'Slug is required'),
  min_price: z.number().min(0, 'Min price must be positive'),
  max_price: z.number().min(0, 'Max price must be positive'),
  estimated_days: z.number().min(1, 'Estimated days must be at least 1'),
  is_active: z.boolean().optional(),
});

type ServiceFormData = z.infer<typeof serviceSchema>;

interface ServiceFormProps {
  onSubmit: (data: ServiceFormData & { features: string[] }) => Promise<void>;
  defaultValues?: Partial<ServiceFormData & { features: string[] }>;
  submitLabel?: string;
}

export const ServiceForm: React.FC<ServiceFormProps> = ({
  onSubmit,
  defaultValues,
  submitLabel = 'Create Service',
}) => {
  const [features, setFeatures] = useState<string[]>(defaultValues?.features || []);
  const [newFeature, setNewFeature] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ServiceFormData>({
    resolver: zodResolver(serviceSchema),
    defaultValues: {
      ...defaultValues,
      is_active: defaultValues?.is_active ?? true,
    },
  });

  const addFeature = () => {
    if (newFeature.trim()) {
      setFeatures([...features, newFeature.trim()]);
      setNewFeature('');
    }
  };

  const removeFeature = (index: number) => {
    setFeatures(features.filter((_, i) => i !== index));
  };

  const handleFormSubmit = async (data: ServiceFormData) => {
    await onSubmit({ ...data, features });
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Service Name"
          {...register('name')}
          error={errors.name?.message}
          required
        />

        <Input
          label="Slug"
          {...register('slug')}
          error={errors.slug?.message}
          helperText="URL-friendly identifier"
          required
        />
      </div>

      <Textarea
        label="Description"
        {...register('description')}
        error={errors.description?.message}
        rows={4}
        required
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Input
          label="Min Price ($)"
          type="number"
          {...register('min_price', { valueAsNumber: true })}
          error={errors.min_price?.message}
          required
        />

        <Input
          label="Max Price ($)"
          type="number"
          {...register('max_price', { valueAsNumber: true })}
          error={errors.max_price?.message}
          required
        />

        <Input
          label="Estimated Days"
          type="number"
          {...register('estimated_days', { valueAsNumber: true })}
          error={errors.estimated_days?.message}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Features
        </label>
        <div className="flex gap-2 mb-3">
          <Input
            value={newFeature}
            onChange={(e) => setNewFeature(e.target.value)}
            placeholder="Add a feature..."
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                addFeature();
              }
            }}
          />
          <Button type="button" onClick={addFeature}>
            Add
          </Button>
        </div>
        <div className="space-y-2">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-gray-50 px-3 py-2 rounded-lg"
            >
              <span className="text-sm text-gray-700">{feature}</span>
              <button
                type="button"
                onClick={() => removeFeature(index)}
                className="text-red-500 hover:text-red-700"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
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