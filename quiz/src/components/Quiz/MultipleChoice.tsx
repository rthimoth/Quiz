import React, { useState, useEffect } from 'react';
import SubmitButton from '../Button/SubmitButton';

interface Props {
    question: string;
    answers: string[];
    correctAnswer: string;
    onAnswerSubmit: (isCorrect: boolean) => void;
}

const MultipleChoice: React.FC<Props> = ({ question, answers, correctAnswer, onAnswerSubmit }) => {
    const [selectedAnswer, setSelectedAnswer] = useState<string>('');
    const [isAnswered, setIsAnswered] = useState<boolean>(false);

    useEffect(() => {
        setSelectedAnswer('');
        setIsAnswered(false);
    }, [question]);

    const handleSubmitAnswer = () => {
        setIsAnswered(true);
        const isCorrect = selectedAnswer === correctAnswer;
        onAnswerSubmit(isCorrect);
    };

    return (
        <div className='flex flex-col justify-center items-center'>
            <p className='text-3xl mb-4'>{question}</p>
            <div className='w-full'>
                {answers.map((answer, index) => (
                    <SubmitButton
                        key={index}
                        label={answer}
                        color="bg-purple-500 hover:bg-purple-400 border-purple-700 hover:border-purple-500 w-4/5 my-2"
                        onClick={() => !isAnswered && setSelectedAnswer(answer)}
                    />
                ))}
            </div>
            <div className="mt-8">
                {!isAnswered && (
                    <SubmitButton
                        label="Submit"
                        color="bg-blue-500 hover:bg-blue-400 border-blue-700 hover:border-blue-500 mt-8"
                        onClick={handleSubmitAnswer}
                    />
                )}
            </div>
        </div>
    );
};

export default MultipleChoice;
