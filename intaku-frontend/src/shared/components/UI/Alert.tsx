import React from 'react';
import { AlertCircle, CheckCircle, Info, XCircle, X } from 'lucide-react';
type AlertType = 'info' | 'success' | 'warning' | 'error';
interface AlertProps {
  type?: AlertType;
  title?: string;
  children: React.ReactNode;
  onDismiss?: () => void;
  className?: string;
}
export function Alert({
  type = 'info',
  title,
  children,
  onDismiss,
  className = ''
}: AlertProps) {
  const styles = {
    info: {
      bg: 'bg-blue-50',
      text: 'text-blue-800',
      icon: <Info className="h-5 w-5 text-blue-400" />,
      border: 'border-blue-200'
    },
    success: {
      bg: 'bg-green-50',
      text: 'text-green-800',
      icon: <CheckCircle className="h-5 w-5 text-green-400" />,
      border: 'border-green-200'
    },
    warning: {
      bg: 'bg-yellow-50',
      text: 'text-yellow-800',
      icon: <AlertCircle className="h-5 w-5 text-yellow-400" />,
      border: 'border-yellow-200'
    },
    error: {
      bg: 'bg-red-50',
      text: 'text-red-800',
      icon: <XCircle className="h-5 w-5 text-red-400" />,
      border: 'border-red-200'
    }
  };
  const style = styles[type];
  return <div className={`rounded-md p-4 border ${style.bg} ${style.border} ${className}`}>
      <div className="flex">
        <div className="flex-shrink-0">{style.icon}</div>
        <div className="ml-3 flex-1">
          {title && <h3 className={`text-sm font-medium ${style.text} mb-1`}>
              {title}
            </h3>}
          <div className={`text-sm ${style.text} opacity-90`}>{children}</div>
        </div>
        {onDismiss && <div className="ml-auto pl-3">
            <div className="-mx-1.5 -my-1.5">
              <button type="button" onClick={onDismiss} className={`inline-flex rounded-md p-1.5 focus:outline-none focus:ring-2 focus:ring-offset-2 ${style.bg} ${style.text} hover:bg-white hover:bg-opacity-20`}>
                <span className="sr-only">Dismiss</span>
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>}
      </div>
    </div>;
}