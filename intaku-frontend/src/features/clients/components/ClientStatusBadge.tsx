import React from 'react';
import { Badge } from '../../../shared/components/UI/Badge';
import { ClientStatus } from '../types/clients.types';
interface ClientStatusBadgeProps {
  status: ClientStatus;
}
export const ClientStatusBadge: React.FC<ClientStatusBadgeProps> = ({
  status
}) => {
  const getConfig = (status: ClientStatus) => {
    switch (status) {
      case 'new':
        return {
          variant: 'info' as const,
          label: 'New'
        };
      case 'in_progress':
        return {
          variant: 'warning' as const,
          label: 'In Progress'
        };
      case 'completed':
        return {
          variant: 'success' as const,
          label: 'Completed'
        };
      case 'rejected':
        return {
          variant: 'error' as const,
          label: 'Rejected'
        };
      case 'archived':
        return {
          variant: 'default' as const,
          label: 'Archived'
        };
    }
  };
  const config = getConfig(status);
  return <Badge variant={config.variant}>{config.label}</Badge>;
};