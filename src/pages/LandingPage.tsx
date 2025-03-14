import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="px-4 sm:px-6 lg:px-8 py-4 sticky top-0 bg-white/90 backdrop-blur-sm z-50 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-green-link-600">GREEN LINK</span>
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#solucoes" className="text-gray-700 hover:text-green-link-600 transition-colors">
              Soluções
            </a>
            <a href="#tecnologias" className="text-gray-700 hover:text-green-link-600 transition-colors">
              Tecnologias
            </a>
            <a href="#mercados" className="text-gray-700 hover:text-green-link-600 transition-colors">
              Mercados
            </a>
            <a href="#contato" className="text-gray-700 hover:text-green-link-600 transition-colors">
              Contato
            </a>
            <div className="flex items-center space-x-2">
              <span className="text-gray-700">🌎</span>
              <span className="text-gray-700">Português (BR)</span>
            </div>
            <Link 
              to="/login" 
              className="text-gray-700 hover:text-green-link-600 transition-colors"
            >
              Entrar
            </Link>
          </div>
          <Link 
            to="/register" 
            className="bg-green-link-600 text-white px-6 py-2 rounded-md hover:bg-green-link-700 transition-colors"
          >
            Começar agora
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Conectando <span className="text-green-link-600">Sustentabilidade</span> e <span className="text-green-link-600">Inovação</span>
            </h1>
            <p className="text-lg text-gray-600">
              A Green Link revoluciona a forma como empresas, o setor imobiliário e governos adotam práticas sustentáveis e compensam seus impactos ambientais através de um ecossistema 100% digital.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to="/register"
                className="bg-green-link-600 text-white px-6 py-3 rounded-md hover:bg-green-link-700 transition-colors text-center flex items-center justify-center"
              >
                Calcular sua pegada de carbono <span className="ml-2">→</span>
              </Link>
              <a
                href="#como-funciona"
                className="border border-gray-300 text-gray-700 px-6 py-3 rounded-md hover:bg-gray-50 transition-colors text-center"
              >
                Ver demonstração
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-green-link-400"></div>
                <div className="w-8 h-8 rounded-full bg-green-link-500"></div>
                <div className="w-8 h-8 rounded-full bg-green-link-600"></div>
              </div>
              <div className="text-gray-700">
                <span className="font-bold">+500</span> empresas sustentáveis
              </div>
              <div className="flex items-center ml-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-1 text-gray-700">4.9/5 avaliações</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gradient-to-br from-green-link-50 to-green-link-100 p-8 rounded-xl"
          >
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Comece sua jornada sustentável</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-link-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Dashboard de gestão ambiental completo</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-link-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Certificação ambiental digital com blockchain</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-link-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Marketplace de soluções sustentáveis</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-link-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Sistema de compensação de carbono</span>
                </li>
              </ul>
              <div className="mt-8">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-500">A partir de</span>
                  <span className="bg-green-link-100 text-green-link-800 text-sm px-2 py-1 rounded">
                    Economize 20% no plano anual
                  </span>
                </div>
                <div className="flex items-end">
                  <span className="text-3xl font-bold">R$299,90</span>
                  <span className="text-gray-500 ml-1">/mês</span>
                </div>
                <div className="mt-4">
                  <Link
                    to="/register"
                    className="w-full bg-green-link-600 text-white py-3 rounded-md hover:bg-green-link-700 transition-colors text-center block"
                  >
                    Começar avaliação gratuita
                  </Link>
                </div>
                <div className="mt-4 flex items-center justify-center">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-link-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">
                      <span className="font-bold">-30%</span> de emissões
                    </span>
                  </div>
                  <span className="mx-2 text-gray-300">|</span>
                  <span className="text-sm">nos primeiros 90 dias</span>
                </div>
              </div>
              <div className="mt-4 text-center">
                <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-green-link-100 bg-green-link-600 rounded">
                  14 DIAS GRÁTIS
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Serviços Section */}
      <div id="solucoes" className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Nossas Soluções Sustentáveis</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Oferecemos um ecossistema completo e 100% digital para gestão ambiental, conectando empresas a soluções verdes, 
              promovendo certificação de projetos sustentáveis e criando um mercado de créditos de carbono transparente.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="w-12 h-12 bg-green-link-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-link-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Dashboard de Gestão Ambiental</h3>
                <p className="text-gray-600 mb-4">
                  Controle total da pegada de carbono com painéis interativos, dados em tempo real e recomendações por IA para reduzir custos e emissões.
                </p>
                <a href="#" className="text-green-link-600 hover:text-green-link-700 font-medium flex items-center">
                  Saiba mais
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="w-12 h-12 bg-green-link-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-link-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Marketplace Verde</h3>
                <p className="text-gray-600 mb-4">
                  Conecte-se com fornecedores de soluções sustentáveis e adquira créditos de carbono certificados, equipamentos ecoeficientes e serviços ambientais.
                </p>
                <a href="#" className="text-green-link-600 hover:text-green-link-700 font-medium flex items-center">
                  Saiba mais
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="w-12 h-12 bg-green-link-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-link-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Certificação Ambiental Digital</h3>
                <p className="text-gray-600 mb-4">
                  Ferramenta para auditoria remota e certificação online de construções sustentáveis com integração blockchain para registros imutáveis.
                </p>
                <a href="#" className="text-green-link-600 hover:text-green-link-700 font-medium flex items-center">
                  Saiba mais
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Card 4 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="w-12 h-12 bg-green-link-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-link-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Compensação de Carbono</h3>
                <p className="text-gray-600 mb-4">
                  Calcule, neutralize e acompanhe sua compensação de CO2 investindo em projetos certificados como reflorestamento e energia renovável.
                </p>
                <a href="#" className="text-green-link-600 hover:text-green-link-700 font-medium flex items-center">
                  Saiba mais
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tecnologias Section */}
      <div id="tecnologias" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Tecnologias que Potencializam a Green Link</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Combinamos tecnologias de ponta para transformar boas intenções em ações concretas e mensuráveis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Tech 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-green-link-100 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-green-link-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Inteligência Artificial</h3>
              </div>
              <p className="text-gray-600">
                Sugestões automáticas de estratégias para redução de emissões e análise preditiva para otimização de recursos energéticos e hídricos.
              </p>
            </motion.div>

            {/* Tech 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-green-link-100 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-green-link-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Blockchain</h3>
              </div>
              <p className="text-gray-600">
                Registro transparente e seguro de transações de créditos de carbono e certificações ambientais, garantindo confiança e rastreabilidade.
              </p>
            </motion.div>

            {/* Tech 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-green-link-100 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-green-link-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">IoT (Internet das Coisas)</h3>
              </div>
              <p className="text-gray-600">
                Sensores conectados que monitoram consumo energético, qualidade do ar e uso de água em imóveis e instalações industriais.
              </p>
            </motion.div>

            {/* Tech 4 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-green-link-100 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-green-link-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Big Data & Analytics</h3>
              </div>
              <p className="text-gray-600">
                Análise profunda de dados ambientais, KPIs de sustentabilidade e benchmarks do mercado com relatórios personalizáveis.
              </p>
            </motion.div>

            {/* Tech 5 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-green-link-100 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-green-link-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">APIs e Integrações</h3>
              </div>
              <p className="text-gray-600">
                Conecte a Green Link com seus sistemas de ERP, gestão de facilities, CRMs e softwares de compliance ambiental.
              </p>
            </motion.div>

            {/* Tech 6 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-green-link-100 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-green-link-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Segurança e Compliance</h3>
              </div>
              <p className="text-gray-600">
                Infraestrutura cloud-based, com proteção de dados, criptografia de ponta a ponta e conformidade com LGPD/GDPR.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mercados Section */}
      <div id="mercados" className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Serviços para Diversos Mercados</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Soluções personalizadas para diferentes setores, adaptadas às necessidades específicas de cada mercado.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mercado 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <svg className="w-6 h-6 text-green-link-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                Empresas Privadas
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-link-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Gestão de projetos de sustentabilidade</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-link-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Compensação de emissões em cadeia de fornecedores</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-link-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Ferramentas para report ESG com credibilidade</span>
                </li>
              </ul>
            </div>

            {/* Mercado 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <svg className="w-6 h-6 text-green-link-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Setor Imobiliário
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-link-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Certificação ambiental de imóveis e empreendimentos</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-link-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Monitoramento energético e redução de custos</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-link-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Valorização de ativos com práticas sustentáveis</span>
                </li>
              </ul>
            </div>

            {/* Mercado 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <svg className="w-6 h-6 text-green-link-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                </svg>
                Governos e Prefeituras
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-link-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Plataforma para gestão pública de emissões</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-link-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Mapeamento urbano verde com dados georreferenciados</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-link-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Programas de incentivo fiscal para compensação de carbono</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-green-link-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Participe da Revolução Verde com a Green Link</h2>
            <p className="text-xl text-green-link-100 mb-8 max-w-3xl mx-auto">
              Quer saber como sua empresa ou projeto imobiliário pode ser carbono neutro e ainda gerar valor? Junte-se a centenas de empresas que já estão fazendo a diferença.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to="/register"
                className="inline-block bg-white text-green-link-700 px-8 py-3 rounded-md font-medium hover:bg-green-link-50 transition-colors"
              >
                Comece sua avaliação gratuita
              </Link>
              <Link
                to="/contact"
                className="inline-block bg-transparent border border-white text-white px-8 py-3 rounded-md font-medium hover:bg-green-link-500 transition-colors"
              >
                Solicitar demonstração
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12" id="contato">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">GREEN LINK</h3>
              <p className="text-gray-400 mb-4">
                Transformando boas intenções em ações concretas para um futuro mais sustentável.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.237 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Soluções</h4>
              <ul className="space-y-2">
                <li><a href="#solucoes" className="text-gray-400 hover:text-white transition-colors">Dashboard de Gestão</a></li>
                <li><a href="#solucoes" className="text-gray-400 hover:text-white transition-colors">Marketplace Verde</a></li>
                <li><a href="#solucoes" className="text-gray-400 hover:text-white transition-colors">Certificação Digital</a></li>
                <li><a href="#solucoes" className="text-gray-400 hover:text-white transition-colors">Compensação de Carbono</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Mercados</h4>
              <ul className="space-y-2">
                <li><a href="#mercados" className="text-gray-400 hover:text-white transition-colors">Empresas Privadas</a></li>
                <li><a href="#mercados" className="text-gray-400 hover:text-white transition-colors">Setor Imobiliário</a></li>
                <li><a href="#mercados" className="text-gray-400 hover:text-white transition-colors">Governos e Prefeituras</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Casos de Sucesso</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contato</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-link-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>contato@greenlink.com.br</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-link-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+55 (11) 4321-1234</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-link-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>São Paulo, Brasil</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} Green Link. Todos os direitos reservados.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Termos de Serviço</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Política de Privacidade</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage; 