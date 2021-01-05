import React, { useCallback, useEffect, useState, FormEvent } from 'react';
import * as yup from 'yup';
import { useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import Header from '../../components/Header';
import Input from '../../components/Input';
import TextArea from '../../components/TextArea';
import background from '../../assets/background.png';
import { Container, Content } from './styles';
import apiClient from '../../services/apiClient';
import { useToast } from '../../hooks/toastContext';

interface UserProps {
  id: number;
  name: string;
  email: string;
}

const CreateDebt: React.FC = () => {
  const [users, setUsers] = useState<UserProps[]>([]);
  const [userId, setUserId] = useState<string>();
  const [value, setValue] = useState<string>();
  const [description, setDescription] = useState<string>();
  const history = useHistory();

  const { addToast } = useToast();
  const handleCreateDebt = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      try {
        const data = {
          user_id: Number(userId),
          value: Number(value),
          description,
        };

        const schema = yup.object().shape({
          user_id: yup.number().required('É necessario informar o usuário'),
          value: yup
            .number()
            .required(`É necessario informar o valor da dívida`),
          description: yup.string().required(`É necessario uma descrição`),
        });

        await schema.validate(data, { abortEarly: false });

        apiClient.post('/debts', data);

        addToast({
          type: 'success',
          title: 'Dívida cadastrada com sucesso.',
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
    [userId, value, description, addToast, history],
  );
  useEffect(() => {
    apiClient.get('/users').then(response => {
      setUsers(response.data);
    });
  }, []);

  return (
    <Container>
      <Header />
      <Content>
        <form onSubmit={handleCreateDebt}>
          <strong>Adicionar nova divida</strong>
          <label htmlFor="user">
            <select
              name="user"
              id="user"
              onChange={e => setUserId(e.target.value)}
              required
            >
              {users.map(user => (
                <option value={user.id}>{user.name}</option>
              ))}
            </select>
          </label>

          <Input
            type="float"
            name="value"
            placeholder="Valor da dívida"
            required
            onChange={e => setValue(e.target.value)}
          />

          <TextArea
            name="description"
            placeholder="Descrição"
            required
            onChange={e => setDescription(e.target.value)}
          />

          <div id="submitFormButton">
            <button type="submit">Adicionar</button>
          </div>

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

export default CreateDebt;
