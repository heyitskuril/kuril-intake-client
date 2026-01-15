import React from 'react';
import { Badge } from '@shared/components/UI/Badge';
import { UserRole } from '@shared/types/common.types';
import { USER_ROLE_LABELS } from '@shared/utils/constants';

interface UserRoleBadgeProps {
  role: UserRole;
}

export const UserRoleBadge: React.FC<UserRoleBadgeProps> = ({ role }) => {
  const variantMap: Record<UserRole, 'default' | 'success' | 'warning' | 'danger' | 'info'> = {
    admin: 'danger',
    assistant: 'info',
    viewer: 'default',
  };

  return (
    <Badge variant={variantMap[role]}>
      {USER_ROLE_LABELS[role]}
    </Badge>
  );
};