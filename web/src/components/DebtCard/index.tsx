import React, { useCallback } from 'react';
import { FiTrash2, FiEdit } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import { Container, Content, ActionsButtons } from './styles';
import formatDate from '../../utils/formatDate';
import formatValue from '../../utils/formatValue';
import apiClient from '../../services/apiClient';
import { useToast } from '../../hooks/toastContext';

interface DebtCardProps {
  id: string;
  value: number;
  date: Date;
  description: string;
}
const DebtCard: React.FC<DebtCardProps> = ({
  date,
  description,
  id,
  value,
}) => {
  const history = useHistory();
  const { addToast } = useToast();

  const handleDeleteDebt = useCallback(async () => {
    try {
      await apiClient.delete(`/debts/${id}`);
      addToast({
        type: 'success',
        title: 'Dívida removida com sucesso',
      });
    } catch (error) {
      addToast({
        type: 'error',
        title: 'Erro ao deletar a dívida',
        message: 'Ocorreu um erro ao deletar a divida, tente novamente!',
      });
    }
  }, [id, addToast]);

  return (
    <Container>
      <Content>
        <header>
          <strong>{formatValue(value)}</strong>
          <ActionsButtons>
            <button
              type="button"
              id="edit"
              onClick={() => history.push(`updateDebt/${id}`)}
            >
              <FiEdit size={32} />
            </button>
            <button type="button" id="trash" onClick={() => handleDeleteDebt()}>
              <FiTrash2 size={32} />
            </button>
          </ActionsButtons>
        </header>
        <div>
          <text>{description}</text>
          <span>{formatDate(date)}</span>
        </div>
      </Content>
    </Container>
  );
};
export default DebtCard;
