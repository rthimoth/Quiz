// Question.tsx
import React, { useState, useEffect } from 'react';

interface QuestionProps {
    question: string;
    options: string[];
    correctAnswer: string;
    onAnswer: (isCorrect: boolean) => void;
    onTimeout: () => void;
}

const Question: React.FC<QuestionProps> = ({ question, options, correctAnswer, onAnswer, onTimeout }) => {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [timeLeft, setTimeLeft] = useState<number>(10);

    useEffect(() => {
        setSelectedOption(null);
        setTimeLeft(10);

        const timer = setInterval(() => {
            setTimeLeft((prevTime) => {
                if (prevTime <= 1) {
                    clearInterval(timer);
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, [question]);

    useEffect(() => {
        if (timeLeft === 0 && selectedOption === null) {
            onTimeout();
        }
    }, [timeLeft, selectedOption, onTimeout]);

    const handleOptionClick = (option: string) => {
        if (!selectedOption) {
            setSelectedOption(option);
            const isCorrect = option === correctAnswer;
            onAnswer(isCorrect);
        }
    };

    return (
        <div className="mt-4">
            <div className="text-center mb-2">
                <h2 className="text-lg font-semibold">Temps restant : {timeLeft} secondes</h2>
            </div>
            <h2 className="text-xl font-semibold mb-2">{question}</h2>
            <ul>
                {options.map((option, index) => {
                    let buttonClass = 'bg-blue-500 hover:bg-blue-600 text-white';

                    if (selectedOption) {
                        if (option === correctAnswer) {
                            buttonClass = 'bg-green-500 text-white'; // Affiche en vert la bonne réponse
                        } else if (option === selectedOption) {
                            buttonClass = 'bg-red-500 text-white';   // Affiche en rouge la mauvaise réponse sélectionnée
                        } else {
                            buttonClass = 'bg-gray-500 text-white';  // Grise les autres options
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
