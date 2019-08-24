import * as React from 'react';

interface Props {
  children: string;
  onClick?(): void;
}

export const Button = ({ onClick, children }: Props) => (
  <button onClick={onClick}>{children}</button>
);
