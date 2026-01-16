import React from 'react';
import { useFormBuilder } from '../hooks/useFormBuilder';
import { FieldTypeSelector } from './FieldTypeSelector';
import { FieldPreview } from './FieldPreview';
import { FieldEditor } from './FieldEditor';
import { Loader2 } from 'lucide-react';
export const FormBuilderPanel: React.FC = () => {
  const {
    fields,
    isLoading,
    selectedField,
    setSelectedField,
    addField,
    updateField,
    deleteField,
    reorderFields
  } = useFormBuilder();
  const handleMove = (index: number, direction: 'up' | 'down') => {
    if (direction === 'up' && index === 0 || direction === 'down' && index === fields.length - 1) return;
    const newFields = [...fields];
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    const temp = newFields[index];
    newFields[index] = newFields[targetIndex];
    newFields[targetIndex] = temp;
    reorderFields(newFields.map(f => f.id));
  };
  if (isLoading) {
    return <div className="flex justify-center items-center h-64">
        <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
      </div>;
  }
  return <div className="h-[calc(100vh-12rem)] flex gap-6">
      {/* Left: Palette */}
      <div className="w-64 flex-shrink-0">
        <FieldTypeSelector onSelect={addField} />
      </div>

      {/* Center: Canvas */}
      <div className="flex-grow bg-gray-50 rounded-lg border-2 border-dashed border-gray-300 p-6 overflow-y-auto">
        <div className="max-w-2xl mx-auto space-y-4 bg-white p-8 rounded-xl shadow-sm min-h-full">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Intake Form</h2>
            <p className="text-gray-500">
              This is how your form will look to clients
            </p>
          </div>

          {fields.length === 0 ? <div className="text-center py-12 text-gray-400">
              Select a field type from the left to add it to your form
            </div> : fields.map((field, index) => <FieldPreview key={field.id} field={field} isSelected={selectedField?.id === field.id} onSelect={() => setSelectedField(field)} onDelete={() => deleteField(field.id)} onMoveUp={() => handleMove(index, 'up')} onMoveDown={() => handleMove(index, 'down')} isFirst={index === 0} isLast={index === fields.length - 1} />)}

          <div className="pt-6 border-t border-gray-100">
            <button disabled className="w-full py-2 px-4 bg-blue-600 text-white rounded-md opacity-50 cursor-not-allowed font-medium">
              Submit Request
            </button>
          </div>
        </div>
      </div>

      {/* Right: Properties */}
      <div className="w-80 flex-shrink-0">
        {selectedField ? <FieldEditor field={selectedField} onUpdate={updateField} /> : <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 h-full flex items-center justify-center text-gray-400 text-center">
            <p>Select a field to edit its properties</p>
          </div>}
      </div>
    </div>;
};