import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Button from '../components/ui/Button';
import CarbonEmissionsCard from '../components/CarbonEmissionsCard';

const DashboardPage: React.FC = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  // Dados de exemplo para o componente
  const emissionsData = {
    companyName: "Empresa Verde Ltda",
    totalEmissions: 1250.75,
    emissionsUnit: "tCO₂e",
    reportDate: new Date('2023-10-15'),
    reportId: "REL-2023-10-15-001",
    previousEmissions: 1350.25,
    comparisonPeriod: "trimestre anterior"
  };

  // Dados de exemplo adicionais para mostrar múltiplos cartões
  const additionalData = [
    {
      companyName: "Eco Solutions S.A.",
      totalEmissions: 875.32,
      emissionsUnit: "tCO₂e",
      reportDate: new Date('2023-09-30'),
      previousEmissions: 820.15,
      comparisonPeriod: "mesmo período do ano anterior"
    },
    {
      companyName: "Sustentável Tech",
      totalEmissions: 2340.18,
      emissionsUnit: "tCO₂e",
      reportDate: new Date('2023-10-05'),
      reportId: "REL-2023-10-05-002",
      previousEmissions: 2580.45,
      comparisonPeriod: "semestre anterior"
    }
  ];

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <img
              className="h-8 w-auto mr-3"
              src="/logo.svg"
              alt="Green Link Logo"
            />
            <h1 className="text-xl font-semibold text-gray-900">Green Link</h1>
          </div>
          <div className="flex items-center">
            <span className="text-sm text-gray-700 mr-4">
              {currentUser?.email}
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={handleLogout}
            >
              Sair
            </Button>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Dashboard</h2>
          <p className="mt-1 text-sm text-gray-600">
            Bem-vindo à plataforma Green Link. Aqui você pode monitorar suas emissões de carbono e acessar serviços de sustentabilidade.
          </p>
        </div>

        {/* Relatório em destaque */}
        <div
          className="mb-10 transition-all duration-300 ease-in-out"
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Relatório em Destaque</h3>
          <div className="transition-all duration-300 ease-in-out">
            <CarbonEmissionsCard 
              data={emissionsData} 
              onCardClick={() => console.log(`Cartão da empresa ${emissionsData.companyName} foi clicado`)}
            />
          </div>
        </div>
        
        {/* Relatórios recentes */}
        <div
          className="transition-all duration-300 ease-in-out"
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Relatórios Recentes</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalData.map((data, index) => (
              <div key={`emissions-card-${index}`} className="transition-all duration-300 ease-in-out">
                <CarbonEmissionsCard 
                  data={data} 
                  onCardClick={() => console.log(`Cartão da empresa ${data.companyName} foi clicado`)}
                />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage; 