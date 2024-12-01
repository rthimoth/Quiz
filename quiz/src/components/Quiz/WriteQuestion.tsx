import React, { useState, useEffect } from 'react';
import SubmitButton from '../Button/SubmitButton';

interface Props {
    question: string;
    correctAnswer: string;
    onAnswerSubmit: (isCorrect: boolean) => void;
}

const WriteQuestion: React.FC<Props> = ({ question, correctAnswer, onAnswerSubmit }) => {
    const [userAnswer, setUserAnswer] = useState<string>('');
    const [isAnswered, setIsAnswered] = useState<boolean>(false);

    useEffect(() => {
        setUserAnswer('');
        setIsAnswered(false);
    }, [question]);

    const handleSubmitAnswer = () => {
        setIsAnswered(true);
        const isCorrect = userAnswer.trim().toLowerCase() === correctAnswer.trim().toLowerCase();
        onAnswerSubmit(isCorrect);
    };

    return (
        <div className='flex flex-col justify-center items-center'>
            <p className='text-3xl mb-4'>{question}</p>
            <input
                type="text"
                className='bg-purple-500 focus:bg-purple-400 border-purple-700 focus:border-purple-500 font-bold py-2 px-4 border-b-4 rounded my-20'
                placeholder="Your answer"
                value={userAnswer}
                onChange={(e) => !isAnswered && setUserAnswer(e.target.value)}
            />
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

export default WriteQuestion;
