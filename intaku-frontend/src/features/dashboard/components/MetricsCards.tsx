import React from 'react';
import { motion } from 'framer-motion';
import { Users, UserPlus, Clock, CheckCircle, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { Card } from '../../../shared/components/UI/Card';
import { DashboardStats } from '../types/dashboard.types';
interface MetricsCardsProps {
  stats: DashboardStats;
}
export const MetricsCards: React.FC<MetricsCardsProps> = ({
  stats
}) => {
  const cards = [{
    label: 'Total Clients',
    value: stats.totalClients,
    change: stats.trends.totalChange,
    icon: Users,
    color: 'bg-blue-100 text-blue-600'
  }, {
    label: 'New This Week',
    value: stats.newThisWeek,
    change: stats.trends.newChange,
    icon: UserPlus,
    color: 'bg-purple-100 text-purple-600'
  }, {
    label: 'In Progress',
    value: stats.inProgress,
    change: stats.trends.inProgressChange,
    icon: Clock,
    color: 'bg-yellow-100 text-yellow-600'
  }, {
    label: 'Completed',
    value: stats.completed,
    change: stats.trends.completedChange,
    icon: CheckCircle,
    color: 'bg-green-100 text-green-600'
  }];
  return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {cards.map((card, index) => <motion.div key={card.label} initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.3,
      delay: index * 0.1
    }}>
          <Card className="p-6 hover:shadow-md transition-shadow duration-200">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">
                  {card.label}
                </p>
                <h3 className="text-2xl font-bold text-gray-900 mt-1">
                  {card.value}
                </h3>
              </div>
              <div className={`p-2 rounded-full ${card.color}`}>
                <card.icon className="w-5 h-5" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
              {card.change >= 0 ? <ArrowUpRight className="w-4 h-4 text-green-500 mr-1" /> : <ArrowDownRight className="w-4 h-4 text-red-500 mr-1" />}
              <span className={card.change >= 0 ? 'text-green-600 font-medium' : 'text-red-600 font-medium'}>
                {Math.abs(card.change)}%
              </span>
              <span className="text-gray-500 ml-1">vs last month</span>
            </div>
          </Card>
        </motion.div>)}
    </div>;
};