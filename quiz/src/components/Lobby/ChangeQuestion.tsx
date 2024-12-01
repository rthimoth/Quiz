import React from 'react';

interface ButtonProps {
    onClick: () => void;
    children: React.ReactNode;
    className?: string;
    disabled?: boolean;
}

const ChangeQuestion: React.FC<ButtonProps> = ({ onClick, children, className, disabled }) => {
    return (
        <button
            onClick={onClick}
            className={`px-4 py-2 rounded ${disabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'} text-white ${className}`}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default ChangeQuestion;
