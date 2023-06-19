import { createContext, useContext } from 'react';
import { useAuthStateChange } from './index';

const AuthContext = createContext(null);

export function AuthProvider({ children }: { children: React.ReactNode | React.ReactNode[] }) {
  const authState = useAuthStateChange();

  return (
    <AuthContext.Provider value={authState as null}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
