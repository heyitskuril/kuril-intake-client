import React from 'react';
import { FormField } from '../types/formBuilder.types';
import { Input } from '../../../shared/components/UI/Input';
import { Button } from '../../../shared/components/UI/Button';
import { Trash2, Edit2, GripVertical, ArrowUp, ArrowDown } from 'lucide-react';
interface FieldPreviewProps {
  field: FormField;
  isSelected: boolean;
  onSelect: () => void;
  onDelete: () => void;
  onMoveUp: () => void;
  onMoveDown: () => void;
  isFirst: boolean;
  isLast: boolean;
}
export const FieldPreview: React.FC<FieldPreviewProps> = ({
  field,
  isSelected,
  onSelect,
  onDelete,
  onMoveUp,
  onMoveDown,
  isFirst,
  isLast
}) => {
  const renderInput = () => {
    switch (field.fieldType) {
      case 'textarea':
        return <textarea className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" rows={3} placeholder={field.placeholder} disabled />;
      case 'select':
        return <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" disabled>
            <option>Select an option</option>
            {field.options?.map((opt, i) => <option key={i} value={opt.value}>
                {opt.label}
              </option>)}
          </select>;
      case 'radio':
        return <div className="space-y-2">
            {field.options?.map((opt, i) => <div key={i} className="flex items-center">
                <input type="radio" disabled className="h-4 w-4 text-blue-600 border-gray-300" />
                <label className="ml-2 text-sm text-gray-700">
                  {opt.label}
                </label>
              </div>)}
          </div>;
      case 'checkbox':
        return <div className="space-y-2">
            {field.options?.map((opt, i) => <div key={i} className="flex items-center">
                <input type="checkbox" disabled className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
                <label className="ml-2 text-sm text-gray-700">
                  {opt.label}
                </label>
              </div>)}
          </div>;
      case 'file':
        return <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center text-gray-500 text-sm">
            Drag and drop file here or click to upload
          </div>;
      default:
        return <Input type={field.fieldType} placeholder={field.placeholder} disabled className="mb-0" />;
    }
  };
  return <div className={`relative group p-4 rounded-lg border-2 transition-all duration-200 cursor-pointer ${isSelected ? 'border-blue-500 bg-blue-50' : 'border-transparent hover:border-gray-200 hover:bg-gray-50'}`} onClick={onSelect}>
      <div className="flex items-start gap-3">
        <div className="mt-1 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col gap-1">
          <button onClick={e => {
          e.stopPropagation();
          onMoveUp();
        }} disabled={isFirst} className="p-1 hover:bg-white rounded shadow-sm disabled:opacity-30">
            <ArrowUp className="w-4 h-4 text-gray-500" />
          </button>
          <button onClick={e => {
          e.stopPropagation();
          onMoveDown();
        }} disabled={isLast} className="p-1 hover:bg-white rounded shadow-sm disabled:opacity-30">
            <ArrowDown className="w-4 h-4 text-gray-500" />
          </button>
        </div>

        <div className="flex-grow">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {field.fieldLabel}
            {field.isRequired && <span className="text-red-500 ml-1">*</span>}
          </label>
          {renderInput()}
          {field.helpText && <p className="mt-1 text-xs text-gray-500">{field.helpText}</p>}
        </div>

        <div className="opacity-0 group-hover:opacity-100 transition-opacity flex gap-2">
          <Button variant="danger" size="sm" onClick={e => {
          e.stopPropagation();
          onDelete();
        }}>
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>;
};