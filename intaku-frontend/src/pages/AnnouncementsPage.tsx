import React, { useState } from 'react';
import { MainLayout } from '../shared/components/Layout/MainLayout';
import { AnnouncementList } from '../features/announcements/components/AnnouncementList';
import { AnnouncementEditor } from '../features/announcements/components/AnnouncementEditor';
import { useAnnouncements } from '../features/announcements/hooks/useAnnouncements';
import { Button } from '../shared/components/UI/Button';
import { Plus, Loader2 } from 'lucide-react';
import { Announcement } from '../features/announcements/types/announcements.types';
export const AnnouncementsPage: React.FC = () => {
  const {
    announcements,
    isLoading,
    saveAnnouncement,
    deleteAnnouncement
  } = useAnnouncements();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<Announcement | undefined>(undefined);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleCreate = () => {
    setEditingItem(undefined);
    setIsModalOpen(true);
  };
  const handleEdit = (item: Announcement) => {
    setEditingItem(item);
    setIsModalOpen(true);
  };
  const handleSubmit = async (data: any) => {
    setIsSubmitting(true);
    try {
      await saveAnnouncement(data);
      setIsModalOpen(false);
    } finally {
      setIsSubmitting(false);
    }
  };
  return <MainLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Announcements</h1>
            <p className="text-gray-500">
              Manage banners displayed on the public intake page
            </p>
          </div>
          <Button onClick={handleCreate} leftIcon={<Plus className="w-4 h-4" />}>
            New Announcement
          </Button>
        </div>

        {isLoading ? <div className="flex justify-center items-center h-64">
            <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
          </div> : <div className="bg-white rounded-lg shadow">
            <AnnouncementList announcements={announcements} onEdit={handleEdit} onDelete={deleteAnnouncement} />
          </div>}

        <AnnouncementEditor isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSubmit={handleSubmit} initialData={editingItem} isLoading={isSubmitting} />
      </div>
    </MainLayout>;
};