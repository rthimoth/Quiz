import React from 'react';

interface Props {
    label: string,
    color: string
}

const Button: React.FC<Props> = ({ label, color }) => (
  <button className={color + " text-white font-bold py-2 px-4 border-b-4 rounded"}>
    {label}
  </button>
);

export default Button;