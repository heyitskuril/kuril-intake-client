import React from 'react';
import { Card } from '@shared/components/UI/Card';
import { Badge } from '@shared/components/UI/Badge';
import { Service } from '../types/services.types';
import { formatCurrency } from '@shared/utils/formatters';
import { Clock, DollarSign, Check } from 'lucide-react';

interface ServiceCardProps {
  service: Service;
  onClick?: () => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, onClick }) => {
  return (
    <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={onClick}>
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold text-gray-900">{service.name}</h3>
        {service.is_active ? (
          <Badge variant="success">Active</Badge>
        ) : (
          <Badge variant="default">Inactive</Badge>
        )}
      </div>

      <p className="text-gray-600 text-sm mb-4 line-clamp-3">{service.description}</p>

      <div className="space-y-2 mb-4">
        <div className="flex items-center text-sm text-gray-600">
          <DollarSign className="w-4 h-4 mr-2" />
          {formatCurrency(service.min_price)} - {formatCurrency(service.max_price)}
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <Clock className="w-4 h-4 mr-2" />
          {service.estimated_days} days
        </div>
      </div>

      {service.features && service.features.length > 0 && (
        <div className="border-t border-gray-200 pt -4">
<p className="text-xs font-medium text-gray-500 mb-2">Includes:</p>
<ul className="space-y-1">
{service.features.slice(0, 3).map((feature, index) => (
<li key={index} className="flex items-start text-sm text-gray-600">
<Check className="w-4 h-4 mr-2 text-green-500 flex-shrink-0 mt-0.5" />
<span>{feature}</span>
</li>
))}
{service.features.length > 3 && (
<li className="text-sm text-gray-500">
+{service.features.length - 3} more
</li>
)}
</ul>
</div>
)}
</Card>
);
};