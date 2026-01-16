import React, { useState } from 'react';
import { Modal } from '../../../shared/components/UI/Modal';
import { Button } from '../../../shared/components/UI/Button';
import { ClientStatus } from '../types/clients.types';
interface StatusUpdateModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentStatus: ClientStatus;
  onUpdate: (status: ClientStatus) => void;
  isLoading?: boolean;
}
export const StatusUpdateModal: React.FC<StatusUpdateModalProps> = ({
  isOpen,
  onClose,
  currentStatus,
  onUpdate,
  isLoading
}) => {
  const [selectedStatus, setSelectedStatus] = useState<ClientStatus>(currentStatus);
  const handleSubmit = () => {
    onUpdate(selectedStatus);
  };
  return <Modal isOpen={isOpen} onClose={onClose} title="Update Client Status">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Status
          </label>
          <select className="w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500" value={selectedStatus} onChange={e => setSelectedStatus(e.target.value as ClientStatus)}>
            <option value="new">New</option>
            <option value="in_progress">In Progress</option>
            <option value="completed">Completed</option>
            <option value="rejected">Rejected</option>
            <option value="archived">Archived</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Note (Optional)
          </label>
          <textarea className="w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500" rows={3} placeholder="Add a reason for this status change..." />
        </div>

        <div className="flex justify-end gap-3 mt-6">
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleSubmit} isLoading={isLoading}>
            Update Status
          </Button>
        </div>
      </div>
    </Modal>;
};