import React from 'react';

interface Props {
    label: string;
    value: string;
    selectedValue: string;
    onChange: (value: string) => void;
    onTextChange: (newText: string) => void;
}

const Radio: React.FC<Props> = ({ label, value, selectedValue, onChange, onTextChange }) => {
    const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onTextChange(e.target.value);
    };

    return (
        <label className="block p-2 text-sm text-white border-none rounded-lg bg-black/50 w-full my-4 flex">
            <input
                type="radio"
                name="answer"
                value={value}
                className="custom-radio mx-2"
                checked={selectedValue === value}
                onChange={() => onChange(value)}
            />
            <input
                type="text"
                placeholder={label}
                value={value}
                onChange={handleTextChange}
                className="bg-transparent focus:outline-none"
            />
        </label>
    );
};

export default Radio;
