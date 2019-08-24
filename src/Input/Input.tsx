import * as React from 'react';

interface Props {
  value: string;
  type: string;
}

export const Input = ({ value, type }: Props) => (
  <input value={value} type={type} />
);
