import React from 'react';
import { motion } from 'framer-motion';
import { Check, Clock, DollarSign, Star } from 'lucide-react';
import { MOCK_SERVICES } from '../types/public.types';
import { Card } from '../../../shared/components/UI/Card';
import { Button } from '../../../shared/components/UI/Button';
import { formatCurrency } from '../../../shared/utils/formatters';
interface ServiceShowcaseProps {
  selectedServiceId: string;
  onSelect: (id: string) => void;
}
export function ServiceShowcase({
  selectedServiceId,
  onSelect
}: ServiceShowcaseProps) {
  return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {MOCK_SERVICES.map((service, index) => {
      const isSelected = selectedServiceId === service.id;
      return <motion.div key={service.id} initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: index * 0.1
      }} whileHover={{
        y: -5
      }}>
            <Card className={`h-full flex flex-col cursor-pointer transition-all duration-300 border-2 ${isSelected ? 'border-blue-500 shadow-lg ring-2 ring-blue-100' : 'border-transparent hover:border-gray-200 hover:shadow-md'}`} onClick={() => onSelect(service.id)}>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900">
                    {service.name}
                  </h3>
                  {isSelected && <div className="bg-blue-500 rounded-full p-1">
                      <Check className="w-4 h-4 text-white" />
                    </div>}
                </div>

                <p className="text-gray-500 mb-6 text-sm">
                  {service.description}
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-gray-700">
                    <DollarSign className="w-4 h-4 mr-2 text-gray-400" />
                    <span>
                      {formatCurrency(service.minPrice)} -{' '}
                      {formatCurrency(service.maxPrice)}
                    </span>
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <Clock className="w-4 h-4 mr-2 text-gray-400" />
                    <span>Est. {service.estimatedDays} days</span>
                  </div>
                </div>

                <div className="border-t border-gray-100 pt-4 mt-auto">
                  <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                    Includes
                  </h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => <li key={i} className="flex items-start text-sm text-gray-600">
                        <Star className="w-3 h-3 mr-2 mt-1 text-blue-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>)}
                  </ul>
                </div>

                <div className="mt-6">
                  <Button variant={isSelected ? 'primary' : 'outline'} className="w-full" onClick={e => {
                e.stopPropagation();
                onSelect(service.id);
              }}>
                    {isSelected ? 'Selected' : 'Select Service'}
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>;
    })}
    </div>;
}