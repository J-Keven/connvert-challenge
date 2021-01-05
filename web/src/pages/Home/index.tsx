import React, { useState, useEffect } from 'react';

import Header from '../../components/Header';
import UserCard from '../../components/UserCard';
import apiClient from '../../services/apiClient';

import { Container, Content, TopBar } from './styles';

interface UserProps {
  id: number;
  name: string;
  email: string;
}

interface UsersInDebitProps {
  user: UserProps;
  count_debit: number;
  debt_total: number;
}

const Home: React.FC = () => {
  const [usersIndebt, setUsersInDebt] = useState<UsersInDebitProps[]>([]);

  useEffect(() => {
    apiClient.get('/users-in-debt').then(response => {
      setUsersInDebt(response.data);
    });
  });
  return (
    <Container>
      <Header />
      <Content>
        <strong>Usuários com dividas</strong>
        <ul>
          <TopBar>
            <text>Nome</text>
            <text>Total</text>
            <text>Quantidade de dividas</text>
          </TopBar>
          {usersIndebt.map(user => {
            return (
              <li>
                <UserCard
                  id={user.user.id}
                  name={user.user.name}
                  debt_total={user.debt_total}
                  count_debit={user.count_debit}
                />
              </li>
            );
          })}
        </ul>
      </Content>
    </Container>
  );
};

export default Home;
