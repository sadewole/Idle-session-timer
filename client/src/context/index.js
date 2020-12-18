import { useState, createContext, useContext, useEffect } from 'react';
import client from '../client';

export const AuthContext = createContext([]);

export const useAuth = () => useContext(AuthContext);

export const AuthWrapper = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const refreshToken = () => {
    client
      .get('auth/me')
      .then((data) => {
        console.log(data);
      })
      .catch(console.log)
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    refreshToken();
    // eslint-disable-next-line
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
