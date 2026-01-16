import React from 'react';
import { UserRole } from '../types/users.types';
import { Badge } from '../../../shared/components/UI/Badge';
interface UserRoleBadgeProps {
  role: UserRole;
}
export const UserRoleBadge: React.FC<UserRoleBadgeProps> = ({
  role
}) => {
  const variants: Record<UserRole, 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger'> = {
    admin: 'secondary',
    assistant: 'primary',
    viewer: 'default' // Gray
  };
  return <Badge variant={variants[role]}>
      {role.charAt(0).toUpperCase() + role.slice(1)}
    </Badge>;
};