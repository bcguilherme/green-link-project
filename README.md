# Green Link - Plataforma de Gestão Ambiental

Green Link é uma plataforma de gestão ambiental que permite às empresas monitorarem suas emissões de carbono, compensarem impactos ambientais e acessarem serviços relacionados à sustentabilidade.

## Funcionalidades Implementadas

- **Sistema de Autenticação**:
  - Login com e-mail e senha usando Firebase Authentication
  - Feedback visual para erros de autenticação
  - Proteção de rotas para usuários não autenticados
  - Redirecionamento automático após login bem-sucedido

- **Interface de Usuário**:
  - Design responsivo e moderno com Tailwind CSS
  - Componentes reutilizáveis (Button, Input, Alert)
  - Animações suaves com Framer Motion
  - Feedback visual para interações do usuário

- **Dashboard**:
  - Visualização de dados de emissões de carbono
  - Comparação com períodos anteriores
  - Indicadores visuais de tendência

## Tecnologias Utilizadas

- **Frontend**:
  - React 18
  - TypeScript
  - Tailwind CSS para estilização
  - Framer Motion para animações
  - React Router para navegação

- **Backend**:
  - Firebase Authentication para autenticação

## Estrutura do Projeto

```
src/
├── assets/           # Recursos estáticos (imagens, ícones)
├── components/       # Componentes reutilizáveis
│   ├── auth/         # Componentes relacionados à autenticação
│   └── ui/           # Componentes de interface do usuário
├── contexts/         # Contextos React (AuthContext)
├── hooks/            # Hooks personalizados
├── pages/            # Páginas da aplicação
├── services/         # Serviços (Firebase)
└── types/            # Definições de tipos TypeScript
```

## Como Executar

1. Clone o repositório
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Configure as credenciais do Firebase em `src/services/firebase.ts`
4. Execute o projeto:
   ```bash
   npm start
   ```

## Próximos Passos

- Implementar cadastro de usuários
- Adicionar recuperação de senha
- Desenvolver funcionalidades para registro e análise de emissões de carbono
- Implementar dashboard com gráficos e estatísticas
- Adicionar funcionalidades para compensação de carbono

## Green Link - Componente de Emissões de Carbono

Este projeto contém um componente React para exibir dados de emissões de carbono de empresas, desenvolvido para a plataforma Green Link.

## Funcionalidades

- Exibição de dados de emissões de carbono de empresas
- Indicador visual de tendência (aumento/redução) com tooltip informativo
- Formatação de números e datas para o padrão brasileiro
- Layout responsivo com Tailwind CSS
- Tipagem forte com TypeScript
- Suporte a eventos de clique para interatividade

## Estrutura do Componente

O componente `CarbonEmissionsCard` exibe:
- Nome da empresa
- Total de emissões de CO₂ (com unidade)
- Indicador de variação em relação ao período anterior (opcional)
- Data do relatório
- ID do relatório (opcional)

## Tecnologias Utilizadas

- React 18
- TypeScript
- Tailwind CSS

## Como Usar

1. Instale as dependências:
```bash
npm install
```

2. Execute o projeto:
```bash
npm start
```

3. Implementação básica do componente:
```tsx
import CarbonEmissionsCard from './components/CarbonEmissionsCard';

// Dados de exemplo
const emissionsData = {
  companyName: "Empresa Verde Ltda",
  totalEmissions: 1250.75,
  emissionsUnit: "tCO₂e",
  reportDate: new Date('2023-10-15'),
  reportId: "REL-2023-10-15-001"
};

// Uso do componente
<CarbonEmissionsCard data={emissionsData} />
```

4. Implementação com todos os recursos:
```tsx
import CarbonEmissionsCard from './components/CarbonEmissionsCard';

// Dados completos com informações de comparação
const emissionsData = {
  companyName: "Empresa Verde Ltda",
  totalEmissions: 1250.75,
  emissionsUnit: "tCO₂e",
  reportDate: new Date('2023-10-15'),
  reportId: "REL-2023-10-15-001",
  previousEmissions: 1350.25, // Emissões do período anterior para comparação
  comparisonPeriod: "trimestre anterior" // Descrição do período de comparação
};

// Uso do componente com callback de clique
<CarbonEmissionsCard 
  data={emissionsData} 
  className="border-2 border-green-500"
  onCardClick={() => handleCardClick(emissionsData.companyName)}
/>
```

## Personalização

O componente aceita as seguintes props:

- `data`: Objeto contendo os dados de emissões (obrigatório)
- `className`: String com classes CSS adicionais (opcional)
- `onCardClick`: Função de callback para quando o cartão for clicado (opcional)

## Acessibilidade

O componente implementa as seguintes características de acessibilidade:

- Uso apropriado de atributos ARIA
- Suporte a navegação por teclado quando o evento de clique está disponível
- Contraste adequado para leitura
- Descrições para variações de emissões

## Licença

Este projeto é parte da plataforma Green Link.

# Green Link - API de Dados Ambientais

API para acesso a dados geoespaciais e ambientais utilizando o Google Earth Engine, desenvolvida para o projeto Green Link.

## Sobre o Projeto

O Green Link é uma plataforma que conecta pessoas e empresas a soluções ambientais sustentáveis. Esta API fornece dados geoespaciais e ambientais para suportar análises e visualizações na plataforma.

