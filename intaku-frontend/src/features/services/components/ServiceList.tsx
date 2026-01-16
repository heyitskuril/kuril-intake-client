import React from 'react';
import { Service } from '../types/services.types';
import { Table } from '../../../shared/components/UI/Table';
import { Button } from '../../../shared/components/UI/Button';
import { Badge } from '../../../shared/components/UI/Badge';
import { Edit2, Trash2, Eye, GripVertical, ArrowUp, ArrowDown } from 'lucide-react';
import { formatCurrency } from '../../../shared/utils/formatters';
interface ServiceListProps {
  services: Service[];
  onEdit: (service: Service) => void;
  onDelete: (id: string) => void;
  onPreview: (service: Service) => void;
  onReorder: (ids: string[]) => void;
}
export const ServiceList: React.FC<ServiceListProps> = ({
  services,
  onEdit,
  onDelete,
  onPreview,
  onReorder
}) => {
  const moveService = (index: number, direction: 'up' | 'down') => {
    if (direction === 'up' && index === 0 || direction === 'down' && index === services.length - 1) {
      return;
    }
    const newServices = [...services];
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    // Swap
    const temp = newServices[index];
    newServices[index] = newServices[targetIndex];
    newServices[targetIndex] = temp;
    onReorder(newServices.map(s => s.id));
  };
  const columns = [{
    header: 'Order',
    accessorKey: 'displayOrder',
    cell: (service: Service, index: number) => <div className="flex items-center space-x-1">
          <button onClick={() => moveService(index, 'up')} disabled={index === 0} className="p-1 hover:bg-gray-100 rounded disabled:opacity-30">
            <ArrowUp className="w-4 h-4 text-gray-500" />
          </button>
          <button onClick={() => moveService(index, 'down')} disabled={index === services.length - 1} className="p-1 hover:bg-gray-100 rounded disabled:opacity-30">
            <ArrowDown className="w-4 h-4 text-gray-500" />
          </button>
        </div>
  }, {
    header: 'Name',
    accessorKey: 'name',
    cell: (service: Service) => <div>
          <div className="font-medium text-gray-900">{service.name}</div>
          <div className="text-xs text-gray-500">/{service.slug}</div>
        </div>
  }, {
    header: 'Price Range',
    accessorKey: 'minPrice',
    cell: (service: Service) => <span className="text-sm text-gray-600">
          {formatCurrency(service.minPrice)} -{' '}
          {formatCurrency(service.maxPrice)}
        </span>
  }, {
    header: 'Timeline',
    accessorKey: 'estimatedDays',
    cell: (service: Service) => <span className="text-sm text-gray-600">
          ~{service.estimatedDays} days
        </span>
  }, {
    header: 'Status',
    accessorKey: 'isActive',
    cell: (service: Service) => <Badge variant={service.isActive ? 'success' : 'warning'}>
          {service.isActive ? 'Active' : 'Inactive'}
        </Badge>
  }, {
    header: 'Actions',
    accessorKey: 'id',
    cell: (service: Service) => <div className="flex items-center space-x-2">
          <Button variant="ghost" size="sm" onClick={() => onPreview(service)} title="Preview">
            <Eye className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm" onClick={() => onEdit(service)} title="Edit">
            <Edit2 className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700 hover:bg-red-50" onClick={() => onDelete(service.id)} title="Delete">
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>
  }];
  return <Table data={services} columns={columns} keyField="id" />;
};