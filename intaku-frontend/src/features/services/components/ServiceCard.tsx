import React from 'react';
import { Service } from '../types/services.types';
import { Card } from '../../../shared/components/UI/Card';
import { Badge } from '../../../shared/components/UI/Badge';
import { Check, Clock, DollarSign } from 'lucide-react';
import { formatCurrency } from '../../../shared/utils/formatters';
interface ServiceCardProps {
  service: Service;
  className?: string;
}
export const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  className
}) => {
  return <Card className={`h-full flex flex-col ${className}`}>
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-gray-900">{service.name}</h3>
          {!service.isActive && <Badge variant="warning">Inactive</Badge>}
        </div>

        <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>

        <div className="space-y-3 mb-6">
          <div className="flex items-center text-gray-700">
            <DollarSign className="w-5 h-5 text-gray-400 mr-2" />
            <span className="font-medium">
              {formatCurrency(service.minPrice)} -{' '}
              {formatCurrency(service.maxPrice)}
            </span>
          </div>
          <div className="flex items-center text-gray-700">
            <Clock className="w-5 h-5 text-gray-400 mr-2" />
            <span>~{service.estimatedDays} days estimated</span>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-6 mt-auto">
          <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
            Included Features
          </h4>
          <ul className="space-y-2">
            {service.features.map((feature, index) => <li key={index} className="flex items-start">
                <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                <span className="text-sm text-gray-600">{feature}</span>
              </li>)}
          </ul>
        </div>
      </div>
    </Card>;
};