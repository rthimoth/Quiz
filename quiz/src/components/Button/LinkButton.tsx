import React from 'react';
import { Link } from 'react-router-dom';
import Arrow from '../../assets/images/arrow.svg';

interface Props {
    to: string,
    label: string,
    className: string
}

const LinkButton: React.FC<Props> = ({ to, label, className }) => (
  <Link to={to} className={className}>
    <img src={Arrow} alt="arrow" className='rotate-90 mr-2 hover:' />
    {label}
  </Link>
);

export default LinkButton;