import React, { InputHTMLAttributes, forwardRef } from 'react';

// Props do componente Input
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ 
    label, 
    error, 
    icon, 
    iconPosition = 'left', 
    fullWidth = true, 
    className = '', 
    id,
    ...props 
  }, ref) => {
    // ID único para o campo
    const inputId = id || `input-${Math.random().toString(36).substring(2, 9)}`;
    
    // Classes base para o container
    const containerClasses = `${fullWidth ? 'w-full' : ''} mb-4`;
    
    // Classes para o campo de entrada
    const inputBaseClasses = 'block rounded-md border-gray-300 shadow-sm focus:border-green-link-500 focus:ring-green-link-500 sm:text-sm transition-colors';
    const inputErrorClasses = error ? 'border-red-300 text-red-900 placeholder-red-300 focus:border-red-500 focus:ring-red-500' : '';
    const inputIconClasses = icon ? (iconPosition === 'left' ? 'pl-10' : 'pr-10') : '';
    const inputClasses = `${inputBaseClasses} ${inputErrorClasses} ${inputIconClasses} ${className}`;

    return (
      <div className={containerClasses}>
        {label && (
          <label htmlFor={inputId} className="block text-sm font-medium text-gray-700 mb-1">
            {label}
          </label>
        )}
        
        <div className="relative rounded-md shadow-sm">
          {icon && iconPosition === 'left' && (
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              {icon}
            </div>
          )}
          
          <input
            ref={ref}
            id={inputId}
            className={inputClasses}
            aria-invalid={error ? 'true' : 'false'}
            aria-describedby={error ? `${inputId}-error` : undefined}
            {...props}
          />
          
          {icon && iconPosition === 'right' && (
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              {icon}
            </div>
          )}
        </div>
        
        {error && (
          <p className="mt-1 text-sm text-red-600" id={`${inputId}-error`}>
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input; 