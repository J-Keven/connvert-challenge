import React from 'react';
import { useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import Header from '../../components/Header';
import Input from '../../components/Input';
import TextArea from '../../components/TextArea';
import background from '../../assets/background.png';
import { Container, Content } from './styles';

const CreateDebt: React.FC = () => {
  const history = useHistory();
  return (
    <Container>
      <Header />
      <Content>
        <form>
          <strong>Adicionar nova divida</strong>
          <label htmlFor="user">
            <select name="user" id="user" required>
              <option value="0">Selecione um Usuário</option>
            </select>
          </label>

          <Input type="text" name="value" placeholder="Valor da dívida" />

          <TextArea name="description" placeholder="Descrição" />

          <div id="submitFormButton">
            <button type="button">Adicionar</button>
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
