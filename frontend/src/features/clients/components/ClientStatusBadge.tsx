import React from 'react';
import { Badge } from '@shared/components/UI/Badge';
import { ClientStatus } from '@shared/types/common.types';
import { CLIENT_STATUS_LABELS } from '@shared/utils/constants';

interface ClientStatusBadgeProps {
  status: ClientStatus;
}

export const ClientStatusBadge: React.FC<ClientStatusBadgeProps> = ({ status }) => {
  const variantMap: Record<ClientStatus, 'default' | 'success' | 'warning' | 'danger' | 'info'> = {
    new: 'info',
    in_progress: 'warning',
    completed: 'success',
    rejected: 'danger',
    archived: 'default',
  };

  return (
    <Badge variant={variantMap[status]}>
      {CLIENT_STATUS_LABELS[status]}
    </Badge>
  );
};