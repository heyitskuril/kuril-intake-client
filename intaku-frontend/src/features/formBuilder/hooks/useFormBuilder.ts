import { useState, useEffect, useCallback } from 'react';
import { FormField, FormFieldData } from '../types/formBuilder.types';
import { formBuilderService } from '../services/formBuilderService';
import { useToast } from '../../../shared/hooks/useToast';
export const useFormBuilder = () => {
  const [fields, setFields] = useState<FormField[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedField, setSelectedField] = useState<FormField | null>(null);
  const {
    showToast
  } = useToast();
  const fetchFields = useCallback(async () => {
    setIsLoading(true);
    try {
      const data = await formBuilderService.getFields();
      setFields(data);
    } catch (err) {
      showToast('Failed to load form fields', 'error');
    } finally {
      setIsLoading(false);
    }
  }, [showToast]);
  useEffect(() => {
    fetchFields();
  }, [fetchFields]);
  const addField = async (type: FormField['fieldType']) => {
    const newFieldData: FormFieldData = {
      fieldName: `field_${Date.now()}`,
      fieldLabel: 'New Field',
      fieldType: type,
      isRequired: false,
      isActive: true,
      options: type === 'select' || type === 'radio' || type === 'checkbox' ? [{
        label: 'Option 1',
        value: 'option1'
      }] : undefined
    };
    try {
      const newField = await formBuilderService.saveField(newFieldData);
      setFields(prev => [...prev, newField]);
      setSelectedField(newField);
      showToast('Field added', 'success');
    } catch (err) {
      showToast('Failed to add field', 'error');
    }
  };
  const updateField = async (data: FormFieldData) => {
    try {
      const updated = await formBuilderService.saveField(data);
      setFields(prev => prev.map(f => f.id === updated.id ? updated : f));
      if (selectedField?.id === updated.id) {
        setSelectedField(updated);
      }
      showToast('Field updated', 'success');
    } catch (err) {
      showToast('Failed to update field', 'error');
    }
  };
  const deleteField = async (id: string) => {
    try {
      await formBuilderService.deleteField(id);
      setFields(prev => prev.filter(f => f.id !== id));
      if (selectedField?.id === id) {
        setSelectedField(null);
      }
      showToast('Field deleted', 'success');
    } catch (err) {
      showToast('Failed to delete field', 'error');
    }
  };
  const reorderFields = async (orderedIds: string[]) => {
    const currentFields = [...fields];
    const reorderedMap = new Map(fields.map(f => [f.id, f]));
    const reordered = orderedIds.map(id => reorderedMap.get(id)).filter(Boolean) as FormField[];
    setFields(reordered);
    try {
      await formBuilderService.reorderFields(orderedIds);
    } catch (err) {
      setFields(currentFields);
      showToast('Failed to reorder fields', 'error');
    }
  };
  return {
    fields,
    isLoading,
    selectedField,
    setSelectedField,
    addField,
    updateField,
    deleteField,
    reorderFields
  };
};