import React from 'react';
// import { Link } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Container, LogoImage } from './styles';

import Logo from '../../assets/logoIcon.png';

const Header: React.FC = () => {
  return (
    <Container>
      <header>
        <LogoImage>
          <img src={Logo} alt="Logo" />
          <text>Dívidas manager</text>
        </LogoImage>
      </header>

      <Link to="/createDebt">
        <text>Adicionar dívida</text>
      </Link>
    </Container>
  );
};

export default Header;
