import React from 'react';
import { useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import Header from '../../components/Header';
import Input from '../../components/Input';
import TextArea from '../../components/TextArea';

import background from '../../assets/updateDebts2.png';
import { Container, Content } from './styles';

const UpdateDebt: React.FC = () => {
  const history = useHistory();
  return (
    <Container>
      <Header />
      <Content>
        <form>
          <strong>Atulizar dados da dívida</strong>

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

export default UpdateDebt;
