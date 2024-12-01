import React from 'react';
import Choices from './Choices';
import ChangeQuestion from './ChangeQuestion';

interface Question {
    type: string;
    question: string;
    answer: string | string[];
    choices?: string[];
}

interface QuestionsProps {
    questions: Question[];
    currentIndex: number;
    updateCurrentQuestion: (key: keyof Question, value: string | string[]) => void;
    handleNext: () => void;
    handlePrevious: () => void;
}

const Questions: React.FC<QuestionsProps> = ({
    questions,
    currentIndex,
    updateCurrentQuestion,
    handleNext,
    handlePrevious,
}) => {
    const currentQuestion = questions[currentIndex];

    const handleChoiceChange = (selectedChoice: string) => {
        updateCurrentQuestion('answer', selectedChoice);
    };

    const handleChoiceTextChange = (index: number, newText: string) => {
        const updatedChoices = [...(currentQuestion.choices || [])];
        updatedChoices[index] = newText;
        updateCurrentQuestion('choices', updatedChoices);
    };

    return (
        <div>
            <div className="w-full flex justify-end">
                <p>
                    <span className="text-[#3CEB88]">{currentIndex + 1}</span>/{questions.length}
                </p>
            </div>
            <div>
                <div className="flex justify-evenly items-center w-full">
                    <label className="flex justify-center items-center w-72">
                        <input
                            type="radio"
                            name="type"
                            value="Input"
                            className="custom-radio mr-2"
                            checked={currentQuestion.type === 'Input'}
                            onChange={() => updateCurrentQuestion('type', 'Input')}
                        />
                        Write question
                    </label>
                    <label className="flex justify-center items-center w-72">
                        <input
                            type="radio"
                            name="type"
                            value="QCM"
                            className="custom-radio mr-2"
                            checked={currentQuestion.type === 'QCM'}
                            onChange={() => updateCurrentQuestion('type', 'QCM')}
                        />
                        Choices question
                    </label>
                </div>
                <div className="flex flex-col justify-center items-center px-16">
                    <input
                        type="text"
                        className="w-full bg-purple-500 focus:bg-purple-400 border-none font-bold py-2 px-4 border-b-4 rounded my-2"
                        placeholder="Type a question"
                        value={currentQuestion.question}
                        onChange={(e) => updateCurrentQuestion('question', e.target.value)}
                    />
                    <div className="w-full">
                        {currentQuestion.type === 'Input' ? (
                            <input
                                type="text"
                                className="w-full bg-black/50 focus:bg-black/40 border-none font-bold py-2 px-4 border-b-4 rounded my-16"
                                placeholder="Type answer"
                                value={currentQuestion.answer}
                                onChange={(e) => updateCurrentQuestion('answer', e.target.value)}
                            />
                        ) : (
                            <Choices
                                answers={currentQuestion.choices || []}
                                selectedAnswer={currentQuestion.answer as string}
                                onChoiceChange={handleChoiceChange}
                                onChoiceTextChange={handleChoiceTextChange}
                            />
                        )}
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly">
                <ChangeQuestion
                    className="bg-purple-500 hover:bg-purple-400 border-purple-700 hover:border-purple-500"
                    onClick={handlePrevious}
                    disabled={currentIndex === 0}
                >
                    PREVIOUS
                </ChangeQuestion>
                <ChangeQuestion
                    className="bg-purple-500 hover:bg-purple-400 border-purple-700 hover:border-purple-500"
                    onClick={handleNext}
                    disabled={currentIndex === questions.length - 1}
                >
                    NEXT
                </ChangeQuestion>
            </div>
        </div>
    );
};

export default Questions;
