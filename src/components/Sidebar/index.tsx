import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiHome, FiUser, FiUsers, FiWind, FiAlertCircle } from 'react-icons/fi';

import { Container, Profile, Navigation } from './styles';

const Sidebar: React.FC = () => {
  return (
    <Container>
      <Profile>
        <img
          src="https://avatars0.githubusercontent.com/u/69374299?s=460&u=a589c3d74dfd2a3e800ecb9bf7e0e96713690926&v=4"
          alt="Foto de perfil"
        />

        <strong>Olá, Eduardo</strong>
        <p>Pronto para vender hoje?</p>
        <button type="button">Master</button>
      </Profile>
      <Navigation>
        <ul>
          <li>
            <FiHome size={30} />
            <NavLink to="/home" activeClassName="selected">
              Home
            </NavLink>
          </li>

          <li>
            <FiWind size={30} />{' '}
            <NavLink to="/" activeClassName="selected">
              Ranking
            </NavLink>
          </li>

          <li>
            <FiWind size={30} />{' '}
            <NavLink activeClassName="selected" to="/">
              Administrativo
            </NavLink>
          </li>

          <li>
            <FiWind size={30} />{' '}
            <NavLink activeClassName="selected" to="/">
              Treinamento
            </NavLink>
          </li>

          <li>
            <FiUser size={30} />{' '}
            <NavLink activeClassName="selected" to="/">
              Minha Conta
            </NavLink>
          </li>
          <li>
            <FiUsers size={30} />{' '}
            <NavLink activeClassName="selected" to="/">
              Time de vendas
            </NavLink>
          </li>

          <li>
            <FiWind size={30} />{' '}
            <NavLink activeClassName="selected" to="/">
              Minhas vendas
            </NavLink>
          </li>

          <li>
            <FiWind size={30} />{' '}
            <NavLink activeClassName="selected" to="/">
              Minhas vendas
            </NavLink>
          </li>

          <li>
            <FiAlertCircle size={30} />{' '}
            <NavLink activeClassName="selected" to="/">
              Dúvidas administrativas
            </NavLink>
          </li>

          <li>
            <FiAlertCircle size={30} />{' '}
            <NavLink activeClassName="selected" to="/">
              Dúvidas Técninas de Vendas
            </NavLink>
          </li>
        </ul>
      </Navigation>
    </Container>
  );
};

export default Sidebar;
