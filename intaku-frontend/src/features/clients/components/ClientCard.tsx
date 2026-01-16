import React from 'react';
import { Mail, Building, Calendar } from 'lucide-react';
import { Card } from '../../../shared/components/UI/Card';
import { Client } from '../types/clients.types';
import { ClientStatusBadge } from './ClientStatusBadge';
import { formatDate } from '../../../shared/utils/formatters';
interface ClientCardProps {
  client: Client;
  onUpdateStatus: () => void;
}
export const ClientCard: React.FC<ClientCardProps> = ({
  client,
  onUpdateStatus
}) => {
  return <Card className="p-6">
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xl font-bold">
            {client.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900">{client.name}</h2>
            <div className="flex items-center text-gray-500 mt-1 text-sm">
              <Mail className="w-4 h-4 mr-1" />
              <a href={`mailto:${client.email}`} className="hover:text-blue-600">
                {client.email}
              </a>
            </div>
            {client.companyName && <div className="flex items-center text-gray-500 mt-1 text-sm">
                <Building className="w-4 h-4 mr-1" />
                {client.companyName}
              </div>}
          </div>
        </div>
        <div className="flex flex-col items-end gap-2">
          <ClientStatusBadge status={client.status} />
          <span className="text-xs text-gray-400 flex items-center mt-1">
            <Calendar className="w-3 h-3 mr-1" />
            {formatDate(client.createdAt)}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <button onClick={onUpdateStatus} className="w-full py-2 px-4 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
          Update Status
        </button>
        <button className="w-full py-2 px-4 bg-white border border-gray-300 rounded-md text-sm font-medium text-red-600 hover:bg-red-50 hover:border-red-200 transition-colors">
          Archive Client
        </button>
      </div>
    </Card>;
};