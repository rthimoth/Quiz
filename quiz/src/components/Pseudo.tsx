import React from 'react';

interface InputProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    className?: string;
}

const Input: React.FC<InputProps> = ({ value, onChange, placeholder, className }) => {
    return (
        <input
            type="text"
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={`bg-white text-purple-500 border-none text-center rounded px-4 py-2 w-full focus:ring-0 focus:shadow-[0_0_5px_2px_rgba(255,255,255,1)] ${className}`}
        />
    );
};

export default Input;
