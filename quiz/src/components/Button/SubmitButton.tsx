import React from 'react';

interface Props {
    label: string;
    color: string;
    onClick: () => void;
}

const SubmitButton: React.FC<Props> = ({ label, color, onClick }) => (
  <button className={color + " font-bold py-2 px-4 border-b-4 rounded"} onClick={onClick}>
    {label}
  </button>
);

export default SubmitButton;
