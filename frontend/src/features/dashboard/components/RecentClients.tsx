import React from 'react';
import { Card } from '@shared/components/UI/Card';
import { Table } from '@shared/components/UI/Table';
import { ClientStatusBadge } from '@features/clients/components/ClientStatusBadge';
import { Client } from '@features/clients/types/clients.types';
import { formatRelativeTime } from '@shared/utils/formatters';
import { useNavigate } from 'react-router-dom';

interface RecentClientsProps {
  clients: Client[];
}

export const RecentClients: React.FC<RecentClientsProps> = ({ clients }) => {
  const navigate = useNavigate();

  const columns = [
    {
      key: 'name',
      header: 'Name',
      render: (client: Client) => client.name,
    },
    {
      key: 'email',
      header: 'Email',
      render: (client: Client) => client.email,
    },
    {
      key: 'status',
      header: 'Status',
      render: (client: Client) => <ClientStatusBadge status={client.status} />,
    },
    {
      key: 'created_at',
      header: 'Submitted',
      render: (client: Client) => formatRelativeTime(client.created_at),
    },
  ];

  return (
    <Card>
      <h3 className="text-lg font-medium text-gray-900 mb-4">Recent Submissions</h3>
      <Table
        data={clients}
        columns={columns}
        onRowClick={(client) => navigate(`/clients/${client.id}`)}
        emptyMessage="No recent clients"
      />
    </Card>
  );
};