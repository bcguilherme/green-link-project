// Importar as dependências necessárias
const ee = require('@google/earthengine');
const express = require('express');
const app = express();
const cors = require('cors');

// Configurar CORS para permitir requisições do frontend
app.use(cors());
app.use(express.json());

// Autenticação do Google Earth Engine
ee.initialize(null, null, () => {
  console.log('Autenticado com sucesso no Google Earth Engine!');
  // Inicializa o servidor Express após autenticação bem-sucedida
  app.listen(3001, () => console.log('API rodando na porta 3001'));
}, (err) => {
  console.error('Erro na autenticação:', err);
});

// Rota para obter uma imagem de satélite de uma área específica
app.get('/satellite-image', async (req, res) => {
  try {
    // Obter parâmetros da requisição (latitude e longitude)
    const { lat = -23.55, lng = -46.63 } = req.query; // Padrão: São Paulo
    const latNum = parseFloat(lat);
    const lngNum = parseFloat(lng);

    // Definir a região de interesse com base nos parâmetros
    const region = ee.Geometry.Point([lngNum, latNum]).buffer(10000); // Buffer de 10km

    // Selecionar a coleção de imagens Landsat 8
    const image = ee.ImageCollection('LANDSAT/LC08/C01/T1_TOA')
                    .filterBounds(region)  // Filtrar pela região
                    .sort('system:time_start', false)  // Ordenar por data (mais recente primeiro)
                    .first();  // Selecionar a imagem mais recente

    // Converter a imagem para um formato visível (RGB natural)
    const visParams = {
      bands: ['B4', 'B3', 'B2'],
      min: 0,
      max: 0.3,
      gamma: 1.4
    };

    // Gerar URL da imagem
    const imageUrl = image.getThumbURL({
      ...visParams,
      dimensions: 800,
      format: 'png'
    });

    // Enviar a URL da imagem como resposta
    res.json({
      message: 'Imagem de satélite gerada com sucesso.',
      location: {
        lat: latNum,
        lng: lngNum
      },
      imageUrl: imageUrl
    });
  } catch (err) {
    console.error('Erro ao processar imagem:', err);
    res.status(500).json({ error: 'Erro ao processar a imagem de satélite.', details: err.message });
  }
});

// Rota para obter dados sobre a cobertura do solo
app.get('/land-cover', async (req, res) => {
  try {
    // Obter parâmetros da requisição
    const { lat = -23.55, lng = -46.63 } = req.query; // Padrão: São Paulo
    const latNum = parseFloat(lat);
    const lngNum = parseFloat(lng);

    // Definir a região de interesse
    const point = ee.Geometry.Point([lngNum, latNum]);
    const region = point.buffer(10000); // Buffer de 10km

    // Coletar dados sobre cobertura do solo usando o conjunto de dados MODIS
    const dataset = ee.ImageCollection('MODIS/006/MCD12Q1')
                      .filterBounds(region)
                      .filterDate(ee.Date.now().advance(-1, 'year'), ee.Date.now())
                      .first();

    // Exibir informações sobre a cobertura do solo
    const landCover = dataset.select('LC_Type1');

    // Definir paleta de cores para diferentes tipos de cobertura do solo
    const palette = [
      '05450a', // 0: Água
      '086a10', // 1: Floresta perene de coníferas
      '54a708', // 2: Floresta perene de folhas largas
      '78d203', // 3: Floresta decídua de coníferas
      '009900', // 4: Floresta decídua de folhas largas
      'c6b044', // 5: Floresta mista
      'dcd159', // 6: Arbustos fechados
      'dade48', // 7: Arbustos abertos
      'fbff13', // 8: Savana lenhosa
      'b6ff05', // 9: Savana
      '27ff87', // 10: Pastagem
      'c24f44', // 11: Pântanos permanentes
      'a5a5a5', // 12: Terras agrícolas
      'ff6d4c', // 13: Área urbana e construída
      '69fff8', // 14: Mosaico de terras agrícolas/vegetação natural
      'f9ffa4', // 15: Neve e gelo
      '1c0dff', // 16: Terra estéril ou com pouca vegetação
      'ffffff'  // 17: Não classificado
    ];

    // Obter a URL do mapa da cobertura do solo
    const landCoverUrl = landCover.getThumbURL({
      min: 0,
      max: 17,
      palette: palette,
      dimensions: 800,
      format: 'png'
    });

    // Calcular estatísticas de cobertura do solo
    const stats = landCover.reduceRegion({
      reducer: ee.Reducer.frequencyHistogram(),
      geometry: region,
      scale: 500,
      maxPixels: 1e9
    });

    // Converter as estatísticas para um formato mais amigável
    const histogram = ee.Dictionary(stats.get('LC_Type1')).getInfo();

    // Retornar a URL com o mapa da cobertura do solo e estatísticas
    res.json({
      message: 'Dados de cobertura do solo obtidos com sucesso.',
      location: {
        lat: latNum,
        lng: lngNum
      },
      landCoverUrl: landCoverUrl,
      statistics: histogram
    });
  } catch (err) {
    console.error('Erro ao processar cobertura do solo:', err);
    res.status(500).json({ error: 'Erro ao processar os dados de cobertura do solo.', details: err.message });
  }
});

