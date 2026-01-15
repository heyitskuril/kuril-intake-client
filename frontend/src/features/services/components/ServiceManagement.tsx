import React, { useState } from 'react';
import { ServiceList } from './ServiceList';
import { ServiceForm } from './ServiceForm';
import { Modal } from '@shared/components/UI/Modal';
import { Button } from '@shared/components/UI/Button';
import { servicesService } from '../services/servicesService';
import { useServices } from '../hooks/useService';
import { Plus } from 'lucide-react';

export const ServiceManagement: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { refetch } = useServices();

  const handleCreateService = async (data: any) => {
    try {
      await servicesService.create(data);
      setIsModalOpen(false);
      refetch();
    } catch (error) {
      console.error('Failed to create service:', error);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Services</h1>
        <Button onClick={() => setIsModalOpen(true)}>
          <Plus className="w-4 h-4 mr-2" />
          Add Service
        </Button>
      </div>

      <ServiceList />

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Create New Service"
        size="lg"
      >
        <ServiceForm onSubmit={handleCreateService} />
      </Modal>
    </div>
  );
};