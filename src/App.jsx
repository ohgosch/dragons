import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Routes } from 'components/Routes';
import { AuthProvider } from 'contexts/AuthContext';

export const App = () => (
  <AuthProvider>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </AuthProvider>
);

export default App;
