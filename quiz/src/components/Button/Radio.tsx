import React from 'react';

interface Props {
    label: string;
    value: string;
    onChange: (value: string) => void;
}

const Radio: React.FC<Props> = ({ label, value, onChange }) => (
    <label className='block p-2 text-sm text-white border-none rounded-lg bg-black/50 w-full my-4 flex'>
        <input
            type="radio"
            name="answer"
            value={value}
            className='custom-radio mx-2'
            onChange={(e) => onChange(e.target.value)}
        />
        <input
            type="text"
            placeholder={label}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className='bg-transparent focus:outline-none'
        />
    </label>
);

export default Radio;
