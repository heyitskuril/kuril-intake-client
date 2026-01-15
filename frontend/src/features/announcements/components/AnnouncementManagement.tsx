import React, { useState } from 'react';
import { Card } from '@shared/components/UI/Card';
import { Button } from '@shared/components/UI/Button';
import { Modal } from '@shared/components/UI/Modal';
import { Badge } from '@shared/components/UI/Badge';
import { AnnouncementEditor } from './AnnouncementEditor';
import { Loading } from '@shared/components/UI/Loading';
import { Alert } from '@shared/components/UI/Alert';
import { useAnnouncements } from '../hooks/useAnnouncements';
import { announcementsService } from '../services/announcementsService';
import { Plus, Edit, Trash2 } from 'lucide-react';
import { formatDate } from '@shared/utils/formatters';

export const AnnouncementManagement: React.FC = () => {
  const { announcements, loading, error, refetch } = useAnnouncements();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAnnouncement, setSelectedAnnouncement] = useState<any>(null);

  const handleCreate = async (data: any) => {
    try {
      await announcementsService.create(data);
      setIsModalOpen(false);
      refetch();
    } catch (error) {
      console.error('Failed to create announcement:', error);
    }
  };

  const handleUpdate = async (data: any) => {
    try {
      await announcementsService.update(selectedAnnouncement.id, data);
      setIsModalOpen(false);
      setSelectedAnnouncement(null);
      refetch();
    } catch (error) {
      console.error('Failed to update announcement:', error);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this announcement?')) return;

    try {
      await announcementsService.delete(id);
      refetch();
    } catch (error) {
      console.error('Failed to delete announcement:', error);
    }
  };

  const openEditModal = (announcement: any) => {
    setSelectedAnnouncement(announcement);
    setIsModalOpen(true);
  };

  const openCreateModal = () => {
    setSelectedAnnouncement(null);
    setIsModalOpen(true);
  };

  if (loading) {
    return <Loading size="lg" message="Loading announcements..." />;
  }

  if (error) {
    return <Alert type="error" message={error} />;
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Announcements</h1>
        <Button onClick={openCreateModal}>
          <Plus className="w-4 h-4 mr-2" />
          Create Announcement
        </Button>
      </div>

      {announcements.length === 0 ? (
        <Card>
          <div className="text-center py-12 text-gray-500">
            No announcements yet. Create your first announcement to get started.
          </div>
        </Card>
      ) : (
        <div className="space-y-4">
          {announcements.map((announcement) => (
            <Card key={announcement.id}>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-lg font-medium text-gray-900">
                      {announcement.title}
                    </h3>
                    <Badge variant={announcement.is_active ? 'success' : 'default'}>
                      {announcement.is_active ? 'Active' : 'Inactive'}
                    </Badge>
                    <Badge variant="info">{announcement.type}</Badge>
                  </div>
                  <p className="text-gray-700 mb-3">{announcement.message}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>Priority: {announcement.priority}</span>
                    <span>Created: {formatDate(announcement.created_at)}</span>
                    {announcement.start_date && (
                      <span>Starts: {formatDate(announcement.start_date)}</span>
                    )}
                    {announcement.end_date && (
                      <span>Ends: {formatDate(announcement.end_date)}</span>
                    )}
                  </div>
                </div>

                <div className="flex items-center space-x-2 ml-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => openEditModal(announcement)}
                  >
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleDelete(announcement.id)}
                  >
                    <Trash2 className="w-4 h-4 text-red-600" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}

      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedAnnouncement(null);
        }}
        title={selectedAnnouncement ? 'Edit Announcement' : 'Create New Announcement'}
        size="lg"
      >
        <AnnouncementEditor
          onSubmit={selectedAnnouncement ? handleUpdate : handleCreate}
          defaultValues={selectedAnnouncement}
          submitLabel={selectedAnnouncement ? 'Update Announcement' : 'Create Announcement'}
        />
      </Modal>
    </div>
  );
};