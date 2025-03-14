# Green Link

Plataforma digital para gestão ambiental, certificação sustentável e compensação de carbono.

## Visão Geral

Green Link é uma plataforma inovadora que conecta empresas, organizações e indivíduos a soluções sustentáveis, permitindo:

- Monitoramento de dados ambientais em tempo real
- Visualização de dados geoespaciais com integração do Google Maps
- Gestão de certificações ambientais
- Compensação de carbono através de projetos sustentáveis
- Marketplace para créditos de carbono

## Tecnologias

- **Frontend**: React, TypeScript, Next.js, Tailwind CSS, Shadcn UI
- **Backend**: Firebase (Authentication, Firestore)
- **Integrações**: Google Maps API, Google Earth Engine
- **Deployment**: Vercel

## Estrutura do Projeto

O projeto está organizado em duas partes principais:

1. **Aplicação React Original** (diretório raiz)
2. **Aplicação Next.js** (diretório `/greenlink-next`)

A versão Next.js é a mais recente e recomendada para desenvolvimento.

## Configuração e Instalação

### Pré-requisitos

- Node.js 18+
- npm ou yarn
- Conta Firebase
- Chave de API do Google Maps

### Instalação

```bash
# Clonar o repositório
git clone https://github.com/seu-usuario/green-link.git
cd green-link

# Instalar dependências da aplicação Next.js
cd greenlink-next
npm install

# Configurar variáveis de ambiente
cp .env.example .env.local
# Edite o arquivo .env.local com suas chaves de API

# Iniciar o servidor de desenvolvimento
npm run dev
```

## Principais Funcionalidades

- **Autenticação de Usuários**: Sistema completo de login, registro e recuperação de senha
- **Dashboard Ambiental**: Visualização de métricas e indicadores de sustentabilidade
- **Mapa Interativo**: Visualização de dados geoespaciais e ambientais
- **Marketplace**: Plataforma para compra e venda de créditos de carbono
- **Certificações**: Gestão de certificações ambientais

## Contribuição

Contribuições são bem-vindas! Por favor, siga estes passos:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/amazing-feature`)
3. Commit suas mudanças (`git commit -m 'Add some amazing feature'`)
4. Push para a branch (`git push origin feature/amazing-feature`)
5. Abra um Pull Request

## Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo LICENSE para detalhes.

## Contato

Para mais informações, entre em contato através do email: contato@greenlink.com.br 