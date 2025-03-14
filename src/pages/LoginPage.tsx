import React from 'react';
import LoginForm from '../components/auth/LoginForm';
import { Link } from 'react-router-dom';

const LoginPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-link-50 to-green-link-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div
        className="sm:mx-auto sm:w-full sm:max-w-md transition-all duration-500 ease-in-out"
      >
        <Link to="/" className="flex justify-center">
          <span className="text-3xl font-bold text-green-link-600">GREEN LINK</span>
        </Link>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <LoginForm />
      </div>

      <div
        className="mt-8 text-center transition-all duration-500 ease-in-out"
      >
        <p className="text-sm text-gray-600">
          &copy; {new Date().getFullYear()} Green Link. Todos os direitos reservados.
        </p>
      </div>
    </div>
  );
};

export default LoginPage; 