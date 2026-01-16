import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Card } from '../../../shared/components/UI/Card';
import { Table } from '../../../shared/components/UI/Table';
import { Client } from '../../clients/types/clients.types';
import { ClientStatusBadge } from '../../clients/components/ClientStatusBadge';
import { formatDate } from '../../../shared/utils/formatters';
interface RecentClientsProps {
  clients: Client[]; // Using Client type but we'll map from dashboard data if needed, or fetch separately
}
// For now, let's assume we pass a simplified list or fetch it
// We'll mock the data structure here to match what the dashboard might provide
// or reuse the Client type if we fetch full client objects.
export const RecentClients: React.FC<{
  clients: any[];
}> = ({
  clients
}) => {
  const columns = [{
    header: 'Name',
    accessor: 'name' as const
  }, {
    header: 'Service',
    accessor: 'serviceName' as const
  }, {
    header: 'Status',
    accessor: 'status' as const,
    render: (value: any) => <ClientStatusBadge status={value} />
  }, {
    header: 'Date',
    accessor: 'createdAt' as const,
    render: (value: any) => formatDate(value)
  }];
  return <Card className="flex flex-col h-full">
      <div className="p-6 border-b border-gray-100 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900">Recent Clients</h3>
        <Link to="/clients" className="text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center">
          View All <ArrowRight className="w-4 h-4 ml-1" />
        </Link>
      </div>
      <div className="flex-1 overflow-hidden">
        <Table data={clients} columns={columns} onRowClick={row => window.location.href = `/clients/${row.id}`} // Simple nav for now
      />
      </div>
    </Card>;
};