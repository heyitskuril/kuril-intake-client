import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Calendar, FileText, Mail } from 'lucide-react';
import { Button } from '../../../shared/components/UI/Button';
import { Card } from '../../../shared/components/UI/Card';
interface SuccessMessageProps {
  email: string;
  onReset: () => void;
}
export function SuccessMessage({
  email,
  onReset
}: SuccessMessageProps) {
  return <motion.div initial={{
    opacity: 0,
    scale: 0.95
  }} animate={{
    opacity: 1,
    scale: 1
  }} transition={{
    duration: 0.5
  }} className="max-w-2xl mx-auto text-center px-4">
      <div className="mb-8 flex justify-center">
        <motion.div initial={{
        scale: 0
      }} animate={{
        scale: 1
      }} transition={{
        type: 'spring',
        stiffness: 200,
        damping: 15,
        delay: 0.2
      }} className="bg-green-100 p-6 rounded-full">
          <CheckCircle className="w-16 h-16 text-green-600" />
        </motion.div>
      </div>

      <h2 className="text-3xl font-bold text-gray-900 mb-4">
        Thank You for Your Submission!
      </h2>

      <p className="text-lg text-gray-600 mb-8">
        We've received your project request and will review it within 24 hours.
        You'll hear from us soon at{' '}
        <span className="font-semibold text-gray-900">{email}</span>.
      </p>

      <Card className="mb-10 text-left overflow-hidden">
        <div className="bg-gray-50 px-6 py-4 border-b border-gray-100">
          <h3 className="font-semibold text-gray-900">What happens next?</h3>
        </div>
        <div className="p-6 space-y-6">
          <div className="flex items-start">
            <div className="bg-blue-100 p-2 rounded-lg mr-4 flex-shrink-0">
              <FileText className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h4 className="font-medium text-gray-900">1. Project Review</h4>
              <p className="text-sm text-gray-500 mt-1">
                We'll analyze your requirements and check our availability.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-purple-100 p-2 rounded-lg mr-4 flex-shrink-0">
              <Calendar className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <h4 className="font-medium text-gray-900">2. Discovery Call</h4>
              <p className="text-sm text-gray-500 mt-1">
                If it's a good fit, we'll schedule a call to discuss details.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-orange-100 p-2 rounded-lg mr-4 flex-shrink-0">
              <Mail className="w-5 h-5 text-orange-600" />
            </div>
            <div>
              <h4 className="font-medium text-gray-900">3. Proposal</h4>
              <p className="text-sm text-gray-500 mt-1">
                You'll receive a detailed proposal with timeline and pricing.
              </p>
            </div>
          </div>
        </div>
      </Card>

      <Button onClick={onReset} variant="outline" size="lg">
        Submit Another Request
      </Button>
    </motion.div>;
}