import React from 'react';
import { useHistory } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { Container, UserInfo } from './styles';
import formatValue from '../../utils/formatValue';

interface UserCardProps {
  id: number;
  name: string;
  debt_total: number;
  count_debit: number;
}
const UserCard: React.FC<UserCardProps> = ({
  id,
  name,
  debt_total,
  count_debit,
}) => {
  const history = useHistory();
  return (
    <Container
      onClick={() => {
        history.push(`debtsList/${id}`);
      }}
    >
      <UserInfo>
        <strong>{name}</strong>
        <text>{formatValue(debt_total)}</text>
        <span>{`${count_debit} Dívidas`}</span>
      </UserInfo>
      <FiArrowRight size={32} />
    </Container>
  );
};
export default UserCard;
