import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MoreHorizontal, Eye, Edit, Trash } from 'lucide-react';
import { Table } from '../../../shared/components/UI/Table';
import { Client } from '../types/clients.types';
import { ClientStatusBadge } from './ClientStatusBadge';
import { formatDate, formatCurrency } from '../../../shared/utils/formatters';
interface ClientListProps {
  clients: Client[];
  isLoading: boolean;
}
export const ClientList: React.FC<ClientListProps> = ({
  clients,
  isLoading
}) => {
  const navigate = useNavigate();
  const columns = [{
    header: 'Name',
    accessor: 'name' as const
  }, {
    header: 'Email',
    accessor: 'email' as const
  }, {
    header: 'Service',
    accessor: 'serviceName' as const
  }, {
    header: 'Budget',
    accessor: 'budgetRange' as const
  }, {
    header: 'Status',
    accessor: 'status' as const,
    render: (value: any) => <ClientStatusBadge status={value} />
  }, {
    header: 'Date',
    accessor: 'createdAt' as const,
    render: (value: any) => formatDate(value)
  }, {
    header: 'Actions',
    accessor: 'id' as const,
    render: (id: string) => <div className="flex items-center justify-end gap-2" onClick={e => e.stopPropagation()}>
          <button className="p-1 hover:bg-gray-100 rounded text-gray-500 hover:text-blue-600 transition-colors">
            <Eye className="w-4 h-4" onClick={() => navigate(`/clients/${id}`)} />
          </button>
        </div>
  }];
  return <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <Table data={clients} columns={columns} isLoading={isLoading} onRowClick={row => navigate(`/clients/${row.id}`)} />
      {/* Pagination would go here */}
      <div className="p-4 border-t border-gray-200 flex items-center justify-between text-sm text-gray-500">
        <span>Showing {clients.length} results</span>
        <div className="flex gap-2">
          <button className="px-3 py-1 border rounded hover:bg-gray-50 disabled:opacity-50" disabled>
            Previous
          </button>
          <button className="px-3 py-1 border rounded hover:bg-gray-50 disabled:opacity-50" disabled>
            Next
          </button>
        </div>
      </div>
    </div>;
};