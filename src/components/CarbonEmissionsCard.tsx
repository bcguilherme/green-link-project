import React, { useState } from 'react';

// Interface para tipar os dados de emissões de carbono
interface CarbonEmissionsData {
  companyName: string;
  totalEmissions: number;
  emissionsUnit: string;
  reportDate: Date;
  reportId?: string; // Campo opcional para identificação do relatório
  previousEmissions?: number; // Campo opcional para comparação com emissões anteriores
  comparisonPeriod?: string; // Campo opcional para indicar o período de comparação (ex: "mês anterior")
}

// Props do componente
interface CarbonEmissionsCardProps {
  data: CarbonEmissionsData;
  className?: string;
  onCardClick?: () => void; // Callback opcional para quando o cartão for clicado
}

/**
 * Componente que exibe dados de emissões de carbono de uma empresa
 * 
 * @param data - Dados de emissões de carbono
 * @param className - Classes CSS adicionais (opcional)
 * @param onCardClick - Função de callback para quando o cartão for clicado (opcional)
 */
const CarbonEmissionsCard: React.FC<CarbonEmissionsCardProps> = ({ 
  data, 
  className = '',
  onCardClick
}) => {
  const [showTooltip, setShowTooltip] = useState(false);

  // Formatar a data do relatório
  const formattedDate = new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  }).format(data.reportDate);

  // Formatar o valor de emissões com separadores de milhares
  const formattedEmissions = new Intl.NumberFormat('pt-BR').format(data.totalEmissions);

  // Calcular a variação percentual em relação às emissões anteriores (se disponível)
  const calculateVariation = () => {
    if (data.previousEmissions && data.previousEmissions > 0) {
      const variation = ((data.totalEmissions - data.previousEmissions) / data.previousEmissions) * 100;
      return {
        value: variation,
        formatted: variation.toFixed(1) + '%',
        isPositive: variation > 0,
        isNegative: variation < 0
      };
    }
    return null;
  };

  const variation = calculateVariation();

  // Determinar a cor do indicador de tendência
  const getTrendColor = () => {
    if (!variation) return '';
    
    // Para emissões de carbono, uma redução (variação negativa) é positiva
    return variation.isNegative 
      ? 'text-green-500' 
      : 'text-red-500';
  };

  // Determinar o ícone de tendência
  const getTrendIcon = () => {
    if (!variation) return null;
    
    if (variation.isNegative) {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
      );
    } else {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      );
    }
  };

  return (
    <div 
      className={`bg-white rounded-lg shadow-md p-6 max-w-md w-full hover:shadow-lg transition-shadow duration-300 ${className}`}
      aria-labelledby="emissions-title"
      onClick={onCardClick}
      role={onCardClick ? "button" : undefined}
      tabIndex={onCardClick ? 0 : undefined}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 
          id="emissions-title" 
          className="text-xl font-semibold text-gray-800"
        >
          {data.companyName}
        </h3>
        <div className="bg-green-link-100 text-green-link-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
          Green Link
        </div>
      </div>

      <div className="mb-4">
        <div className="flex items-end">
          <div className="text-3xl font-bold text-gray-900 mb-1">
            {formattedEmissions} <span className="text-sm font-medium text-gray-600">{data.emissionsUnit}</span>
          </div>
          
          {variation && (
            <div 
              className={`flex items-center ml-2 mb-1 ${getTrendColor()}`}
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
              role="status"
              aria-label={`Variação de ${variation.formatted} em relação ao ${data.comparisonPeriod || 'período anterior'}`}
            >
              {getTrendIcon()}
              <span className="ml-1 text-sm font-medium">{variation.formatted}</span>
              
              {/* Tooltip */}
              {showTooltip && (
                <div className="absolute z-10 px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm -mt-20 ml-6">
                  {variation.isNegative ? 'Redução' : 'Aumento'} de {variation.formatted} em relação ao {data.comparisonPeriod || 'período anterior'}
                  <div className="absolute w-2 h-2 bg-gray-900 rotate-45 -bottom-1 left-1/2 transform -translate-x-1/2"></div>
                </div>
              )}
            </div>
          )}
        </div>
        <p className="text-sm text-gray-600">Total de emissões de CO₂</p>
      </div>

      <div className="pt-4 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">
            Data do relatório
          </span>
          <span className="text-sm font-medium text-gray-700">
            {formattedDate}
          </span>
        </div>
        {data.reportId && (
          <div className="flex justify-between items-center mt-2">
            <span className="text-sm text-gray-500">
              ID do relatório
            </span>
            <span className="text-sm font-medium text-gray-700">
              {data.reportId}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default CarbonEmissionsCard; 