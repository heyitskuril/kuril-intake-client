import React, { useEffect } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { FormField, FormFieldData } from '../types/formBuilder.types';
import { Input } from '../../../shared/components/UI/Input';
import { Button } from '../../../shared/components/UI/Button';
import { Plus, Trash2 } from 'lucide-react';
interface FieldEditorProps {
  field: FormField;
  onUpdate: (data: FormFieldData) => void;
}
export const FieldEditor: React.FC<FieldEditorProps> = ({
  field,
  onUpdate
}) => {
  const {
    register,
    control,
    handleSubmit,
    reset,
    watch
  } = useForm<FormFieldData>();
  const {
    fields: options,
    append,
    remove
  } = useFieldArray({
    control,
    name: 'options'
  });
  useEffect(() => {
    reset(field);
  }, [field, reset]);
  const onSubmit = (data: FormFieldData) => {
    onUpdate({
      ...data,
      id: field.id
    });
  };
  const showOptions = ['select', 'radio', 'checkbox'].includes(field.fieldType);
  return <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 h-full overflow-y-auto">
      <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wider">
        Edit Field Properties
      </h3>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Input label="Label" {...register('fieldLabel', {
        required: true
      })} onBlur={handleSubmit(onSubmit)} />

        <Input label="Field Name (API key)" {...register('fieldName', {
        required: true
      })} onBlur={handleSubmit(onSubmit)} />

        <Input label="Placeholder" {...register('placeholder')} onBlur={handleSubmit(onSubmit)} />

        <Input label="Help Text" {...register('helpText')} onBlur={handleSubmit(onSubmit)} />

        <div className="flex items-center space-x-3 pt-2">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input type="checkbox" {...register('isRequired')} onChange={e => {
            register('isRequired').onChange(e);
            handleSubmit(onSubmit)();
          }} className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
            <span className="text-sm font-medium text-gray-700">
              Required Field
            </span>
          </label>
        </div>

        {showOptions && <div className="border-t border-gray-200 pt-4 mt-4">
            <div className="flex justify-between items-center mb-2">
              <label className="block text-sm font-medium text-gray-700">
                Options
              </label>
              <Button type="button" variant="ghost" size="sm" onClick={() => append({
            label: 'New Option',
            value: 'value'
          })} leftIcon={<Plus className="w-3 h-3" />}>
                Add
              </Button>
            </div>
            <div className="space-y-2">
              {options.map((option, index) => <div key={option.id} className="flex gap-2">
                  <Input {...register(`options.${index}.label` as const)} placeholder="Label" className="mb-0" onBlur={handleSubmit(onSubmit)} />
                  <Input {...register(`options.${index}.value` as const)} placeholder="Value" className="mb-0" onBlur={handleSubmit(onSubmit)} />
                  <Button type="button" variant="ghost" size="sm" className="text-red-500 mt-1" onClick={() => {
              remove(index);
              handleSubmit(onSubmit)();
            }}>
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>)}
            </div>
          </div>}
      </form>
    </div>;
};