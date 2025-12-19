// Intake Detail Page
// View full details & update status

import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Mail, 
  Phone, 
  Calendar, 
  DollarSign, 
  FileText,
  Link as LinkIcon,
  Trash2 
} from 'lucide-react';
import { useIntake, useUpdateIntakeStatus, useDeleteIntake } from '../hooks/useIntakes';
import { format } from 'date-fns';

const IntakeDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isLoading, isError } = useIntake(id);
  const { mutate: updateStatus, isLoading: isUpdating } = useUpdateIntakeStatus();
  const { mutate: deleteIntake } = useDeleteIntake();

  const intake = data?.data;

  const handleStatusChange = (newStatus) => {
    updateStatus({ id, status: newStatus });
  };

  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to delete this intake from "${intake.name}"?`)) {
      deleteIntake(id, {
        onSuccess: () => {
          navigate('/admin/intakes');
        },
      });
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary-600 border-t-transparent"></div>
      </div>
    );
  }

  if (isError || !intake) {
    return (
      <div className="text-center py-12">
        <p className="text-red-600 mb-4">Failed to load intake details</p>
        <Link to="/admin/intakes" className="btn btn-primary">
          Back to Intakes
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link
            to="/admin/intakes"
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-gray-600" />
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{intake.name}</h1>
            <p className="text-gray-600 mt-1">Intake Submission Details</p>
          </div>
        </div>
        <button
          onClick={handleDelete}
          className="btn btn-danger flex items-center space-x-2"
        >
          <Trash2 className="w-4 h-4" />
          <span>Delete</span>
        </button>
      </div>

      {/* Status Update */}
      <div className="card">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Status Management</h2>
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-600">Current Status:</span>
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
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {['new', 'reviewed', 'closed'].map((status) => (
            <button
              key={status}
              onClick={() => handleStatusChange(status)}
              disabled={intake.status === status || isUpdating}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                intake.status === status
                  ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  : 'bg-primary-600 text-white hover:bg-primary-700'
              }`}
            >
              {isUpdating ? 'Updating...' : `Mark as ${status}`}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Info */}
        <div className="lg:col-span-2 space-y-6">
          {/* Contact Information */}
          <div className="card">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-gray-400 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-600">Email</p>
                  <a
                    href={`mailto:${intake.email}`}
                    className="text-primary-600 hover:underline font-medium"
                  >
                    {intake.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-gray-400 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-600">Phone</p>
                  <a
                    href={`tel:${intake.phone}`}
                    className="text-primary-600 hover:underline font-medium"
                  >
                    {intake.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="card">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Project Details</h2>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-600 mb-1">Service Inquiry</p>
                <p className="text-gray-900 font-medium">{intake.serviceInquiry}</p>
              </div>
              {intake.budgetRange && (
                <div className="flex items-start space-x-3">
                  <DollarSign className="w-5 h-5 text-gray-400 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-600">Budget Range</p>
                    <p className="text-gray-900 font-medium">{intake.budgetRange}</p>
                  </div>
                </div>
              )}
              <div>
                <p className="text-sm text-gray-600 mb-2">Message</p>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <p className="text-gray-900 whitespace-pre-wrap">{intake.message}</p>
                </div>
              </div>
              {intake.attachmentUrl && (
                <div className="flex items-start space-x-3">
                  <LinkIcon className="w-5 h-5 text-gray-400 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-600">Attachment</p>
                    <a
                      href={intake.attachmentUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:underline font-medium break-all"
                    >
                      {intake.attachmentUrl}
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Metadata */}
          <div className="card">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Metadata</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Calendar className="w-5 h-5 text-gray-400 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-600">Submitted</p>
                  <p className="text-gray-900 font-medium">
                    {format(new Date(intake.createdAt), 'MMM dd, yyyy')}
                  </p>
                  <p className="text-sm text-gray-500">
                    {format(new Date(intake.createdAt), 'HH:mm:ss')}
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FileText className="w-5 h-5 text-gray-400 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-600">Intake ID</p>
                  <p className="text-gray-900 font-mono text-xs">{intake.id}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="card bg-gray-50">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
            <div className="space-y-2">
              <a
                href={`mailto:${intake.email}?subject=Re: ${intake.serviceInquiry}`}
                className="btn btn-primary w-full justify-center"
              >
                Send Email
              </a>
              <a
                href={`tel:${intake.phone}`}
                className="btn btn-secondary w-full justify-center"
              >
                Call Client
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntakeDetail;