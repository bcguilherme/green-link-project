# Integração com Google Earth Engine - Green Link

Este documento descreve a integração do Google Earth Engine com o projeto Green Link, fornecendo detalhes técnicos sobre a implementação, autenticação e uso da API.

## Visão Geral

A integração com o Google Earth Engine permite que o Green Link acesse e processe dados geoespaciais e ambientais, incluindo:

- Imagens de satélite (Landsat, Sentinel, MODIS)
- Dados de cobertura do solo
- Índices de vegetação (NDVI)
- Temperatura da superfície terrestre
- Recursos hídricos
- Qualidade do ar
- Dados de desmatamento

## Arquitetura da Integração

A integração é composta por:

1. **Servidor Express**: API REST que se comunica com o Google Earth Engine
2. **Cliente React**: Interface de usuário para visualização dos dados
3. **Google Earth Engine**: Plataforma de processamento de dados geoespaciais

```
┌─────────────┐      ┌─────────────┐      ┌─────────────────┐
│             │      │             │      │                 │
│  Cliente    │ <──> │  Servidor   │ <──> │  Google Earth   │
│  React      │      │  Express    │      │  Engine API     │
│             │      │             │      │                 │
└─────────────┘      └─────────────┘      └─────────────────┘
```

## Configuração e Autenticação

### Pré-requisitos

1. Conta aprovada no Google Earth Engine (https://signup.earthengine.google.com/)
2. Credenciais de autenticação do Google Earth Engine

### Processo de Autenticação

O Google Earth Engine oferece diferentes métodos de autenticação:

1. **Autenticação por Aplicativo**: Usando credenciais OAuth2
2. **Autenticação por Serviço**: Usando uma conta de serviço
3. **Autenticação por Chave Privada**: Usando um arquivo de chave privada

No nosso servidor, utilizamos o método de autenticação simplificado para desenvolvimento:

```javascript
ee.initialize(null, null, () => {
  console.log('Autenticado com sucesso no Google Earth Engine!');
  // Inicializa o servidor Express após autenticação bem-sucedida
  app.listen(3001, () => console.log('API rodando na porta 3001'));
}, (err) => {
  console.error('Erro na autenticação:', err);
});
```

Para produção, recomendamos usar a autenticação por serviço:

```javascript
const privateKey = require('./private-key.json');
ee.initialize(null, privateKey, () => {
  console.log('Autenticado com sucesso no Google Earth Engine!');
  app.listen(3001, () => console.log('API rodando na porta 3001'));
});
```

## Endpoints da API

A API do servidor Express fornece os seguintes endpoints:

| Endpoint | Descrição | Parâmetros |
|----------|-----------|------------|
| `/satellite-image` | Imagem de satélite | `lat`, `lng` |
| `/land-cover` | Cobertura do solo | `lat`, `lng` |
| `/carbon-emissions` | Emissões de carbono | `lat`, `lng` |
| `/vegetation` | Índice de vegetação (NDVI) | `lat`, `lng` |
| `/temperature` | Temperatura da superfície | `lat`, `lng` |
| `/deforestation` | Dados de desmatamento | `lat`, `lng` |
| `/water-resources` | Recursos hídricos | `lat`, `lng` |
| `/air-quality` | Qualidade do ar | `lat`, `lng` |
| `/environmental-report` | Relatório ambiental completo | `lat`, `lng` |

## Conjuntos de Dados Utilizados

A integração utiliza os seguintes conjuntos de dados do Google Earth Engine:

- **Landsat 8**: `LANDSAT/LC08/C01/T1_TOA` - Imagens de satélite de alta resolução
- **MODIS Land Cover**: `MODIS/006/MCD12Q1` - Classificação de cobertura do solo
- **Sentinel-2**: `COPERNICUS/S2_SR` - Imagens multiespectrais para cálculo de NDVI
- **MODIS Land Surface Temperature**: `MODIS/006/MOD11A1` - Temperatura da superfície terrestre
- **Global Forest Change**: `UMD/hansen/global_forest_change_2020_v1_8` - Dados de desmatamento
- **JRC Global Surface Water**: `JRC/GSW1_3/GlobalSurfaceWater` - Recursos hídricos
- **Sentinel-5P**: `COPERNICUS/S5P/OFFL/L3_NO2` - Qualidade do ar (NO2)
- **Sentinel-5P**: `COPERNICUS/S5P/OFFL/L3_CO` - Emissões de carbono (CO)

## Implementação no Frontend

O componente React `EnvironmentalData.tsx` consome a API do servidor e exibe os dados em uma interface amigável. O componente:

1. Permite que o usuário selecione uma localização (latitude/longitude)
2. Faz requisições para os endpoints da API
3. Exibe os dados em formato visual (mapas, gráficos)
4. Fornece análises e estatísticas sobre os dados ambientais

## Limitações e Considerações

- **Limites de Uso**: O Google Earth Engine tem limites de uso. Consulte a [documentação oficial](https://developers.google.com/earth-engine/guides/usage).
- **Desempenho**: Algumas operações podem ser lentas devido ao processamento de grandes conjuntos de dados.
- **Precisão**: A precisão dos dados varia de acordo com a fonte e a resolução das imagens.
- **Disponibilidade**: Alguns dados podem não estar disponíveis para todas as regiões ou períodos.

## Próximos Passos

1. **Implementar cache**: Armazenar resultados em cache para melhorar o desempenho
2. **Adicionar análises avançadas**: Implementar algoritmos de machine learning para análise preditiva
3. **Expandir conjuntos de dados**: Incluir mais fontes de dados ambientais
4. **Melhorar visualizações**: Adicionar gráficos e visualizações interativas
5. **Implementar comparações temporais**: Permitir análise de mudanças ao longo do tempo

## Referências

- [Google Earth Engine API](https://developers.google.com/earth-engine)
- [Earth Engine Data Catalog](https://developers.google.com/earth-engine/datasets)
- [Express.js](https://expressjs.com/)
- [React](https://reactjs.org/)

## Suporte

Para questões relacionadas à integração com o Google Earth Engine, entre em contato com a equipe de desenvolvimento do Green Link. 