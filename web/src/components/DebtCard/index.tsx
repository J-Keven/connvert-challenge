import React from 'react';
import { FiTrash2, FiEdit } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import { Container, Content, ActionsButtons } from './styles';

const DebtCard: React.FC = () => {
  const history = useHistory();

  return (
    <Container>
      <Content>
        <header>
          <strong>R$ 10.000,00</strong>
          <ActionsButtons>
            <button
              type="button"
              id="edit"
              onClick={() => history.push('updateDebt')}
            >
              <FiEdit size={32} />
            </button>
            <button type="button" id="trash">
              <FiTrash2 size={32} />
            </button>
          </ActionsButtons>
        </header>
        <div>
          <text>
            Uma nova divida adquirida apos a compra de um altomível no valor de
            50 mil reias, financiado em 100 vezes de 500 reias.
          </text>
          <span>04/01/2020</span>
        </div>
      </Content>
    </Container>
  );
};
export default DebtCard;
