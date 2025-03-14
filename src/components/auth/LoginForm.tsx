import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import useForm from '../../hooks/useForm';
import Input from '../ui/Input';
import Button from '../ui/Button';
import Alert from '../ui/Alert';

// Interface para os valores do formulário
interface LoginFormValues {
  email: string;
  password: string;
}

// Validação do formulário
const validateForm = (values: LoginFormValues) => {
  const errors: Record<string, string> = {};

  if (!values.email) {
    errors.email = 'E-mail é obrigatório';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'E-mail inválido';
  }

  if (!values.password) {
    errors.password = 'Senha é obrigatória';
  } else if (values.password.length < 6) {
    errors.password = 'A senha deve ter pelo menos 6 caracteres';
  }

  return errors;
};

const LoginForm: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [authError, setAuthError] = useState<string | null>(null);

  // Inicializa o hook de formulário
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    setErrors,
  } = useForm<LoginFormValues>({
    initialValues: {
      email: '',
      password: '',
    },
    validate: validateForm,
    onSubmit: async (formValues) => {
      try {
        setAuthError(null);
        const result = await login(formValues.email, formValues.password);
        
        if (result.error) {
          setAuthError(result.error.message);
        } else {
          // Redireciona para o dashboard após login bem-sucedido
          navigate('/dashboard');
        }
      } catch (error) {
        setAuthError('Ocorreu um erro durante o login. Tente novamente.');
        console.error('Erro de login:', error);
      }
    },
  });

  return (
    <div
      className="max-w-md w-full mx-auto p-6 bg-white rounded-lg shadow-md transition-all duration-300 ease-in-out"
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900">GREEN LINK</h2>
        <p className="mt-2 text-sm text-gray-600">
          Entre com sua conta para acessar a plataforma
        </p>
      </div>

      {authError && (
        <Alert
          variant="error"
          message={authError}
          onClose={() => setAuthError(null)}
        />
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="transition-all duration-300 ease-in-out">
          <Input
            label="E-mail"
            type="email"
            name="email"
            id="email"
            placeholder="seu@email.com"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.email ? errors.email : undefined}
            autoComplete="email"
            icon={
              <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            }
          />
        </div>

        <div className="transition-all duration-300 ease-in-out">
          <Input
            label="Senha"
            type="password"
            name="password"
            id="password"
            placeholder="••••••"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.password ? errors.password : undefined}
            autoComplete="current-password"
            icon={
              <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
            }
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 text-green-link-600 focus:ring-green-link-500 border-gray-300 rounded"
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
              Lembrar-me
            </label>
          </div>

          <div className="text-sm">
            <a href="#" className="font-medium text-green-link-600 hover:text-green-link-500">
              Esqueceu sua senha?
            </a>
          </div>
        </div>

        <div
          className="pt-2 transition-all duration-300 ease-in-out"
        >
          <Button
            type="submit"
            fullWidth
            isLoading={isSubmitting}
            className="bg-green-link-600 hover:bg-green-link-700"
          >
            Entrar
          </Button>
        </div>

        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Não tem uma conta?{' '}
            <Link to="/register" className="font-medium text-green-link-600 hover:text-green-link-500">
              Cadastre-se
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm; 