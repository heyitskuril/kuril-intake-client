import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '@shared/components/UI/Card';
import { ClientStatusBadge } from './ClientStatusBadge';
import { Client } from '../types/clients.types';
import { formatRelativeTime, formatCurrency } from '@shared/utils/formatters';
import { Mail, Building, DollarSign } from 'lucide-react';

interface ClientCardProps {
  client: Client;
}

export const ClientCard: React.FC<ClientCardProps> = ({ client }) => {
  const navigate = useNavigate();

  return (
    <Card
      className="cursor-pointer hover:shadow-lg transition-shadow"
      onClick={() => navigate(`/clients/${client.id}`)}
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{client.name}</h3>
          <div className="flex items-center text-sm text-gray-600 mt-1">
            <Mail className="w-4 h-4 mr-1" />
            {client.email}
          </div>
        </div>
        <ClientStatusBadge status={client.status} />
      </div>

      <div className="space-y-2 text-sm">
        {client.business_type && (
          <div className="flex items-center text-gray-600">
            <Building className="w-4 h-4 mr-2" />
            {client.business_type}
          </div>
        )}
        {client.budget && (
          <div className="flex items-center text-gray-600">
            <DollarSign className="w-4 h-4 mr-2" />
            {formatCurrency(client.budget)}
          </div>
        )}
      </div>

      <div className="mt-4 pt-4 border-t border-gray-200">
        <p className="text-xs text-gray-500">
          Submitted {formatRelativeTime(client.created_at)}
        </p>
      </div>
    </Card>
  );
};