import React from 'react';
import { Input } from '@shared/components/UI/Input';
import { Select } from '@shared/components/UI/Select';
import { ClientStatus } from '@shared/types/common.types';
import { CLIENT_STATUS_LABELS } from '@shared/utils/constants';

interface ClientFiltersProps {
  onFilterChange: (filters: any) => void;
}

export const ClientFilters: React.FC<ClientFiltersProps> = ({ onFilterChange }) => {
  const statusOptions = Object.entries(CLIENT_STATUS_LABELS).map(([value, label]) => ({
    value,
    label,
  }));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      <Input
        placeholder="Search by name or email..."
        onChange={(e) => onFilterChange({ search: e.target.value })}
      />
      <Select
        options={statusOptions}
        onChange={(e) => onFilterChange({ status: e.target.value || undefined })}
      />
    </div>
  );
};