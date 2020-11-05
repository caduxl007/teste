import React from 'react';
import { Link } from 'react-router-dom';
import { FiMail } from 'react-icons/fi';

import Button from '../../components/Button';

import { Container, Content, InputForgot } from './styles';

const Forgot: React.FC = () => {
  return (
    <Container>
      <Content>
        <h2>Recuperar senha</h2>
        <InputForgot
          name="email"
          type="email"
          placeholder="Digite seu e-mail"
          icon={FiMail}
        />
        <Button>Recuperar</Button>
        <Link to="/login">Voltar</Link>
      </Content>
    </Container>
  );
};

export default Forgot;
