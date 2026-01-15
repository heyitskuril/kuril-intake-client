import React, { useState } from 'react';
import { Card } from '@shared/components/UI/Card';
import { Button } from '@shared/components/UI/Button';
import { Modal } from '@shared/components/UI/Modal';
import { Table } from '@shared/components/UI/Table';
import { UserRoleBadge } from './UserRoleBadge';
import { RegisterForm } from './RegisterForm';
import { Loading } from '@shared/components/UI/Loading';
import { Alert } from '@shared/components/UI/Alert';
import { useUsers } from '../hooks/useUsers';
import { usersService } from '../services/usersService';
import { User } from '../types/users.types';
import { formatDate } from '@shared/utils/formatters';
import { Plus, Trash2 } from 'lucide-react';

export const UserList: React.FC = () => {
  const { users, loading, error, refetch } = useUsers();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCreateUser = async (data: any) => {
    try {
      await usersService.create(data);
      setIsModalOpen(false);
      refetch();
    } catch (error) {
      console.error('Failed to create user:', error);
    }
  };

  const handleDeleteUser = async (userId: string) => {
    if (!confirm('Are you sure you want to delete this user?')) return;

    try {
      await usersService.delete(userId);
      refetch();
    } catch (error) {
      console.error('Failed to delete user:', error);
    }
  };

  if (loading) {
    return <Loading size="lg" message="Loading users..." />;
  }

  if (error) {
    return <Alert type="error" message={error} />;
  }

  const columns = [
    {
      key: 'name',
      header: 'Name',
      render: (user: User) => user.name,
    },
    {
      key: 'email',
      header: 'Email',
      render: (user: User) => user.email,
    },
    {
      key: 'role',
      header: 'Role',
      render: (user: User) => <UserRoleBadge role={user.role} />,
    },
    {
      key: 'created_at',
      header: 'Created',
      render: (user: User) => formatDate(user.created_at),
    },
    {
      key: 'actions',
      header: 'Actions',
      render: (user: User) => (
        <Button
          variant="ghost"
          size="sm"
          onClick={(e) => {
            e.stopPropagation();
            handleDeleteUser(user.id);
          }}
        >
          <Trash2 className="w-4 h-4 text-red-600" />
        </Button>
      ),
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Users</h1>
        <Button onClick={() => setIsModalOpen(true)}>
          <Plus className="w-4 h-4 mr-2" />
          Add User
        </Button>
      </div>

      <Card>
        <Table
          data={users}
          columns={columns}
          emptyMessage="No users found"
        />
      </Card>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Create New User"
        size="md"
      >
        <RegisterForm onSubmit={handleCreateUser} />
      </Modal>
    </div>
  );
};