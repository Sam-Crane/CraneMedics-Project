import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AuthWrapper = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.post('/api/auth', { token })
        .then((response) => {
          setIsAuthenticated(true);
        })
        .catch(() => {
          localStorage.removeItem('token');
          setIsAuthenticated(false);
        });
    }
  }, []);

  return children({ isAuthenticated });
};

export default AuthWrapper;
