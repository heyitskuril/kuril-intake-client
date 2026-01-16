import React, { useState } from 'react';
import { useServices } from '../hooks/useServices';
import { ServiceList } from './ServiceList';
import { ServiceForm } from './ServiceForm';
import { ServiceCard } from './ServiceCard';
import { Service, ServiceFormData } from '../types/services.types';
import { Button } from '../../../shared/components/UI/Button';
import { Modal } from '../../../shared/components/UI/Modal';
import { Plus, Loader2 } from 'lucide-react';
export const ServiceManagement: React.FC = () => {
  const {
    services,
    isLoading,
    createService,
    updateService,
    deleteService,
    reorderServices
  } = useServices();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingService, setEditingService] = useState<Service | undefined>(undefined);
  const [previewService, setPreviewService] = useState<Service | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleCreate = () => {
    setEditingService(undefined);
    setIsFormOpen(true);
  };
  const handleEdit = (service: Service) => {
    setEditingService(service);
    setIsFormOpen(true);
  };
  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this service?')) {
      await deleteService(id);
    }
  };
  const handleSubmit = async (data: ServiceFormData) => {
    setIsSubmitting(true);
    try {
      if (editingService) {
        await updateService(editingService.id, data);
      } else {
        await createService(data);
      }
      setIsFormOpen(false);
    } finally {
      setIsSubmitting(false);
    }
  };
  if (isLoading) {
    return <div className="flex justify-center items-center h-64">
        <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
      </div>;
  }
  return <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Services</h1>
          <p className="text-gray-500">
            Manage your service catalog and pricing
          </p>
        </div>
        <Button onClick={handleCreate} leftIcon={<Plus className="w-4 h-4" />}>
          Add Service
        </Button>
      </div>

      <div className="bg-white rounded-lg shadow">
        <ServiceList services={services} onEdit={handleEdit} onDelete={handleDelete} onPreview={setPreviewService} onReorder={reorderServices} />
      </div>

      <ServiceForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} onSubmit={handleSubmit} initialData={editingService} isLoading={isSubmitting} />

      {/* Preview Modal */}
      <Modal isOpen={!!previewService} onClose={() => setPreviewService(null)} title="Service Preview" maxWidth="lg">
        {previewService && <div className="p-4 bg-gray-50 rounded-lg">
            <ServiceCard service={previewService} />
          </div>}
      </Modal>
    </div>;
};