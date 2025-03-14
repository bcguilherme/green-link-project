import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="px-4 sm:px-6 lg:px-8 py-4 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-green-link-600">GREEN LINK</span>
          </Link>
          <div className="hidden md:flex space-x-8 items-center">
            <Link to="/about" className="text-green-link-600 font-medium">
              Sobre
            </Link>
            <a href="#solucoes" className="text-gray-700 hover:text-green-link-600 transition-colors">
              Soluções
            </a>
            <a href="#precos" className="text-gray-700 hover:text-green-link-600 transition-colors">
              Preços
            </a>
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
      <div className="bg-green-link-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold text-gray-900 mb-4"
            >
              Nossa Missão
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              A missão da Green Link é facilitar o acesso a soluções práticas de sustentabilidade 
              corporativa, tornando o processo de compensação de emissões e adoção de práticas 
              ambientais mais simples, transparente e eficaz.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Visão Geral */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">O que fazemos</h2>
              <p className="text-lg text-gray-600 mb-6">
                Nossa plataforma não apenas monitora e calcula a pegada de carbono das empresas, 
                mas também oferece opções de compensação, certificação ambiental, e acesso a 
                tecnologias de redução de impacto, como painéis solares e descontos em serviços 
                ambientais.
              </p>
              <p className="text-lg text-gray-600">
                Acreditamos que a sustentabilidade deve ser acessível a todas as empresas, 
                independentemente do seu tamanho. Com a Green Link, você tem acesso a 
                ferramentas de ponta e consultoria especializada para tornar sua empresa 
                mais verde e eficiente.
              </p>
            </div>
            <div className="bg-gray-100 p-8 rounded-xl">
              <blockquote className="italic text-gray-700 border-l-4 border-green-link-500 pl-4">
                "Fazemos a ponte entre empresas que desejam reduzir seu impacto ambiental 
                e as melhores soluções de sustentabilidade disponíveis, simplificando o 
                processo e maximizando os resultados."
              </blockquote>
              <p className="mt-4 text-right text-gray-600">— Equipe Green Link</p>
            </div>
          </div>
        </div>
      </div>

      {/* Soluções Detalhadas */}
      <div id="solucoes" className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Nossas Soluções Detalhadas
          </h2>

          {/* Solução 1 */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-12">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <div className="w-16 h-16 bg-green-link-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-green-link-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Monitoramento e Cálculo de Emissões de Carbono
                </h3>
              </div>
              <div className="md:w-2/3">
                <p className="text-gray-600 mb-4">
                  A Green Link permite que as empresas monitorem suas emissões de CO2 e outros gases 
                  de efeito estufa, oferecendo uma visão clara e detalhada da pegada ambiental em 
                  tempo real.
                </p>
                <p className="text-gray-600 mb-4">
                  Utilizamos algoritmos avançados para calcular o impacto ambiental das operações 
                  das empresas com base em dados fornecidos pelos usuários.
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Monitoramento em tempo real das emissões de carbono</li>
                  <li>Relatórios detalhados e personalizados</li>
                  <li>Recomendações para redução de emissões</li>
                  <li>Histórico e comparativo de desempenho</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Solução 2 */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-12">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <div className="w-16 h-16 bg-eco-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-eco-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Compensação de Carbono
                </h3>
              </div>
              <div className="md:w-2/3">
                <p className="text-gray-600 mb-4">
                  Empresas podem compensar suas emissões investindo em projetos de redução de carbono, 
                  como reflorestamento e tecnologias de captura de carbono.
                </p>
                <p className="text-gray-600 mb-4">
                  Certificados de Compensação Ambiental são emitidos como reconhecimento dos esforços 
                  das empresas em neutralizar seus impactos.
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Acesso a projetos certificados de compensação de carbono</li>
                  <li>Rastreabilidade e transparência dos investimentos</li>
                  <li>Certificados digitais de compensação de carbono</li>
                  <li>Conteúdo para divulgação das ações de sustentabilidade</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Solução 3 */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-12">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <div className="w-16 h-16 bg-earth-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-earth-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Tecnologia de Energia Sustentável
                </h3>
              </div>
              <div className="md:w-2/3">
                <p className="text-gray-600 mb-4">
                  Conectamos empresas a soluções de energia limpa, como instalação de painéis solares e 
                  outras tecnologias verdes, que não só ajudam a reduzir as emissões, mas também geram 
                  economias de custo a longo prazo.
                </p>
                <p className="text-gray-600 mb-4">
                  Parcerias com empresas certificadas de energia renovável para garantir a implementação 
                  de tecnologias eficazes.
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Avaliação personalizada de necessidades energéticas</li>
                  <li>Acesso a uma rede de fornecedores certificados</li>
                  <li>Simulação de economia e retorno sobre investimento</li>
                  <li>Acompanhamento da implementação e resultados</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Solução 4 */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <div className="w-16 h-16 bg-green-link-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-green-link-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Consultoria e Aconselhamento Ambiental
                </h3>
              </div>
              <div className="md:w-2/3">
                <p className="text-gray-600 mb-4">
                  A Green Link oferece serviços de consultoria personalizada para empresas que buscam 
                  otimizar seus processos e reduzir seu impacto ambiental.
                </p>
                <p className="text-gray-600 mb-4">
                  Acompanhamento contínuo de performance ambiental, com relatórios periódicos sobre o 
                  progresso das empresas em direção a suas metas de sustentabilidade.
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Consultoria personalizada com especialistas em sustentabilidade</li>
                  <li>Desenvolvimento de estratégias ambientais sob medida</li>
                  <li>Treinamento e conscientização para funcionários</li>
                  <li>Avaliação de processos internos e recomendações de melhoria</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefícios Fiscais e Financeiros */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Incentivos Fiscais e Benefícios
          </h2>
          
          <div className="bg-green-link-50 p-8 rounded-xl">
            <p className="text-lg text-gray-700 mb-6">
              Empresas que adotam práticas sustentáveis podem se beneficiar de incentivos fiscais 
              e descontos em serviços relacionados à sustentabilidade e compensação de carbono.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Facilitamos o acesso a programas de incentivos governamentais e privados que 
              estimulam a adoção de práticas verdes.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Incentivos Disponíveis</h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Dedução de impostos para investimentos em tecnologias limpas</li>
                  <li>Redução de taxas para empresas com certificação ambiental</li>
                  <li>Descontos em licenças e alvarás para negócios sustentáveis</li>
                  <li>Acesso a linhas de crédito com taxas reduzidas</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Retorno Sobre Investimento</h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Redução de custos operacionais com eficiência energética</li>
                  <li>Melhoria da imagem da marca e fidelização de clientes</li>
                  <li>Acesso a novos mercados que valorizam práticas sustentáveis</li>
                  <li>Vantagem competitiva em licitações e contratos públicos</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-green-link-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Comece sua jornada sustentável hoje
          </h2>
          <p className="text-xl text-green-link-100 mb-8 max-w-3xl mx-auto">
            Junte-se a centenas de empresas que estão transformando seus negócios e construindo 
            um futuro mais sustentável.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
            <Link
              to="/register"
              className="inline-block bg-white text-green-link-700 px-8 py-3 rounded-md font-medium hover:bg-green-link-50 transition-colors"
            >
              Comece sua avaliação gratuita
            </Link>
            <Link
              to="/contato"
              className="inline-block bg-transparent text-white border border-white px-8 py-3 rounded-md font-medium hover:bg-green-link-500 transition-colors"
            >
              Fale com um consultor
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">GREEN LINK</h3>
              <p className="text-gray-400">
                Facilitando o acesso a soluções práticas de sustentabilidade corporativa.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Soluções</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Monitoramento de Emissões</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Compensação de Carbono</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Energia Sustentável</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Consultoria Ambiental</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Sobre nós</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Carreiras</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contato</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Termos de Serviço</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Política de Privacidade</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Cookies</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} Green Link. Todos os direitos reservados.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.237 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage; 