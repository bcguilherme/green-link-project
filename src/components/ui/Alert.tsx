import React, { useState } from 'react';

// Tipos de variantes para o alerta
type AlertVariant = 'info' | 'success' | 'warning' | 'error';

// Props do componente Alert
interface AlertProps {
  variant?: AlertVariant;
  title?: string;
  message: string;
  onClose?: () => void;
  autoClose?: boolean;
  autoCloseTime?: number;
  showIcon?: boolean;
}

const Alert: React.FC<AlertProps> = ({
  variant = 'info',
  title,
  message,
  onClose,
  autoClose = false,
  autoCloseTime = 5000,
  showIcon = true,
}) => {
  const [isVisible, setIsVisible] = useState(true);

  // Configurações de cores e ícones para cada variante
  const variantConfig = {
    info: {
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-400',
      textColor: 'text-blue-700',
      iconColor: 'text-blue-400',
      icon: (
        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
        </svg>
      ),
    },
    success: {
      bgColor: 'bg-green-50',
      borderColor: 'border-green-400',
      textColor: 'text-green-700',
      iconColor: 'text-green-400',
      icon: (
        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      ),
    },
    warning: {
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-400',
      textColor: 'text-yellow-700',
      iconColor: 'text-yellow-400',
      icon: (
        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
        </svg>
      ),
    },
    error: {
      bgColor: 'bg-red-50',
      borderColor: 'border-red-400',
      textColor: 'text-red-700',
      iconColor: 'text-red-400',
      icon: (
        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
        </svg>
      ),
    },
  };

  // Configuração da variante atual
  const config = variantConfig[variant];

  // Efeito para fechar automaticamente o alerta após um tempo
  React.useEffect(() => {
    if (autoClose) {
      const timer = setTimeout(() => {
        handleClose();
      }, autoCloseTime);

      return () => clearTimeout(timer);
    }
  }, [autoClose, autoCloseTime]);

  // Função para fechar o alerta
  const handleClose = () => {
    setIsVisible(false);
    if (onClose) {
      setTimeout(onClose, 300); // Espera a animação terminar antes de chamar onClose
    }
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className={`rounded-md border ${config.bgColor} ${config.borderColor} p-4 mb-4 transition-all duration-300 ease-in-out`}
      role="alert"
    >
      <div className="flex">
        {showIcon && (
          <div className={`flex-shrink-0 ${config.iconColor}`}>
            {config.icon}
          </div>
        )}
        <div className={`${showIcon ? 'ml-3' : ''} flex-1`}>
          {title && (
            <h3 className={`text-sm font-medium ${config.textColor}`}>
              {title}
            </h3>
          )}
          <div className={`text-sm ${config.textColor} ${title ? 'mt-2' : ''}`}>
            {message}
          </div>
        </div>
        {onClose && (
          <div className="ml-auto pl-3">
            <div className="-mx-1.5 -my-1.5">
              <button
                type="button"
                className={`inline-flex rounded-md p-1.5 ${config.bgColor} ${config.textColor} hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-${config.bgColor} focus:ring-${config.borderColor}`}
                onClick={handleClose}
                aria-label="Fechar"
              >
                <span className="sr-only">Fechar</span>
                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Alert; 