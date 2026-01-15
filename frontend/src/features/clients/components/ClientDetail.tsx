import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card } from '@shared/components/UI/Card';
import { Button } from '@shared/components/UI/Button';
import { Select } from '@shared/components/UI/Select';
import { ClientStatusBadge } from './ClientStatusBadge';
import { Loading } from '@shared/components/UI/Loading';
import { Alert } from '@shared/components/UI/Alert';
import { clientsService } from '../services/clientsService';
import { Client } from '../types/clients.types';
import { ClientStatus } from '@shared/types/common.types';
import { formatDate, formatCurrency } from '@shared/utils/formatters';
import { CLIENT_STATUS_LABELS } from '@shared/utils/constants';
import { ArrowLeft } from 'lucide-react';

export const ClientDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [client, setClient] = useState<Client | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [updating, setUpdating] = useState(false);
  const [newStatus, setNewStatus] = useState<ClientStatus | ''>('');

  useEffect(() => {
    const fetchClient = async () => {
      try {
        const response = await clientsService.getById(id!);
        setClient(response.data.data?.client || null);
        setNewStatus(response.data.data?.client.status || '');
      } catch (err: any) {
        setError(err.response?.data?.error || 'Failed to fetch client');
      } finally {
        setLoading(false);
      }
    };

    fetchClient();
  }, [id]);

  const handleStatusUpdate = async () => {
    if (!newStatus || !client) return;

    setUpdating(true);
    try {
      await clientsService.update(client.id, { status: newStatus as ClientStatus });
      setClient({ ...client, status: newStatus as ClientStatus });
    } catch (err: any) {
      setError(err.response?.data?.error || 'Failed to update status');
    } finally {
      setUpdating(false);
    }
  };

  if (loading) {
    return <Loading fullScreen message="Loading client details..." />;
  }

  if (error || !client) {
    return (
      <div className="max-w-4xl mx-auto">
        <Alert type="error" message={error || 'Client not found'} />
        <Button onClick={() => navigate('/clients')} className="mt-4">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Clients
        </Button>
      </div>
    );
  }

  const statusOptions = Object.entries(CLIENT_STATUS_LABELS).map(([value, label]) => ({
    value,
    label,
  }));

  return (
    <div className="max-w-4xl mx-auto">
      <Button onClick={() => navigate('/clients')} variant="ghost" className="mb-4">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Clients
      </Button>

      <Card>
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{client.name}</h1>
            <p className="text-gray-600 mt-1">{client.email}</p>
          </div>
          <ClientStatusBadge status={client.status} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="text-sm font-medium text-gray-500">Business Type</h3>
            <p className="mt-1 text-gray-900">{client.business_type || 'N/A'}</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-500">Service Type</h3>
            <p className="mt-1 text-gray-900">{client.service_type || 'N/A'}</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-500">Budget</h3>
            <p className="mt-1 text-gray-900">
              {client.budget ? formatCurrency(client.budget) : 'N/A'}
            </p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-500">Submitted</h3>
            <p className="mt-1 text-gray-900">{formatDate(client.created_at)}</p>
          </div>
        </div>

        {client.notes && (
          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-500 mb-2">Notes</h3>
            <p className="text-gray-900 whitespace-pre-wrap">{client.notes}</p>
          </div>
        )}

        {client.form_data && Object.keys(client.form_data).length > 0 && (
          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-500 mb-2">Additional Information</h3>
            <div className="bg-gray-50 rounded-lg p-4 space-y-2">
              {Object.entries(client.form_data).map(([key, value]) => (
                <div key={key} className="flex justify-between">
                  <span className="text-gray-600">{key}:</span>
                  <span className="text-gray-900 font-medium">{String(value)}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="border-t border-gray-200 pt-6">
          <h3 className="text-sm font-medium text-gray-500 mb-3">Update Status</h3>
          <div className="flex gap-4">
            <div className="flex-1">
              <Select
                options={statusOptions}
                value={newStatus}
                onChange={(e) => setNewStatus(e.target.value as ClientStatus)}
              />
            </div>
            <Button
              onClick={handleStatusUpdate}
              isLoading={updating}
              disabled={!newStatus || newStatus === client.status}
            >
              Update Status
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};