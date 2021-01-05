import React from 'react';

import UserCard from '../../components/UserCard';
import Header from '../../components/Header';
import { Container, Content, TopBar } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <Content>
        <strong>Usuários com dividas</strong>
        <ul>
          <TopBar>
            <text>Nome</text>
            <text>Preço</text>
            <text>Total de dividas</text>
          </TopBar>
          <li>
            <UserCard />
          </li>
          <li>
            <UserCard />
          </li>
          <li>
            <UserCard />
          </li>
          <li>
            <UserCard />
          </li>
          <li>
            <UserCard />
          </li>
          <li>
            <UserCard />
          </li>
          <li>
            <UserCard />
          </li>
          <li>
            <UserCard />
          </li>
        </ul>
      </Content>
    </Container>
  );
};

export default Home;
