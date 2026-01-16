import React, { useState } from 'react';
import { MainLayout } from '../shared/components/Layout/MainLayout';
import { UserList } from '../features/users/components/UserList';
import { RegisterForm } from '../features/users/components/RegisterForm';
import { useUsers } from '../features/users/hooks/useUsers';
import { Button } from '../shared/components/UI/Button';
import { Plus, Loader2 } from 'lucide-react';
export const UsersPage: React.FC = () => {
  const {
    users,
    isLoading,
    createUser,
    updateUserRole,
    toggleUserStatus,
    deleteUser
  } = useUsers();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleCreate = async (data: any) => {
    setIsSubmitting(true);
    try {
      await createUser(data);
      setIsModalOpen(false);
    } finally {
      setIsSubmitting(false);
    }
  };
  return <MainLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Users</h1>
            <p className="text-gray-500">
              Manage team members and access roles
            </p>
          </div>
          <Button onClick={() => setIsModalOpen(true)} leftIcon={<Plus className="w-4 h-4" />}>
            Add User
          </Button>
        </div>

        {isLoading ? <div className="flex justify-center items-center h-64">
            <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
          </div> : <div className="bg-white rounded-lg shadow">
            <UserList users={users} onUpdateRole={updateUserRole} onToggleStatus={toggleUserStatus} onDelete={deleteUser} />
          </div>}

        <RegisterForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSubmit={handleCreate} isLoading={isSubmitting} />
      </div>
    </MainLayout>;
};