import React from 'react';
import { Announcement } from '../types/announcements.types';
import { Table } from '../../../shared/components/UI/Table';
import { Button } from '../../../shared/components/UI/Button';
import { Badge } from '../../../shared/components/UI/Badge';
import { Edit2, Trash2 } from 'lucide-react';
interface AnnouncementListProps {
  announcements: Announcement[];
  onEdit: (announcement: Announcement) => void;
  onDelete: (id: string) => void;
}
export const AnnouncementList: React.FC<AnnouncementListProps> = ({
  announcements,
  onEdit,
  onDelete
}) => {
  const columns = [{
    header: 'Title',
    accessorKey: 'title',
    cell: (item: Announcement) => <div>
          <div className="font-medium text-gray-900">{item.title}</div>
          <div className="text-xs text-gray-500 truncate max-w-xs">
            {item.message}
          </div>
        </div>
  }, {
    header: 'Type',
    accessorKey: 'type',
    cell: (item: Announcement) => {
      const variants: Record<string, any> = {
        info: 'primary',
        warning: 'warning',
        success: 'success',
        error: 'danger'
      };
      return <Badge variant={variants[item.type]}>{item.type}</Badge>;
    }
  }, {
    header: 'Status',
    accessorKey: 'isActive',
    cell: (item: Announcement) => <Badge variant={item.isActive ? 'success' : 'default'}>
          {item.isActive ? 'Active' : 'Inactive'}
        </Badge>
  }, {
    header: 'Priority',
    accessorKey: 'priority',
    cell: (item: Announcement) => <span className="text-sm text-gray-600">{item.priority}</span>
  }, {
    header: 'Actions',
    accessorKey: 'id',
    cell: (item: Announcement) => <div className="flex items-center space-x-2">
          <Button variant="ghost" size="sm" onClick={() => onEdit(item)}>
            <Edit2 className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm" className="text-red-600 hover:bg-red-50" onClick={() => {
        if (window.confirm('Delete this announcement?')) onDelete(item.id);
      }}>
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>
  }];
  return <Table data={announcements} columns={columns} keyField="id" />;
};