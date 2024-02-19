import React, { ButtonHTMLAttributes } from 'react';
import styels from './button.module.scss';
import classNames from 'classnames';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: JSX.Element;
  children: React.ReactNode;
}

const Button = (props: IButtonProps) => {
  const { icon, children, className, ...restProps } = props;

  return (
    <button {...restProps} className={classNames(className, styels.ButtonContainer)}>
      {icon && icon}
      <span>{children}</span>
    </button>
  );
};

export default Button;
