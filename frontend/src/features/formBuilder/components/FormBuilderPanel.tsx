import React, { useState } from 'react';
import { Card } from '@shared/components/UI/Card';
import { Button } from '@shared/components/UI/Button';
import { Modal } from '@shared/components/UI/Modal';
import { FieldEditor } from './FieldEditor';
import { FieldPreview } from './FieldPreview';
import { Loading } from '@shared/components/UI/Loading';
import { Alert } from '@shared/components/UI/Alert';
import { useFormBuilder } from '../hooks/useFormBuilder';
import { formBuilderService } from '../services/formBuilderService';
import { Plus, Edit, Trash2, Eye } from 'lucide-react';
import { Badge } from '@shared/components/UI/Badge';

export const FormBuilderPanel: React.FC = () => {
  const { fields, loading, error, refetch } = useFormBuilder();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedField, setSelectedField] = useState<any>(null);
  const [previewField, setPreviewField] = useState<any>(null);

  const handleCreateField = async (data: any) => {
    try {
      await formBuilderService.create(data);
      setIsModalOpen(false);
      refetch();
    } catch (error) {
      console.error('Failed to create field:', error);
    }
  };

  const handleUpdateField = async (data: any) => {
    try {
      await formBuilderService.update(selectedField.id, data);
      setIsModalOpen(false);
      setSelectedField(null);
      refetch();
    } catch (error) {
      console.error('Failed to update field:', error);
    }
  };

  const handleDeleteField = async (fieldId: string) => {
    if (!confirm('Are you sure you want to delete this field?')) return;

    try {
      await formBuilderService.delete(fieldId);
      refetch();
    } catch (error) {
      console.error('Failed to delete field:', error);
    }
  };

  const openEditModal = (field: any) => {
    setSelectedField(field);
    setIsModalOpen(true);
  };

  const openCreateModal = () => {
    setSelectedField(null);
    setIsModalOpen(true);
  };

  if (loading) {
    return <Loading size="lg" message="Loading form fields..." />;
  }

  if (error) {
    return <Alert type="error" message={error} />;
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Form Builder</h1>
        <Button onClick={openCreateModal}>
          <Plus className="w-4 h-4 mr-2" />
          Add Field
        </Button>
      </div>

      {fields.length === 0 ? (
        <Card>
          <div className="text-center py-12 text-gray-500">
            No form fields yet. Create your first field to get started.
          </div>
        </Card>
      ) : (
        <div className="space-y-4">
          {fields.map((field) => (
            <Card key={field.id}>
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3">
                    <h3 className="text-lg font-medium text-gray-900">
                      {field.field_label}
                    </h3>
                    <Badge variant={field.is_active ? 'success' : 'default'}>
                      {field.is_active ? 'Active' : 'Inactive'}
                    </Badge>
                    {field.is_required && (
                      <Badge variant="warning">Required</Badge>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
                    Type: {field.field_type} • Name: {field.field_name}
                  </p>
                  {field.help_text && (
                    <p className="text-sm text-gray-500 mt-1">{field.help_text}</p>
                  )}
                </div>

                <div className="flex items-center space-x-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setPreviewField(field)}
                  >
                    <Eye className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => openEditModal(field)}
                  >
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleDeleteField(field.id)}
                  >
                    <Trash2 className="w-4 h-4 text-red-600" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}

      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedField(null);
        }}
        title={selectedField ? 'Edit Field' : 'Create New Field'}
        size="lg"
      >
        <FieldEditor
          onSubmit={selectedField ? handleUpdateField : handleCreateField}
          defaultValues={selectedField}
          submitLabel={selectedField ? 'Update Field' : 'Create Field'}
        />
      </Modal>

      <Modal
        isOpen={!!previewField}
        onClose={() => setPreviewField(null)}
        title="Field Preview"
      >
        {previewField && <FieldPreview field={previewField} />}
      </Modal>
    </div>
  );
};