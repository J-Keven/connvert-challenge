import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes/index';
import GlobalStyles from './styles/styles';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </>
    // </GlobalStyles>
  );
};

export default App;
