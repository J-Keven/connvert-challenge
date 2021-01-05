import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import DebtCard from '../../components/DebtCard';
import Header from '../../components/Header';
import background from '../../assets/DebtList.png';
import { Container, Content } from './styles';
import apiClient from '../../services/apiClient';

interface DebtsProps {
  id: string;
  user_id: number;
  description: string;
  value: number;
  created_at: Date;
  updated_at: Date;
}
interface UserProps {
  id: string;
  name: string;
}

interface UseParamsProps {
  id: string;
}

const Home: React.FC = () => {
  const [debts, setDebts] = useState<DebtsProps[]>([]);
  const [user, setUser] = useState<UserProps>({} as UserProps);
  const { id } = useParams<UseParamsProps>();

  useEffect(() => {
    apiClient.get(`/users/${id}`).then(response => {
      setUser(response.data);
    });

    apiClient.get(`/debts/${id}`).then(response => {
      setDebts(response.data);
    });
  });
  return (
    <Container>
      <Header />
      <body>
        <Content>
          <div>
            <Link to="/">
              <FiArrowLeft size={32} />
            </Link>
            <strong>{user.name}</strong>
          </div>
          <ul>
            {debts.map(debt => {
              return (
                <li>
                  <DebtCard
                    id={debt.id}
                    value={debt.value}
                    description={debt.description}
                    date={debt.created_at}
                  />
                </li>
              );
            })}
          </ul>
        </Content>
        <img src={background} alt="background" />
      </body>
    </Container>
  );
};

export default Home;