// Rota para obter dados sobre emissões de carbono
app.get('/carbon-emissions', async (req, res) => {
  try {
    // Obter parâmetros da requisição
    const { lat = -23.55, lng = -46.63 } = req.query; // Padrão: São Paulo
    const latNum = parseFloat(lat);
    const lngNum = parseFloat(lng);

    // Definir a região de interesse
    const point = ee.Geometry.Point([lngNum, latNum]);
    const region = point.buffer(50000); // Buffer de 50km

    // Obter dados de emissões de CO2 do OCO-2 (Orbiting Carbon Observatory)
    const oco2 = ee.ImageCollection('COPERNICUS/S5P/OFFL/L3_CO')
                  .filterBounds(region)
                  .filterDate(ee.Date.now().advance(-3, 'month'), ee.Date.now())
                  .select('CO_column_number_density')
                  .mean();

    // Gerar URL da imagem de concentração de CO
    const coUrl = oco2.getThumbURL({
      min: 0,
      max: 0.05,
      palette: ['blue', 'purple', 'cyan', 'green', 'yellow', 'red'],
      dimensions: 800,
      format: 'png'
    });

    // Calcular estatísticas de emissões
    const stats = oco2.reduceRegion({
      reducer: ee.Reducer.mean(),
      geometry: region,
      scale: 1000,
      maxPixels: 1e9
    });

    // Retornar os dados de emissões
    res.json({
      message: 'Dados de emissões de carbono obtidos com sucesso.',
      location: {
        lat: latNum,
        lng: lngNum
      },
      carbonEmissionsUrl: coUrl,
      statistics: stats.getInfo()
    });
  } catch (err) {
    console.error('Erro ao processar dados de emissões:', err);
    res.status(500).json({ error: 'Erro ao processar os dados de emissões de carbono.', details: err.message });
  }
});

// Rota para obter dados sobre vegetação (NDVI)
app.get('/vegetation', async (req, res) => {
  try {
    // Obter parâmetros da requisição
    const { lat = -23.55, lng = -46.63 } = req.query; // Padrão: São Paulo
    const latNum = parseFloat(lat);
    const lngNum = parseFloat(lng);

    // Definir a região de interesse
    const point = ee.Geometry.Point([lngNum, latNum]);
    const region = point.buffer(10000); // Buffer de 10km

    // Obter dados de vegetação usando o índice NDVI do Sentinel-2
    const sentinel = ee.ImageCollection('COPERNICUS/S2_SR')
                      .filterBounds(region)
                      .filterDate(ee.Date.now().advance(-3, 'month'), ee.Date.now())
                      .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', 20))
                      .first();

    // Calcular NDVI (Normalized Difference Vegetation Index)
    const ndvi = sentinel.normalizedDifference(['B8', 'B4']).rename('NDVI');

    // Gerar URL da imagem NDVI
    const ndviUrl = ndvi.getThumbURL({
      min: -0.2,
      max: 0.8,
      palette: ['brown', 'yellow', 'green', 'darkgreen'],
      dimensions: 800,
      format: 'png'
    });

    // Calcular estatísticas de NDVI
    const stats = ndvi.reduceRegion({
      reducer: ee.Reducer.mean(),
      geometry: region,
      scale: 10,
      maxPixels: 1e9
    });

    // Retornar os dados de vegetação
    res.json({
      message: 'Dados de vegetação (NDVI) obtidos com sucesso.',
      location: {
        lat: latNum,
        lng: lngNum
      },
      ndviUrl: ndviUrl,
      statistics: stats.getInfo()
    });
  } catch (err) {
    console.error('Erro ao processar dados de vegetação:', err);
    res.status(500).json({ error: 'Erro ao processar os dados de vegetação.', details: err.message });
  }
});

