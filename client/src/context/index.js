import { useState, createContext, useContext, useEffect } from 'react';
import client from '../client';

// set auth session
const setSession = (token) => {
  if (token) {
    localStorage.setItem('token', token);
    client.defaults.headers.token = token;
  } else {
    localStorage.removeItem('token');
    delete client.defaults.headers.token;
  }
};

export const AuthContext = createContext([]);

export const useAuth = () => useContext(AuthContext);

export const AuthWrapper = ({ children }) => {
  const [authState, setAuthState] = useState({
    user: null,
    isAuthenticated: false,
  });
  const [loading, setLoading] = useState(true);

  const initUser = () => {
    const token = window.localStorage.getItem('token');

    if (token) {
      setSession(token);

      client
        .get('auth/me')
        .then(({ data }) => {
          setAuthState((prevState) => ({
            ...prevState,
            user: data,
            isAuthenticated: true,
          }));
        })
        .catch(console.log)
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
      setAuthState((prevState) => ({
        ...prevState,
        user: null,
        isAuthenticated: false,
      }));
    }
  };

  useEffect(() => {
    initUser();
    // eslint-disable-next-line
  }, []);

  const logout = () => {
    setAuthState((prevState) => ({
      ...prevState,
      user: null,
      isAuthenticated: false,
    }));
    setSession(null);
  };

  return (
    <AuthContext.Provider value={{ authState, setAuthState, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
