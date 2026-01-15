import React from 'react';
import { CheckCircle } from 'lucide-react';

interface SuccessMessageProps {
  message?: string;
}

export const SuccessMessage: React.FC<SuccessMessageProps> = ({
  message = 'Thank you for your submission! We will review your request and get back to you shortly.',
}) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="flex items-center justify-center w-16 h-16 mx-auto bg-green-100 rounded-full mb-4">
          <CheckCircle className="w-10 h-10 text-green-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Submission Received!</h2>
        <p className="text-gray-600 mb-6">{message}</p>
        <button
          onClick={() => window.location.href = '/intake'}
          className="text-primary-600 hover:text-primary-700 font-medium"
        >
          Submit Another Request
        </button>
      </div>
    </div>
  );
};