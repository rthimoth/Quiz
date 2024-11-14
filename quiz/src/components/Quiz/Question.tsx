import React from 'react';
import Button from '../Button';

interface QuestionProps {
    question: string;
    options: string[];
    onAnswer: (answer: string) => void;
}

const Question: React.FC<QuestionProps> = ({ question, options, onAnswer }) => {
    return (
        <div className="mt-4">
            <h2 className="text-xl font-semibold mb-2">{question}</h2>
            <ul>
                {options.map((option, index) => (
                    <li key={index} className="mb-2">
                        <Button onClick={() => onAnswer(option)} className="bg-blue-500 hover:bg-blue-600">
                            {option}
                        </Button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Question;
