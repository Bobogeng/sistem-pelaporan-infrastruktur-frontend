import {createContext, useContext, useState, useEffect} from 'react';

const AuthContext = createContext();

export function AuthProvider({children}) {
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setAuth(token);
    }
  }, []);

  const login = (token) => {
    setAuth(token);
    localStorage.setItem('authToken', token);
  };

  const logout = () => {
    setAuth(null);
    localStorage.removeItem('authToken');
  };

  const isLoggedIn = () => {
    return auth;
  };

  return <AuthContext.Provider value={{auth, login, logout, isLoggedIn}}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
