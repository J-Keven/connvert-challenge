import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import DebtCard from '../../components/DebtCard';
import Header from '../../components/Header';

import { Container, Content } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <Content>
        <div>
          <Link to="/">
            <FiArrowLeft size={22} />
          </Link>
          <strong>Ricardo</strong>
        </div>
        <ul>
          <li>
            <DebtCard />
          </li>
          <li>
            <DebtCard />
          </li>
          <li>
            <DebtCard />
          </li>
          <li>
            <DebtCard />
          </li>
          <li>
            <DebtCard />
          </li>
          <li>
            <DebtCard />
          </li>
          <li>
            <DebtCard />
          </li>
          <li>
            <DebtCard />
          </li>
        </ul>
      </Content>
    </Container>
  );
};

export default Home;