// Rota para obter dados sobre temperatura da superfície
app.get('/temperature', async (req, res) => {
  try {
    // Obter parâmetros da requisição
    const { lat = -23.55, lng = -46.63 } = req.query; // Padrão: São Paulo
    const latNum = parseFloat(lat);
    const lngNum = parseFloat(lng);

    // Definir a região de interesse
    const point = ee.Geometry.Point([lngNum, latNum]);
    const region = point.buffer(10000); // Buffer de 10km

    // Obter dados de temperatura da superfície do MODIS
    const lst = ee.ImageCollection('MODIS/006/MOD11A1')
                 .filterBounds(region)
                 .filterDate(ee.Date.now().advance(-1, 'month'), ee.Date.now())
                 .select('LST_Day_1km')
                 .mean();

    // Converter para Celsius (os dados estão em Kelvin * 0.02)
    const lstCelsius = lst.multiply(0.02).subtract(273.15);

    // Gerar URL da imagem de temperatura
    const tempUrl = lstCelsius.getThumbURL({
      min: 0,
      max: 40,
      palette: ['blue', 'cyan', 'green', 'yellow', 'orange', 'red'],
      dimensions: 800,
      format: 'png'
    });

    // Calcular estatísticas de temperatura
    const stats = lstCelsius.reduceRegion({
      reducer: ee.Reducer.mean(),
      geometry: region,
      scale: 1000,
      maxPixels: 1e9
    });

    // Retornar os dados de temperatura
    res.json({
      message: 'Dados de temperatura da superfície obtidos com sucesso.',
      location: {
        lat: latNum,
        lng: lngNum
      },
      temperatureUrl: tempUrl,
      statistics: stats.getInfo()
    });
  } catch (err) {
    console.error('Erro ao processar dados de temperatura:', err);
    res.status(500).json({ error: 'Erro ao processar os dados de temperatura.', details: err.message });
  }
});

// Rota para obter dados sobre desmatamento
app.get('/deforestation', async (req, res) => {
  try {
    // Obter parâmetros da requisição
    const { lat = -3.10, lng = -60.02 } = req.query; // Padrão: Manaus (Amazônia)
    const latNum = parseFloat(lat);
    const lngNum = parseFloat(lng);

    // Definir a região de interesse
    const point = ee.Geometry.Point([lngNum, latNum]);
    const region = point.buffer(50000); // Buffer de 50km

    // Obter dados de perda de floresta do Global Forest Change
    const gfc = ee.Image('UMD/hansen/global_forest_change_2020_v1_8');
    const treeCover = gfc.select('treecover2000');
    const lossYear = gfc.select('lossyear');
    
    // Criar máscara para áreas com mais de 30% de cobertura florestal
    const treeCoverThreshold = 30;
    const treeCoverMask = treeCover.gte(treeCoverThreshold);
    
    // Aplicar máscara para mostrar apenas áreas com perda florestal
    const lossImage = lossYear.updateMask(treeCoverMask);

    // Gerar URL da imagem de perda florestal
    const lossUrl = lossImage.getThumbURL({
      min: 0,
      max: 20,
      palette: ['yellow', 'orange', 'red'],
      dimensions: 800,
      format: 'png'
    });

    // Calcular estatísticas de perda florestal por ano
    const lossAreaByYear = lossYear.updateMask(treeCoverMask).reduceRegion({
      reducer: ee.Reducer.frequencyHistogram(),
      geometry: region,
      scale: 30,
      maxPixels: 1e9
    });

    // Retornar os dados de desmatamento
    res.json({
      message: 'Dados de desmatamento obtidos com sucesso.',
      location: {
        lat: latNum,
        lng: lngNum
      },
      deforestationUrl: lossUrl,
      statistics: lossAreaByYear.getInfo()
    });
  } catch (err) {
    console.error('Erro ao processar dados de desmatamento:', err);
    res.status(500).json({ error: 'Erro ao processar os dados de desmatamento.', details: err.message });
  }
});

