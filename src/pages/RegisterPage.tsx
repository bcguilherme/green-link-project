import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const RegisterPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-link-50 to-green-link-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md transition-all duration-500 ease-in-out">
        <Link to="/" className="flex justify-center">
          <span className="text-3xl font-bold text-green-link-600">GREEN LINK</span>
        </Link>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-8 sm:mx-auto sm:w-full sm:max-w-md"
      >
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Comece sua jornada sustentável</h2>
            <p className="mt-2 text-sm text-gray-600">
              14 dias grátis, sem necessidade de cartão de crédito
            </p>
          </div>
          
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Nome completo
              </label>
              <div className="mt-1">
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-link-500 focus:border-green-link-500 sm:text-sm"
                  placeholder="Seu nome completo"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                E-mail corporativo
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-link-500 focus:border-green-link-500 sm:text-sm"
                  placeholder="seu@empresa.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Senha
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-link-500 focus:border-green-link-500 sm:text-sm"
                  placeholder="••••••"
                />
              </div>
            </div>

            <div>
              <label htmlFor="business-name" className="block text-sm font-medium text-gray-700">
                Nome da empresa
              </label>
              <div className="mt-1">
                <input
                  id="business-name"
                  name="business-name"
                  type="text"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-link-500 focus:border-green-link-500 sm:text-sm"
                  placeholder="Nome da sua empresa"
                />
              </div>
            </div>

            <div>
              <label htmlFor="industry" className="block text-sm font-medium text-gray-700">
                Setor da empresa
              </label>
              <div className="mt-1">
                <select
                  id="industry"
                  name="industry"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-link-500 focus:border-green-link-500 sm:text-sm"
                >
                  <option value="">Selecione o setor</option>
                  <option value="tecnologia">Tecnologia</option>
                  <option value="industria">Indústria</option>
                  <option value="servicos">Serviços</option>
                  <option value="varejo">Varejo</option>
                  <option value="saude">Saúde</option>
                  <option value="educacao">Educação</option>
                  <option value="outros">Outros</option>
                </select>
              </div>
            </div>

            <div className="flex items-center">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                required
                className="h-4 w-4 text-green-link-600 focus:ring-green-link-500 border-gray-300 rounded"
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
                Concordo com os <a href="#" className="text-green-link-600 hover:text-green-link-500">Termos de Serviço</a> e <a href="#" className="text-green-link-600 hover:text-green-link-500">Política de Privacidade</a>
              </label>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-link-600 hover:bg-green-link-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-link-500"
              >
                Criar conta e começar avaliação gratuita
              </button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Ou</span>
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Já tem uma conta?{' '}
                <Link to="/login" className="font-medium text-green-link-600 hover:text-green-link-500">
                  Faça login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="mt-8 text-center transition-all duration-500 ease-in-out">
        <p className="text-sm text-gray-600">
          &copy; {new Date().getFullYear()} Green Link. Todos os direitos reservados.
        </p>
      </div>
    </div>
  );
};

export default RegisterPage; 