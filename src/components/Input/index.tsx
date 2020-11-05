import React, { InputHTMLAttributes, useCallback, useState } from 'react';

import { IconBaseProps } from 'react-icons';
import { FiEye, FiEyeOff } from 'react-icons/fi';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  className?: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({
  name,
  className,
  type,
  icon: Icon,
  ...rest
}) => {
  const [isFocus, setIsFocus] = useState(false);
  const [isEye, setIsEye] = useState(true);

  const handleSetFocus = useCallback(() => {
    setIsFocus(true);
  }, []);

  const handleSetBlur = useCallback(() => {
    setIsFocus(false);
  }, []);

  return (
    <Container isFocus={isFocus} isEye={isEye} className={className}>
      {Icon && <Icon size={18} />}
      <input
        type={type === 'password' && isEye ? type : ''}
        onFocus={handleSetFocus}
        onBlur={handleSetBlur}
        {...rest}
      />
      {(type === 'password' && isEye && (
        <FiEye onClick={() => setIsEye(false)} size={20} />
      )) ||
        (type === 'password' && !isEye && (
          <FiEyeOff onClick={() => setIsEye(true)} size={20} />
        ))}
    </Container>
  );
};

export default Input;
