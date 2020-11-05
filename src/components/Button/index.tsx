import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, className, ...rest }) => (
  <Container className={className} type="button" {...rest}>
    {children}
  </Container>
);

export default Button;
