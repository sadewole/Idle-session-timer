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
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const initUser = () => {
    const token = window.localStorage.getItem('token');

    if (token) {
      setSession(token);

      client
        .get('auth/me')
        .then(({ data }) => {
          setUser(data);
        })
        .catch(console.log)
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
      setUser(null);
    }
  };

  useEffect(() => {
    initUser();
    // eslint-disable-next-line
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
