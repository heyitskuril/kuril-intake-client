import React from 'react';
import { ChevronDown, ChevronUp, ChevronsUpDown } from 'lucide-react';
export interface Column<T> {
  key: string;
  header: string;
  render?: (item: T) => React.ReactNode;
  sortable?: boolean;
  width?: string;
}
interface TableProps<T> {
  data: T[];
  columns: Column<T>[];
  keyExtractor: (item: T) => string;
  sortColumn?: string;
  sortDirection?: 'asc' | 'desc';
  onSort?: (column: string) => void;
  onRowClick?: (item: T) => void;
  isLoading?: boolean;
  emptyMessage?: string;
}
export function Table<T>({
  data,
  columns,
  keyExtractor,
  sortColumn,
  sortDirection,
  onSort,
  onRowClick,
  isLoading,
  emptyMessage = 'No data available'
}: TableProps<T>) {
  return <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {columns.map(col => <th key={col.key} scope="col" className={`
                  px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider
                  ${col.sortable ? 'cursor-pointer hover:bg-gray-100 hover:text-gray-700 transition-colors' : ''}
                  ${col.width || ''}
                `} onClick={() => col.sortable && onSort?.(col.key)}>
                <div className="flex items-center space-x-1">
                  <span>{col.header}</span>
                  {col.sortable && <span className="text-gray-400">
                      {sortColumn === col.key ? sortDirection === 'asc' ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" /> : <ChevronsUpDown className="h-4 w-4 opacity-0 group-hover:opacity-50" />}
                    </span>}
                </div>
              </th>)}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {isLoading ? <tr>
              <td colSpan={columns.length} className="px-6 py-12 text-center">
                <div className="flex justify-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                </div>
              </td>
            </tr> : data.length === 0 ? <tr>
              <td colSpan={columns.length} className="px-6 py-12 text-center text-gray-500">
                {emptyMessage}
              </td>
            </tr> : data.map((item, index) => <tr key={keyExtractor(item)} onClick={() => onRowClick?.(item)} className={`
                  transition-colors
                  ${onRowClick ? 'cursor-pointer hover:bg-gray-50' : ''}
                  ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}
                `}>
                {columns.map(col => <td key={`${keyExtractor(item)}-${col.key}`} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {col.render ? col.render(item) : (item as any)[col.key]}
                  </td>)}
              </tr>)}
        </tbody>
      </table>
    </div>;
}