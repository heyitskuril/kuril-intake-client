import React, { useState } from 'react';
import { User, UserRole } from '../types/users.types';
import { Table } from '../../../shared/components/UI/Table';
import { Button } from '../../../shared/components/UI/Button';
import { Badge } from '../../../shared/components/UI/Badge';
import { UserRoleBadge } from './UserRoleBadge';
import { Trash2, Shield, Power } from 'lucide-react';
import { formatDate } from '../../../shared/utils/formatters';
interface UserListProps {
  users: User[];
  onUpdateRole: (id: string, role: UserRole) => void;
  onToggleStatus: (id: string) => void;
  onDelete: (id: string) => void;
  currentUserId?: string;
}
export const UserList: React.FC<UserListProps> = ({
  users,
  onUpdateRole,
  onToggleStatus,
  onDelete,
  currentUserId = '1' // Mock current user ID
}) => {
  const columns = [{
    header: 'User',
    accessorKey: 'name',
    cell: (user: User) => <div className="flex items-center">
          <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold mr-3">
            {user.name.charAt(0)}
          </div>
          <div>
            <div className="font-medium text-gray-900">{user.name}</div>
            <div className="text-xs text-gray-500">{user.email}</div>
          </div>
        </div>
  }, {
    header: 'Role',
    accessorKey: 'role',
    cell: (user: User) => <UserRoleBadge role={user.role} />
  }, {
    header: 'Status',
    accessorKey: 'isActive',
    cell: (user: User) => <Badge variant={user.isActive ? 'success' : 'default'}>
          {user.isActive ? 'Active' : 'Inactive'}
        </Badge>
  }, {
    header: 'Last Login',
    accessorKey: 'lastLogin',
    cell: (user: User) => <span className="text-sm text-gray-600">
          {formatDate(user.lastLogin)}
        </span>
  }, {
    header: 'Actions',
    accessorKey: 'id',
    cell: (user: User) => {
      const isSelf = user.id === currentUserId;
      return <div className="flex items-center space-x-2">
            {!isSelf && <>
                <Button variant="ghost" size="sm" onClick={() => onUpdateRole(user.id, user.role === 'admin' ? 'viewer' : 'admin')} title="Toggle Admin Role">
                  <Shield className="w-4 h-4 text-gray-500" />
                </Button>
                <Button variant="ghost" size="sm" onClick={() => onToggleStatus(user.id)} title={user.isActive ? 'Deactivate' : 'Activate'}>
                  <Power className={`w-4 h-4 ${user.isActive ? 'text-green-500' : 'text-gray-400'}`} />
                </Button>
                <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700 hover:bg-red-50" onClick={() => {
            if (window.confirm('Are you sure you want to delete this user?')) {
              onDelete(user.id);
            }
          }} title="Delete">
                  <Trash2 className="w-4 h-4" />
                </Button>
              </>}
            {isSelf && <span className="text-xs text-gray-400 italic">Current User</span>}
          </div>;
    }
  }];
  return <Table data={users} columns={columns} keyField="id" />;
};