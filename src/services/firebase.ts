import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, User } from 'firebase/auth';

// Configuração do Firebase (substitua com suas próprias credenciais)
const firebaseConfig = {
  apiKey: "AIzaSyDYourApiKey",
  authDomain: "green-link-app.firebaseapp.com",
  projectId: "green-link-app",
  storageBucket: "green-link-app.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef1234567890"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Obtém a instância de autenticação
const auth = getAuth(app);

// Funções de autenticação
export const registerUser = async (email: string, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return { user: userCredential.user, error: null };
  } catch (error: any) {
    return {
      user: null,
      error: {
        code: error.code,
        message: getAuthErrorMessage(error.code)
      }
    };
  }
};

export const loginUser = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return { user: userCredential.user, error: null };
  } catch (error: any) {
    return {
      user: null,
      error: {
        code: error.code,
        message: getAuthErrorMessage(error.code)
      }
    };
  }
};

export const logoutUser = async () => {
  try {
    await signOut(auth);
    return { success: true, error: null };
  } catch (error: any) {
    return {
      success: false,
      error: {
        code: error.code,
        message: getAuthErrorMessage(error.code)
      }
    };
  }
};

// Função para obter mensagens de erro amigáveis
export const getAuthErrorMessage = (errorCode: string): string => {
  switch (errorCode) {
    case 'auth/invalid-email':
      return 'O endereço de e-mail não é válido.';
    case 'auth/user-disabled':
      return 'Esta conta de usuário foi desativada.';
    case 'auth/user-not-found':
      return 'Não existe usuário com este e-mail.';
    case 'auth/wrong-password':
      return 'Senha incorreta.';
    case 'auth/email-already-in-use':
      return 'Este e-mail já está sendo usado por outra conta.';
    case 'auth/weak-password':
      return 'A senha é muito fraca. Use pelo menos 6 caracteres.';
    case 'auth/network-request-failed':
      return 'Falha na conexão de rede. Verifique sua internet.';
    case 'auth/too-many-requests':
      return 'Muitas tentativas de login. Tente novamente mais tarde.';
    case 'auth/operation-not-allowed':
      return 'Operação não permitida.';
    default:
      return 'Ocorreu um erro durante a autenticação. Tente novamente.';
  }
};

export { auth };
export default app; 