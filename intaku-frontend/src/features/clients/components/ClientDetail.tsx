import React from 'react';
import { FileText, Download, Clock, DollarSign, Briefcase } from 'lucide-react';
import { Card } from '../../../shared/components/UI/Card';
import { Client } from '../types/clients.types';
interface ClientDetailProps {
  client: Client;
}
export const ClientDetail: React.FC<ClientDetailProps> = ({
  client
}) => {
  return <div className="space-y-6">
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <Briefcase className="w-5 h-5 mr-2 text-gray-500" />
          Project Details
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-500 mb-1">Service</p>
            <p className="font-medium text-gray-900">{client.serviceName}</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-500 mb-1 flex items-center">
              <DollarSign className="w-3 h-3 mr-1" /> Budget
            </p>
            <p className="font-medium text-gray-900">{client.budgetRange}</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-500 mb-1 flex items-center">
              <Clock className="w-3 h-3 mr-1" /> Timeline
            </p>
            <p className="font-medium text-gray-900">{client.timeline}</p>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-sm font-medium text-gray-700 mb-2">
            Description
          </h4>
          <div className="bg-white border border-gray-200 rounded-lg p-4 text-gray-700 leading-relaxed">
            {client.projectDescription}
          </div>
        </div>

        {client.attachments && client.attachments.length > 0 && <div>
            <h4 className="text-sm font-medium text-gray-700 mb-2">
              Attachments
            </h4>
            <div className="space-y-2">
              {client.attachments.map((file, idx) => <div key={idx} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-center">
                    <FileText className="w-5 h-5 text-blue-500 mr-3" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        {file.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {(file.size / 1024).toFixed(1)} KB
                      </p>
                    </div>
                  </div>
                  <a href={file.url} className="p-2 text-gray-400 hover:text-blue-600">
                    <Download className="w-4 h-4" />
                  </a>
                </div>)}
            </div>
          </div>}
      </Card>
    </div>;
};