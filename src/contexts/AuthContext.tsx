import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';
import { auth, loginUser, registerUser, logoutUser } from '../services/firebase';

// Definindo o tipo para o contexto de autenticação
interface AuthContextType {
  currentUser: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<{ user: User | null; error: any }>;
  register: (email: string, password: string) => Promise<{ user: User | null; error: any }>;
  logout: () => Promise<{ success: boolean; error: any }>;
}

// Criando o contexto com um valor padrão
const AuthContext = createContext<AuthContextType>({
  currentUser: null,
  loading: true,
  login: async () => ({ user: null, error: null }),
  register: async () => ({ user: null, error: null }),
  logout: async () => ({ success: false, error: null }),
});

// Hook personalizado para usar o contexto de autenticação
export const useAuth = () => useContext(AuthContext);

// Props para o provedor de autenticação
interface AuthProviderProps {
  children: ReactNode;
}

// Componente provedor de autenticação
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Efeito para monitorar mudanças no estado de autenticação
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    // Limpeza ao desmontar o componente
    return unsubscribe;
  }, []);

  // Funções de autenticação
  const login = async (email: string, password: string) => {
    return await loginUser(email, password);
  };

  const register = async (email: string, password: string) => {
    return await registerUser(email, password);
  };

  const logout = async () => {
    return await logoutUser();
  };

  // Valor do contexto
  const value = {
    currentUser,
    loading,
    login,
    register,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthContext; 