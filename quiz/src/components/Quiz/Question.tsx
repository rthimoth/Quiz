// Question.tsx
import React, { useState } from 'react';
import Timer from '../Timer';

interface QuestionProps {
    question: string;
    options: string[];
    correctAnswer: string;
    onAnswer: (isCorrect: boolean) => void;
    onTimeout: () => void;
    timeLimit?: number; // Prop optionnelle pour définir le temps
}

const Question: React.FC<QuestionProps> = ({
    question,
    options,
    correctAnswer,
    onAnswer,
    onTimeout,
    timeLimit = 10, // Valeur par défaut de 10 secondes
}) => {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    const handleOptionClick = (option: string) => {
        if (!selectedOption) {
            setSelectedOption(option);
            const isCorrect = option === correctAnswer;
            onAnswer(isCorrect);
        }
    };

    const handleTimeout = () => {
        if (!selectedOption) {
            onTimeout();
        }
    };

    return (
        <div className="mt-4">
            <Timer initialTime={timeLimit} onExpire={handleTimeout} />
            <h2 className="text-xl font-semibold mb-2">{question}</h2>
            <ul>
                {options.map((option, index) => {
                    let buttonClass = 'bg-blue-500 hover:bg-blue-600 text-white';

                    if (selectedOption) {
                        if (option === correctAnswer) {
                            buttonClass = 'bg-green-500 text-white'; // Affiche en vert la bonne réponse
                        } else if (option === selectedOption) {
                            buttonClass = 'bg-red-500 text-white'; // Affiche en rouge la mauvaise réponse sélectionnée
                        } else {
                            buttonClass = 'bg-gray-500 text-white'; // Grise les autres options
                        }
                    }

                    return (
                        <li key={index} className="mb-2">
                            <button
                                onClick={() => handleOptionClick(option)}
                                className={`px-4 py-2 rounded w-full text-left ${buttonClass}`}
                                disabled={!!selectedOption}
                            >
                                {option}
                            </button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Question;
