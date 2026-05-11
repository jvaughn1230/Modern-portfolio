import React from 'react';
import { IconType } from 'react-icons';

type Props = {
  to: string;
  type: 'primary' | 'secondary';
  text: string;
  icon?: IconType;
};

const Button = ({ to, type, text, icon: Icon }: Props) => {
  return (
    <a href={`${to}`} className={`${type}-button button`}>
      {text?.toUpperCase()}
      {Icon && <Icon className='color-primary ml-2' size={20} />}
    </a>
  );
};

export default Button;
