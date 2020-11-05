import styled, { keyframes } from 'styled-components';

import Input from '../../components/Input';

const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  animation: ${appearFromRight} 0.6s;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 320px;
  text-align: center;
  margin: 0 auto;

  h2 {
    color: rgb(255, 255, 255);
    font-size: 25px;
    text-align: center;
    margin-bottom: 29px;
  }

  button {
    margin: 20px 0;
  }

  a {
    width: 100%;
    color: rgb(135, 134, 139);
    font-size: 13px;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const InputForgot = styled(Input)`
  background: rgb(23, 23, 26);
  border-color: rgb(40, 39, 44);
`;
