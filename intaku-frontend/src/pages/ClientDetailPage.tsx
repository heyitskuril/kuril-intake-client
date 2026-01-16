import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useClientDetail } from '../features/clients/hooks/useClients';
import { ClientCard } from '../features/clients/components/ClientCard';
import { ClientDetail } from '../features/clients/components/ClientDetail';
import { StatusUpdateModal } from '../features/clients/components/StatusUpdateModal';
import { NotesList } from '../features/notes/components/NotesList';
import { Loading } from '../shared/components/UI/Loading';
import { Alert } from '../shared/components/UI/Alert';
export const ClientDetailPage: React.FC = () => {
  const {
    id
  } = useParams<{
    id: string;
  }>();
  const navigate = useNavigate();
  const {
    client,
    isLoading,
    updateStatus
  } = useClientDetail(id || '');
  const [isStatusModalOpen, setIsStatusModalOpen] = useState(false);
  if (isLoading) return <div className="flex justify-center py-20">
        <Loading size="lg" />
      </div>;
  if (!client) return <Alert type="error" message="Client not found" />;
  return <div className="space-y-6">
      <button onClick={() => navigate('/clients')} className="flex items-center text-sm text-gray-500 hover:text-gray-900 transition-colors">
        <ArrowLeft className="w-4 h-4 mr-1" />
        Back to Clients
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <ClientCard client={client} onUpdateStatus={() => setIsStatusModalOpen(true)} />
          <ClientDetail client={client} />
        </div>

        <div className="lg:col-span-1">
          <NotesList clientId={client.id} />
        </div>
      </div>

      <StatusUpdateModal isOpen={isStatusModalOpen} onClose={() => setIsStatusModalOpen(false)} currentStatus={client.status} onUpdate={async status => {
      await updateStatus(status);
      setIsStatusModalOpen(false);
    }} />
    </div>;
};