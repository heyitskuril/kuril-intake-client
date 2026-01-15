import React from 'react';
import { FormField } from '../types/formBuilder.types';
import { Input } from '@shared/components/UI/Input';
import { Textarea } from '@shared/components/UI/Textarea';
import { Select } from '@shared/components/UI/Select';

interface FieldPreviewProps {
  field: FormField;
}

export const FieldPreview: React.FC<FieldPreviewProps> = ({ field }) => {
  const renderField = () => {
    switch (field.field_type) {
      case 'text':
      case 'email':
      case 'number':
        return (
          <Input
            label={field.field_label}
            type={field.field_type}
            placeholder={field.placeholder}
            helperText={field.help_text}
            required={field.is_required}
            disabled
          />
        );

      case 'textarea':
        return (
          <Textarea
            label={field.field_label}
            placeholder={field.placeholder}
            helperText={field.help_text}
            required={field.is_required}
            disabled
          />
        );

      case 'select':
        return (
          <Select
            label={field.field_label}
            options={
              field.options?.map((opt) => ({ value: opt, label: opt })) || []
            }
            helperText={field.help_text}
            required={field.is_required}
            disabled
          />
        );

      case 'radio':
        return (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {field.field_label}
              {field.is_required && <span className="text-red-500 ml-1">*</span>}
            </label>
            <div className="space-y-2">
              {field.options?.map((option, index) => (
                <div key={index} className="flex items-center">
                  <input
                    type="radio"
                    name={field.field_name}
                    value={option}
                    disabled
                    className="w-4 h-4 text-primary-600 border-gray-300"
                  />
                  <label className="ml-2 text-sm text-gray-700">{option}</label>
                </div>
              ))}
            </div>
            {field.help_text && (
              <p className="mt-1 text-sm text-gray-500">{field.help_text}</p>
            )}
          </div>
        );

      case 'checkbox':
        return (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {field.field_label}
              {field.is_required && <span className="text-red-500 ml-1">*</span>}
            </label>
            <div className="space-y-2">
              {field.options?.map((option, index) => (
                <div key={index} className="flex items-center">
                  <input
                    type="checkbox"
                    value={option}
                    disabled
                    className="w-4 h-4 text-primary-600 border-gray-300 rounded"
                  />
                  <label className="ml-2 text-sm text-gray-700">{option}</label>
                </div>
              ))}
            </div>
            {field.help_text && (
              <p className="mt-1 text-sm text-gray-500">{field.help_text}</p>
            )}
          </div>
        );

      case 'date':
        return (
          <Input
            label={field.field_label}
            type="date"
            helperText={field.help_text}
            required={field.is_required}
            disabled
          />
        );

      case 'file':
        return (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {field.field_label}
              {field.is_required && <span className="text-red-500 ml-1">*</span>}
            </label>
            <input
              type="file"
              disabled
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-primary-50 file:text-primary-700"
            />
            {field.help_text && (
              <p className="mt-1 text-sm text-gray-500">{field.help_text}</p>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return <div className="p-4 bg-gray-50 rounded-lg">{renderField()}</div>;
};