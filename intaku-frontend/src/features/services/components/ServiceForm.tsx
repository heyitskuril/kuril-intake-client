import React, { useEffect } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { Service, ServiceFormData } from '../types/services.types';
import { Modal } from '../../../shared/components/UI/Modal';
import { Input } from '../../../shared/components/UI/Input';
import { Button } from '../../../shared/components/UI/Button';
import { Plus, Trash2, GripVertical } from 'lucide-react';
interface ServiceFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: ServiceFormData) => Promise<void>;
  initialData?: Service;
  isLoading?: boolean;
}
export const ServiceForm: React.FC<ServiceFormProps> = ({
  isOpen,
  onClose,
  onSubmit,
  initialData,
  isLoading
}) => {
  const {
    register,
    control,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: {
      errors
    }
  } = useForm<ServiceFormData>({
    defaultValues: {
      name: '',
      description: '',
      minPrice: 0,
      maxPrice: 0,
      estimatedDays: 0,
      features: [''],
      isActive: true
    }
  });
  const {
    fields,
    append,
    remove
  } = useFieldArray({
    control,
    name: 'features' as any // Type assertion needed for simple string array with react-hook-form
  });
  useEffect(() => {
    if (isOpen) {
      if (initialData) {
        reset({
          name: initialData.name,
          description: initialData.description,
          minPrice: initialData.minPrice,
          maxPrice: initialData.maxPrice,
          estimatedDays: initialData.estimatedDays,
          features: initialData.features,
          isActive: initialData.isActive
        });
      } else {
        reset({
          name: '',
          description: '',
          minPrice: 0,
          maxPrice: 0,
          estimatedDays: 0,
          features: [''],
          isActive: true
        });
      }
    }
  }, [isOpen, initialData, reset]);
  // Auto-generate slug from name (visual only, actual slug gen happens on backend/service)
  const name = watch('name');
  const slug = name ? name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '') : '';
  const handleFormSubmit = async (data: ServiceFormData) => {
    // Filter out empty features
    const cleanedData = {
      ...data,
      features: data.features.filter(f => f.trim() !== '')
    };
    await onSubmit(cleanedData);
    onClose();
  };
  return <Modal isOpen={isOpen} onClose={onClose} title={initialData ? 'Edit Service' : 'Add New Service'} maxWidth="2xl">
      <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="col-span-2">
            <Input label="Service Name" {...register('name', {
            required: 'Service name is required'
          })} error={errors.name?.message} placeholder="e.g. Web Development" />
            <p className="mt-1 text-xs text-gray-500">Slug: {slug}</p>
          </div>

          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea {...register('description', {
            required: 'Description is required'
          })} rows={3} className={`w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm ${errors.description ? 'border-red-300' : ''}`} placeholder="Describe what this service entails..." />
            {errors.description && <p className="mt-1 text-sm text-red-600">
                {errors.description.message}
              </p>}
          </div>

          <div>
            <Input label="Min Price ($)" type="number" {...register('minPrice', {
            required: 'Min price is required',
            min: {
              value: 0,
              message: 'Price must be positive'
            }
          })} error={errors.minPrice?.message} />
          </div>

          <div>
            <Input label="Max Price ($)" type="number" {...register('maxPrice', {
            required: 'Max price is required',
            min: {
              value: 0,
              message: 'Price must be positive'
            },
            validate: val => {
              const min = watch('minPrice');
              return Number(val) >= Number(min) || 'Max price must be greater than min price';
            }
          })} error={errors.maxPrice?.message} />
          </div>

          <div>
            <Input label="Estimated Days" type="number" {...register('estimatedDays', {
            required: 'Timeline is required',
            min: {
              value: 1,
              message: 'Must be at least 1 day'
            }
          })} error={errors.estimatedDays?.message} />
          </div>

          <div className="flex items-center h-full pt-6">
            <label className="flex items-center space-x-3 cursor-pointer">
              <input type="checkbox" {...register('isActive')} className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
              <span className="text-sm font-medium text-gray-700">
                Active (Visible to clients)
              </span>
            </label>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6">
          <div className="flex justify-between items-center mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Features List
            </label>
            <Button type="button" variant="secondary" size="sm" onClick={() => append('')} leftIcon={<Plus className="w-4 h-4" />}>
              Add Feature
            </Button>
          </div>

          <div className="space-y-3">
            {fields.map((field, index) => <div key={field.id} className="flex items-center gap-2">
                <GripVertical className="w-5 h-5 text-gray-400 cursor-move" />
                <div className="flex-grow">
                  <Input {...register(`features.${index}` as const, {
                required: true
              })} placeholder="e.g. Responsive Design" className="mb-0" />
                </div>
                <Button type="button" variant="danger" size="sm" onClick={() => remove(index)} disabled={fields.length === 1} className="mt-0">
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>)}
          </div>
        </div>

        <div className="flex justify-end gap-3 pt-6 border-t border-gray-200">
          <Button type="button" variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit" isLoading={isLoading}>
            {initialData ? 'Save Changes' : 'Create Service'}
          </Button>
        </div>
      </form>
    </Modal>;
};