import React from 'react';

interface QcmButtonProps {
    Choice:string;
    onSelect:(choice: string) => void;
    isSelected:boolean;
}

const QcmButton: React.FC<QcmButtonProps> = ({ Choice, onSelect, isSelected }) => {
    
    const handleClick = () => {
        onSelect(Choice);
    }
    
    return <>
        <div 
            onClick={handleClick}
            className={`box-border border rounded-lg h-25 w-100 mb-5 text-center cursor-pointer ${
                isSelected ? 'bg-blue-500 text-white' : 'bg-gray-400'
            }`}>
            <p>{Choice}</p>
        </div>
    </>;
};

export default QcmButton;