// Rota para obter dados sobre recursos hídricos
app.get('/water-resources', async (req, res) => {
  try {
    // Obter parâmetros da requisição
    const { lat = -23.55, lng = -46.63 } = req.query; // Padrão: São Paulo
    const latNum = parseFloat(lat);
    const lngNum = parseFloat(lng);

    // Definir a região de interesse
    const point = ee.Geometry.Point([lngNum, latNum]);
    const region = point.buffer(20000); // Buffer de 20km

    // Obter dados de recursos hídricos do JRC Global Surface Water
    const water = ee.Image('JRC/GSW1_3/GlobalSurfaceWater');
    const occurrence = water.select('occurrence');
    const change = water.select('change');
    
    // Gerar URL da imagem de ocorrência de água
    const waterUrl = occurrence.getThumbURL({
      min: 0,
      max: 100,
      palette: ['white', 'lightblue', 'blue', 'darkblue'],
      dimensions: 800,
      format: 'png'
    });

    // Gerar URL da imagem de mudança na superfície de água
    const changeUrl = change.getThumbURL({
      min: -50,
      max: 50,
      palette: ['red', 'white', 'blue'],
      dimensions: 800,
      format: 'png'
    });

    // Calcular estatísticas de recursos hídricos
    const stats = occurrence.reduceRegion({
      reducer: ee.Reducer.mean(),
      geometry: region,
      scale: 30,
      maxPixels: 1e9
    });

    // Retornar os dados de recursos hídricos
    res.json({
      message: 'Dados de recursos hídricos obtidos com sucesso.',
      location: {
        lat: latNum,
        lng: lngNum
      },
      waterOccurrenceUrl: waterUrl,
      waterChangeUrl: changeUrl,
      statistics: stats.getInfo()
    });
  } catch (err) {
    console.error('Erro ao processar dados de recursos hídricos:', err);
    res.status(500).json({ error: 'Erro ao processar os dados de recursos hídricos.', details: err.message });
  }
});

// Rota para obter dados sobre qualidade do ar
app.get('/air-quality', async (req, res) => {
  try {
    // Obter parâmetros da requisição
    const { lat = -23.55, lng = -46.63 } = req.query; // Padrão: São Paulo
    const latNum = parseFloat(lat);
    const lngNum = parseFloat(lng);

    // Definir a região de interesse
    const point = ee.Geometry.Point([lngNum, latNum]);
    const region = point.buffer(30000); // Buffer de 30km

    // Obter dados de NO2 do Sentinel-5P
    const no2 = ee.ImageCollection('COPERNICUS/S5P/OFFL/L3_NO2')
                 .filterBounds(region)
                 .filterDate(ee.Date.now().advance(-3, 'month'), ee.Date.now())
                 .select('NO2_column_number_density')
                 .mean();

    // Gerar URL da imagem de NO2
    const no2Url = no2.getThumbURL({
      min: 0,
      max: 0.0002,
      palette: ['blue', 'cyan', 'green', 'yellow', 'orange', 'red'],
      dimensions: 800,
      format: 'png'
    });

    // Calcular estatísticas de qualidade do ar
    const stats = no2.reduceRegion({
      reducer: ee.Reducer.mean(),
      geometry: region,
      scale: 1000,
      maxPixels: 1e9
    });

    // Retornar os dados de qualidade do ar
    res.json({
      message: 'Dados de qualidade do ar obtidos com sucesso.',
      location: {
        lat: latNum,
        lng: lngNum
      },
      no2Url: no2Url,
      statistics: stats.getInfo()
    });
  } catch (err) {
    console.error('Erro ao processar dados de qualidade do ar:', err);
    res.status(500).json({ error: 'Erro ao processar os dados de qualidade do ar.', details: err.message });
  }
});