## Tecnologias Utilizadas

- Node.js
- Express
- Google Earth Engine API
- CORS

## Pré-requisitos

- Node.js (v14 ou superior)
- Conta no Google Earth Engine (https://earthengine.google.com/)
- Credenciais de autenticação do Google Earth Engine

## Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/green-link.git
cd green-link
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as credenciais do Google Earth Engine:

Para utilizar o Google Earth Engine, você precisa ter uma conta aprovada e configurar a autenticação. Siga os passos abaixo:

- Acesse https://signup.earthengine.google.com/ para criar uma conta
- Após a aprovação, instale a CLI do Earth Engine:
```bash
npm install -g @google/earthengine-cli
```
- Autentique-se usando:
```bash
earthengine authenticate
```
- Siga as instruções para completar a autenticação

4. Inicie o servidor:
```bash
node server.js
```

O servidor estará rodando em http://localhost:3001

## Endpoints da API

### Informações Gerais
- `GET /` - Informações gerais sobre a API
- `GET /status` - Verificar o status da API

### Dados Geoespaciais
- `GET /satellite-image` - Obter imagem de satélite de uma área específica
- `GET /land-cover` - Obter dados sobre cobertura do solo
- `GET /carbon-emissions` - Obter dados sobre emissões de carbono
- `GET /vegetation` - Obter dados sobre vegetação (NDVI)
- `GET /temperature` - Obter dados sobre temperatura da superfície
- `GET /deforestation` - Obter dados sobre desmatamento
- `GET /water-resources` - Obter dados sobre recursos hídricos
- `GET /air-quality` - Obter dados sobre qualidade do ar
- `GET /environmental-report` - Obter um relatório ambiental completo

## Parâmetros de Consulta

Todos os endpoints de dados geoespaciais aceitam os seguintes parâmetros:

- `lat` - Latitude (padrão: -23.55, São Paulo)
- `lng` - Longitude (padrão: -46.63, São Paulo)

Exemplo:
```
GET /satellite-image?lat=-3.10&lng=-60.02
```

## Exemplos de Uso

### Obter uma imagem de satélite

```javascript
fetch('http://localhost:3001/satellite-image?lat=-23.55&lng=-46.63')
  .then(response => response.json())
  .then(data => {
    console.log(data.imageUrl); // URL da imagem de satélite
    console.log(data.location); // Localização consultada
  });
```

### Obter dados de cobertura do solo

```javascript
fetch('http://localhost:3001/land-cover?lat=-23.55&lng=-46.63')
  .then(response => response.json())
  .then(data => {
    console.log(data.landCoverUrl); // URL do mapa de cobertura do solo
    console.log(data.statistics); // Estatísticas de cobertura do solo
  });
```

### Obter um relatório ambiental completo

```javascript
fetch('http://localhost:3001/environmental-report?lat=-23.55&lng=-46.63')
  .then(response => response.json())
  .then(data => {
    console.log(data.report); // Relatório ambiental completo
  });
```

## Integração com o Frontend

Para integrar esta API com o frontend do Green Link, adicione o seguinte código ao seu componente React:

```jsx
import { useState, useEffect } from 'react';

function EnvironmentalData() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    // Coordenadas padrão (São Paulo)
    const lat = -23.55;
    const lng = -46.63;
    
    fetch(`http://localhost:3001/environmental-report?lat=${lat}&lng=${lng}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro ao obter dados ambientais');
        }
        return response.json();
      })
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);
  
  if (loading) return <div>Carregando dados ambientais...</div>;
  if (error) return <div>Erro: {error}</div>;
  
  return (
    <div>
      <h2>Relatório Ambiental</h2>
      <p>Localização: {data.location.lat}, {data.location.lng}</p>
      <p>Data: {new Date(data.timestamp).toLocaleDateString()}</p>
      
      {/* Exibir dados do relatório */}
      <div>
        <h3>Temperatura Média</h3>
        <p>{data.report.temperature?.LST_Day_1km?.toFixed(1)}°C</p>
        
        <h3>Índice de Vegetação (NDVI)</h3>
        <p>{data.report.ndvi?.NDVI?.toFixed(2)}</p>
        
        {/* Adicione mais visualizações conforme necessário */}
      </div>
    </div>
  );
}

export default EnvironmentalData;
```

## Limitações

- A API do Google Earth Engine tem limites de uso. Consulte a [documentação oficial](https://developers.google.com/earth-engine/guides/usage) para mais informações.
- Algumas operações podem ser lentas devido ao processamento de grandes conjuntos de dados geoespaciais.
- A precisão dos dados varia de acordo com a fonte e a resolução das imagens de satélite.

## Solução de Problemas

### Erro de autenticação

Se você encontrar erros de autenticação, verifique se:
- Você completou o processo de autenticação do Google Earth Engine
- Suas credenciais estão corretas e não expiraram
- Sua conta do Google Earth Engine foi aprovada

### Erros de timeout

Operações complexas podem levar tempo para processar. Se você encontrar erros de timeout:
- Reduza a área de interesse (diminua o valor do buffer)
- Simplifique as operações de análise
- Divida as solicitações em partes menores

## Contribuição

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Faça commit das suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Faça push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo LICENSE para detalhes.

## Contato

Para mais informações, entre em contato com a equipe do Green Link. 