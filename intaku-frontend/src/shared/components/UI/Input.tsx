import React, { forwardRef } from 'react';
import { AlertCircle } from 'lucide-react';
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helpText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}
export const Input = forwardRef<HTMLInputElement, InputProps>(({
  label,
  error,
  helpText,
  leftIcon,
  rightIcon,
  className = '',
  id,
  ...props
}, ref) => {
  const inputId = id || props.name || Math.random().toString(36).substr(2, 9);
  return <div className="w-full">
        {label && <label htmlFor={inputId} className="block text-sm font-medium text-gray-700 mb-1.5">
            {label}
          </label>}
        <div className="relative">
          {leftIcon && <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
              {leftIcon}
            </div>}
          <input id={inputId} ref={ref} className={`
              block w-full rounded-md border-gray-300 shadow-sm 
              focus:border-blue-500 focus:ring-blue-500 sm:text-sm
              disabled:bg-gray-50 disabled:text-gray-500
              ${leftIcon ? 'pl-10' : 'pl-3'}
              ${rightIcon ? 'pr-10' : 'pr-3'}
              ${error ? 'border-red-300 text-red-900 placeholder-red-300 focus:border-red-500 focus:ring-red-500' : ''}
              ${className}
            `} aria-invalid={!!error} aria-describedby={error ? `${inputId}-error` : helpText ? `${inputId}-help` : undefined} {...props} />
          {rightIcon && !error && <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-500">
              {rightIcon}
            </div>}
          {error && <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-red-500">
              <AlertCircle className="h-5 w-5" />
            </div>}
        </div>
        {error ? <p className="mt-1.5 text-sm text-red-600" id={`${inputId}-error`}>
            {error}
          </p> : helpText ? <p className="mt-1.5 text-sm text-gray-500" id={`${inputId}-help`}>
            {helpText}
          </p> : null}
      </div>;
});
Input.displayName = 'Input';