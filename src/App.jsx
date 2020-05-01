import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Routes } from 'components/Routes';
import { AuthProvider } from 'contexts/AuthContext';
import { GlobalStyle } from 'visual/styles/GlobalStyle';
import { Header } from 'components/Header';

export const App = () => (
  <>
    <GlobalStyle />
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <Routes />
      </BrowserRouter>
    </AuthProvider>
  </>
);

export default App;
