import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMail, FiLock, FiGithub } from 'react-icons/fi';

import Logo from '../../components/Logo';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, ContentLogin } from './styles';

const Login: React.FC = () => {
  const [isValueButton, setIsValueButton] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (email && password) {
      setIsValueButton(true);
    } else {
      setIsValueButton(false);
    }
  }, [email, password]);

  return (
    <Container>
      <div>
        <div>
          <Logo />
        </div>
        <h2>Faça seu login na plataforma</h2>
      </div>
      <ContentLogin isValueButton={isValueButton}>
        <form>
          <Input
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            placeholder="E-mail"
            icon={FiMail}
          />
          <Input
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            placeholder="Senha"
            icon={FiLock}
            type="password"
          />

          <Link to="/forgot">Esqueci minha senha</Link>

          <Button type="submit">entrar</Button>
        </form>

        <p>
          Não tem uma conta? <Link to="/register">Registre-se</Link>
        </p>

        <div />
        <div>
          <p>Ou entre com</p>
          <Link to="git">
            <FiGithub size={25} /> GITHUB
          </Link>
        </div>
      </ContentLogin>
    </Container>
  );
};

export default Login;
