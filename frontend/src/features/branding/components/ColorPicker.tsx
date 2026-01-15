import React from 'react';
import { Input } from '@shared/components/UI/Input';

interface ColorPickerProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  helperText?: string;
}

export const ColorPicker: React.FC<ColorPickerProps> = ({
  label,
  value,
  onChange,
  helperText,
}) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <div className="flex items-center space-x-3">
        <input
          type="color"
          value={value || '#3B82F6'}
          onChange={(e) => onChange(e.target.value)}
          className="h-10 w-20 rounded border border-gray-300 cursor-pointer"
        />
        <Input
          type="text"
          value={value || '#3B82F6'}
          onChange={(e) => onChange(e.target.value)}
          placeholder="#3B82F6"
          className="flex-1"
        />
      </div>
      {helperText && <p className="mt-1 text-sm text-gray-500">{helperText}</p>}
    </div>
  );
};