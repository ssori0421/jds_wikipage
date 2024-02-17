import React, { ButtonHTMLAttributes } from 'react';
import styels from './button.module.scss';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: JSX.Element;
  children: string;
}

const Button = (props: IButtonProps) => {
  const { icon, children, ...restProps } = props;

  return (
    <button {...restProps} className={styels.ButtonContainer}>
      {icon && icon}
      <span>{children}</span>
    </button>
  );
};

export default Button;
