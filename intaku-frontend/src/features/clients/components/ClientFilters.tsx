import React from 'react';
import { Search, Filter, Calendar } from 'lucide-react';
import { Input } from '../../../shared/components/UI/Input';
import { ClientFilters as FilterType } from '../types/clients.types';
interface ClientFiltersProps {
  filters: FilterType;
  onFilterChange: (filters: FilterType) => void;
}
export const ClientFilters: React.FC<ClientFiltersProps> = ({
  filters,
  onFilterChange
}) => {
  const handleChange = (key: keyof FilterType, value: any) => {
    onFilterChange({
      ...filters,
      [key]: value
    });
  };
  return <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 mb-6 flex flex-col md:flex-row gap-4 items-center">
      <div className="flex-1 w-full">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input type="text" placeholder="Search clients..." className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" value={filters.search} onChange={e => handleChange('search', e.target.value)} />
        </div>
      </div>

      <div className="flex gap-4 w-full md:w-auto">
        <div className="relative min-w-[150px]">
          <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
          <select className="w-full pl-10 pr-8 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none appearance-none bg-white" value={filters.status} onChange={e => handleChange('status', e.target.value)}>
            <option value="all">All Statuses</option>
            <option value="new">New</option>
            <option value="in_progress">In Progress</option>
            <option value="completed">Completed</option>
            <option value="rejected">Rejected</option>
            <option value="archived">Archived</option>
          </select>
        </div>

        <div className="relative min-w-[150px]">
          <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
          <select className="w-full pl-10 pr-8 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none appearance-none bg-white" value={filters.dateRange} onChange={e => handleChange('dateRange', e.target.value)}>
            <option value="all">All Time</option>
            <option value="7days">Last 7 Days</option>
            <option value="30days">Last 30 Days</option>
            <option value="90days">Last 90 Days</option>
          </select>
        </div>
      </div>
    </div>;
};