// Rota para obter um relatório ambiental completo
app.get('/environmental-report', async (req, res) => {
  try {
    // Obter parâmetros da requisição
    const { lat = -23.55, lng = -46.63 } = req.query; // Padrão: São Paulo
    const latNum = parseFloat(lat);
    const lngNum = parseFloat(lng);

    // Definir a região de interesse
    const point = ee.Geometry.Point([lngNum, latNum]);
    const region = point.buffer(20000); // Buffer de 20km

    // Obter dados de cobertura do solo
    const landCover = ee.ImageCollection('MODIS/006/MCD12Q1')
                        .filterBounds(region)
                        .filterDate(ee.Date.now().advance(-1, 'year'), ee.Date.now())
                        .first()
                        .select('LC_Type1');

    // Obter dados de vegetação (NDVI)
    const sentinel = ee.ImageCollection('COPERNICUS/S2_SR')
                      .filterBounds(region)
                      .filterDate(ee.Date.now().advance(-3, 'month'), ee.Date.now())
                      .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', 20))
                      .first();
    const ndvi = sentinel.normalizedDifference(['B8', 'B4']).rename('NDVI');

    // Obter dados de temperatura
    const lst = ee.ImageCollection('MODIS/006/MOD11A1')
                 .filterBounds(region)
                 .filterDate(ee.Date.now().advance(-1, 'month'), ee.Date.now())
                 .select('LST_Day_1km')
                 .mean();
    const lstCelsius = lst.multiply(0.02).subtract(273.15);

    // Calcular estatísticas
    const stats = ee.Dictionary({
      'landCover': landCover.reduceRegion({
        reducer: ee.Reducer.frequencyHistogram(),
        geometry: region,
        scale: 500,
        maxPixels: 1e9
      }),
      'ndvi': ndvi.reduceRegion({
        reducer: ee.Reducer.mean(),
        geometry: region,
        scale: 10,
        maxPixels: 1e9
      }),
      'temperature': lstCelsius.reduceRegion({
        reducer: ee.Reducer.mean(),
        geometry: region,
        scale: 1000,
        maxPixels: 1e9
      })
    });

    // Retornar o relatório ambiental completo
    res.json({
      message: 'Relatório ambiental gerado com sucesso.',
      location: {
        lat: latNum,
        lng: lngNum
      },
      report: stats.getInfo(),
      timestamp: new Date().toISOString()
    });
  } catch (err) {
    console.error('Erro ao gerar relatório ambiental:', err);
    res.status(500).json({ error: 'Erro ao gerar o relatório ambiental.', details: err.message });
  }
});

// Rota para verificar o status da API
app.get('/status', (req, res) => {
  res.json({
    status: 'online',
    message: 'API do Google Earth Engine está funcionando corretamente.',
    timestamp: new Date().toISOString()
  });
});

// Rota principal
app.get('/', (req, res) => {
  res.json({
    message: 'Bem-vindo à API de Dados Ambientais da Green Link',
    description: 'Esta API fornece acesso a dados geoespaciais e ambientais usando o Google Earth Engine.',
    endpoints: [
      { path: '/satellite-image', description: 'Obter imagem de satélite de uma área específica' },
      { path: '/land-cover', description: 'Obter dados sobre cobertura do solo' },
      { path: '/carbon-emissions', description: 'Obter dados sobre emissões de carbono' },
      { path: '/vegetation', description: 'Obter dados sobre vegetação (NDVI)' },
      { path: '/temperature', description: 'Obter dados sobre temperatura da superfície' },
      { path: '/deforestation', description: 'Obter dados sobre desmatamento' },
      { path: '/water-resources', description: 'Obter dados sobre recursos hídricos' },
      { path: '/air-quality', description: 'Obter dados sobre qualidade do ar' },
      { path: '/environmental-report', description: 'Obter um relatório ambiental completo' },
      { path: '/status', description: 'Verificar o status da API' }
    ],
    documentation: 'Para mais informações, consulte a documentação completa da API.'
  });
}); 