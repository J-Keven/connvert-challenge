import React from 'react';
import { useHistory } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { Container, UserInfo } from './styles';

const UserCard: React.FC = () => {
  const history = useHistory();
  return (
    <Container
      onClick={() => {
        history.push('debtsList');
      }}
    >
      <UserInfo>
        <strong>Ricardo</strong>
        <text>R$ 10.000,00</text>
        <span>Um total de 12 dívidas</span>
      </UserInfo>
      <FiArrowRight size={32} />
    </Container>
  );
};
export default UserCard;
