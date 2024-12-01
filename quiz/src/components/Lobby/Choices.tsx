import React from 'react';
import Radio from '../Button/Radio';

interface Props {
    answers: string[];
    updateAnswers: (newAnswers: string[]) => void;
}

const Choices: React.FC<Props> = ({ answers = ['', '', '', ''], updateAnswers }) => {
    const handleAnswerChange = (index: number, value: string) => {
        const updatedAnswers = [...answers];
        updatedAnswers[index] = value;
        updateAnswers(updatedAnswers);
    };

    return (
        <>
            {answers.map((answer, index) => (
                <Radio
                    key={index}
                    label={`Answer ${index + 1}`}
                    value={answer}
                    onChange={(value) => handleAnswerChange(index, value)}
                />
            ))}
        </>
    );
};

export default Choices;
