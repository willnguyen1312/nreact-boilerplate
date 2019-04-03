import { ColorProperty } from 'csstype';
import * as React from 'react';

export interface IRoundedButtonProps {
  color: ColorProperty;
  style?: React.CSSProperties;
  onClick: () => void;
  children: React.ReactNode;
  /**
   * Value to display
   *
   * @default false
   **/
  primary?: boolean;
}

export function RoundedButton(props: IRoundedButtonProps) {
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
}
