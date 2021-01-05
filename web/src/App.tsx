import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes/index';
import GlobalStyles from './styles/styles';
import { ToastProvider } from './hooks/toastContext';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <ToastProvider>
          <Routes />
        </ToastProvider>
      </BrowserRouter>
    </>
    // </GlobalStyles>
  );
};

export default App;
