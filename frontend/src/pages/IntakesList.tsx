// Intakes List Page
// View all intake submissions with pagination & filters

import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Search, Filter, Eye, Trash2, ChevronLeft, ChevronRight } from 'lucide-react';
import { useIntakes, useDeleteIntake } from '../hooks/useIntakes';
import { format } from 'date-fns';

const IntakesList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState('');
  
  const page = parseInt(searchParams.get('page')) || 1;
  const status = searchParams.get('status') || '';
  const limit = 10;

  const { data, isLoading, isError } = useIntakes({ page, limit, status });
  const { mutate: deleteIntake } = useDeleteIntake();

  const handleStatusFilter = (newStatus) => {
    setSearchParams({ page: '1', status: newStatus });
  };

  const handlePageChange = (newPage) => {
    setSearchParams({ page: newPage.toString(), status });
  };

  const handleDelete = (id, name) => {
    if (window.confirm(`Are you sure you want to delete intake from "${name}"?`)) {
      deleteIntake(id);
    }
  };

  const filteredData = data?.data?.filter((intake) =>
    intake.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    intake.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    intake.serviceInquiry.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];

  const statusTabs = [
    { label: 'All', value: '', count: data?.pagination?.total || 0 },
    { label: 'New', value: 'new', count: 0 },
    { label: 'Reviewed', value: 'reviewed', count: 0 },
    { label: 'Closed', value: 'closed', count: 0 },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Intake Submissions</h1>
        <p className="text-gray-600 mt-1">Manage and review client inquiries</p>
      </div>

      {/* Filters */}
      <div className="card">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search by name, email, or service..."
              className="input pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Status Tabs */}
          <div className="flex space-x-2">
            {statusTabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => handleStatusFilter(tab.value)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  status === tab.value
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="card overflow-hidden p-0">
        {isLoading ? (
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary-600 border-t-transparent"></div>
          </div>
        ) : isError ? (
          <div className="text-center py-12">
            <p className="text-red-600">Failed to load intakes</p>
          </div>
        ) : filteredData.length === 0 ? (
          <div className="text-center py-12">
            <Filter className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600">No intakes found</p>
          </div>
        ) : (
          <>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Client
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Service
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredData.map((intake) => (
                    <tr key={intake.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>
                          <div className="text-sm font-medium text-gray-900">{intake.name}</div>
                          <div className="text-sm text-gray-500">{intake.email}</div>
                          <div className="text-xs text-gray-400">{intake.phone}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900">{intake.serviceInquiry}</div>
                        {intake.budgetRange && (
                          <div className="text-xs text-gray-500">Budget: {intake.budgetRange}</div>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`badge ${
                            intake.status === 'new'
                              ? 'badge-new'
                              : intake.status === 'reviewed'
                              ? 'badge-reviewed'
                              : 'badge-closed'
                          }`}
                        >
                          {intake.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {format(new Date(intake.createdAt), 'MMM dd, yyyy')}
                        <div className="text-xs text-gray-400">
                          {format(new Date(intake.createdAt), 'HH:mm')}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex items-center justify-end space-x-2">
                          <Link
                            to={`/admin/intakes/${intake.id}`}
                            className="text-primary-600 hover:text-primary-900 p-2 hover:bg-primary-50 rounded-lg transition-colors"
                            title="View details"
                          >
                            <Eye className="w-4 h-4" />
                          </Link>
                          <button
                            onClick={() => handleDelete(intake.id, intake.name)}
                            className="text-red-600 hover:text-red-900 p-2 hover:bg-red-50 rounded-lg transition-colors"
                            title="Delete"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            {data?.pagination && data.pagination.totalPages > 1 && (
              <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-700">
                    Showing <span className="font-medium">{(page - 1) * limit + 1}</span> to{' '}
                    <span className="font-medium">
                      {Math.min(page * limit, data.pagination.total)}
                    </span>{' '}
                    of <span className="font-medium">{data.pagination.total}</span> results
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handlePageChange(page - 1)}
                      disabled={page === 1}
                      className="btn btn-secondary disabled:opacity-50 flex items-center space-x-1"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      <span>Previous</span>
                    </button>
                    <button
                      onClick={() => handlePageChange(page + 1)}
                      disabled={page === data.pagination.totalPages}
                      className="btn btn-secondary disabled:opacity-50 flex items-center space-x-1"
                    >
                      <span>Next</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default IntakesList;