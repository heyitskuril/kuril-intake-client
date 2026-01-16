import React from 'react';
import { FieldType } from '../types/formBuilder.types';
import { Button } from '../../../shared/components/UI/Button';
import { Type, AlignLeft, Mail, Hash, List, CheckSquare, Circle, Calendar, Upload } from 'lucide-react';
interface FieldTypeSelectorProps {
  onSelect: (type: FieldType) => void;
}
const FIELD_TYPES: {
  type: FieldType;
  label: string;
  icon: React.ElementType;
}[] = [{
  type: 'text',
  label: 'Text Input',
  icon: Type
}, {
  type: 'textarea',
  label: 'Text Area',
  icon: AlignLeft
}, {
  type: 'email',
  label: 'Email',
  icon: Mail
}, {
  type: 'number',
  label: 'Number',
  icon: Hash
}, {
  type: 'select',
  label: 'Dropdown',
  icon: List
}, {
  type: 'radio',
  label: 'Radio Buttons',
  icon: Circle
}, {
  type: 'checkbox',
  label: 'Checkboxes',
  icon: CheckSquare
}, {
  type: 'date',
  label: 'Date Picker',
  icon: Calendar
}, {
  type: 'file',
  label: 'File Upload',
  icon: Upload
}];
export const FieldTypeSelector: React.FC<FieldTypeSelectorProps> = ({
  onSelect
}) => {
  return <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
      <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wider">
        Add Fields
      </h3>
      <div className="grid grid-cols-1 gap-2">
        {FIELD_TYPES.map(({
        type,
        label,
        icon: Icon
      }) => <Button key={type} variant="secondary" className="justify-start" onClick={() => onSelect(type)} leftIcon={<Icon className="w-4 h-4" />}>
            {label}
          </Button>)}
      </div>
    </div>;
};