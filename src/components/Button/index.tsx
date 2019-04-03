import React, { FC } from 'react';

export interface ButtonProps {
  children: React.ReactNode;
  color: string;
}

const Button: FC<ButtonProps> = props => {
  return (
    <button
      style={{
        backgroundColor: props.color,
        border: 'none',
        color: 'white',
        padding: 20,
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: '16px',
        margin: '4px 2px',
        borderRadius: 5,
      }}
    >
      {props.children}
    </button>
  );
};

export default Button;
