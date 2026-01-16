import React from 'react';
import { Input } from '../../../shared/components/UI/Input';
interface ColorPickerProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}
export const ColorPicker: React.FC<ColorPickerProps> = ({
  label,
  value,
  onChange
}) => {
  return <div className="space-y-1">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <div className="flex gap-2">
        <div className="relative w-10 h-10 flex-shrink-0 overflow-hidden rounded-md border border-gray-300 shadow-sm">
          <input type="color" value={value} onChange={e => onChange(e.target.value)} className="absolute -top-2 -left-2 w-16 h-16 p-0 border-0 cursor-pointer" />
        </div>
        <div className="flex-grow">
          <Input value={value} onChange={e => onChange(e.target.value)} placeholder="#000000" className="mb-0" />
        </div>
      </div>
    </div>;
};