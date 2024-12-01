import React from 'react';
import Radio from '../Button/Radio';

interface ChoicesProps {
    answers: string[];
    selectedAnswer: string;
    onChoiceChange: (selectedChoice: string) => void;
    onChoiceTextChange: (index: number, newText: string) => void;
}

const Choices: React.FC<ChoicesProps> = ({ answers, selectedAnswer, onChoiceChange, onChoiceTextChange }) => {
    return (
        <div className="w-full">
            {answers.map((answer, index) => (
                <Radio
                    key={index}
                    label={answer}
                    value={answer}
                    selectedValue={selectedAnswer}
                    onChange={onChoiceChange}
                    onTextChange={(newText) => onChoiceTextChange(index, newText)}
                />
            ))}
        </div>
    );
};

export default Choices;
