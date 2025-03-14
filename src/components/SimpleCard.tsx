import React from 'react';

interface SimpleCardProps {
  companyName: string;
  emissions: number;
  unit: string;
  date: Date;
  id?: string;
}

const SimpleCard: React.FC<SimpleCardProps> = ({ 
  companyName, 
  emissions, 
  unit, 
  date, 
  id 
}) => {
  // Formatar a data
  const formattedDate = new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  }).format(date);

  // Formatar o valor de emissões
  const formattedEmissions = new Intl.NumberFormat('pt-BR').format(emissions);

  return (
    <div className="card">
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>{companyName}</h3>
        <div style={{ 
          backgroundColor: '#dcfce7', 
          color: '#166534',
          padding: '0.25rem 0.625rem',
          borderRadius: '9999px',
          fontSize: '0.75rem',
          fontWeight: '500'
        }}>
          Green Link
        </div>
      </div>
      
      <div style={{ marginBottom: '1rem' }}>
        <div style={{ fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '0.25rem' }}>
          {formattedEmissions} <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>{unit}</span>
        </div>
        <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>Total de emissões de CO₂</p>
      </div>
      
      <div style={{ 
        paddingTop: '1rem', 
        borderTop: '1px solid #e5e7eb'
      }}>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          marginBottom: '0.5rem' 
        }}>
          <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>Data do relatório</span>
          <span style={{ fontSize: '0.875rem', fontWeight: '500', color: '#374151' }}>{formattedDate}</span>
        </div>
        
        {id && (
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            marginTop: '0.5rem' 
          }}>
            <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>ID do relatório</span>
            <span style={{ fontSize: '0.875rem', fontWeight: '500', color: '#374151' }}>{id}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default SimpleCard; 