import React, { useState, useCallback, FormEvent } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import Header from '../../components/Header';
import Input from '../../components/Input';
import TextArea from '../../components/TextArea';
import apiClient from '../../services/apiClient';
import background from '../../assets/updateDebts2.png';
import { Container, Content } from './styles';
import { useToast } from '../../hooks/toastContext';

interface UseParamsProps {
  debtId: string;
}
const UpdateDebt: React.FC = () => {
  const [value, setValue] = useState<string>();
  const [description, setDescription] = useState<string>();
  const history = useHistory();

  const { addToast } = useToast();
  const { debtId } = useParams<UseParamsProps>();

  const handleCreateDebt = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      try {
        const data = {
          value: Number(value),
          description,
        };

        await apiClient.patch(`/debts/${debtId}`, data);

        addToast({
          type: 'success',
          title: 'Divida cadastrada com sucesso.',
        });

        history.push('/');
      } catch (error) {
        addToast({
          type: 'error',
          title: 'Error ao cadastrar a divida',
          message:
            'Ocorreu um erro ao cadastrar a divida, por favor cheque as informações e tente novamente!',
        });
      }
    },
    [value, description, addToast, history, debtId],
  );
  return (
    <Container>
      <Header />
      <Content>
        <form onSubmit={handleCreateDebt}>
          <strong>Atulizar dados da dívida</strong>

          <Input
            type="float"
            name="value"
            placeholder="Valor da dívida"
            onChange={e => setValue(e.target.value)}
          />

          <TextArea
            name="description"
            placeholder="Descrição"
            onChange={e => setDescription(e.target.value)}
          />

          <button type="submit">Adicionar</button>

          <div id="goback">
            <button type="button" onClick={() => history.goBack()}>
              <FiArrowLeft size={32} />
              <text>Voltar</text>
            </button>
          </div>
        </form>
        <img src={background} alt="background" />
      </Content>
    </Container>
  );
};

export default UpdateDebt;
