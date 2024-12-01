import React from 'react';
import Choices from './Choices';
import ChangeQuestion from './ChangeQuestion';

interface Question {
    type: string;
    questionText: string;
    answer: string | string[];
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

    return (
        <div>
            <div className='w-full flex justify-end'>
                <p>
                    <span className='text-[#3CEB88]'>{currentIndex + 1}</span>/{questions.length}
                </p>
            </div>
            <div>
                <div className='flex justify-evenly items-center w-full'>
                    <label className='flex justify-center items-center w-72'>
                        <input
                            type="radio"
                            name="type"
                            value="write"
                            className='custom-radio mr-2'
                            checked={currentQuestion.type === 'Write'}
                            onChange={() => updateCurrentQuestion('type', 'Write')}
                        />
                        Write question
                    </label>
                    <label className='flex justify-center items-center w-72'>
                        <input
                            type="radio"
                            name="type"
                            value="choices"
                            className='custom-radio mr-2'
                            checked={currentQuestion.type === 'Choices'}
                            onChange={() => updateCurrentQuestion('type', 'Choices')}
                        />
                        Choices question
                    </label>
                </div>
                <div className='flex flex-col justify-center items-center px-16'>
                    <input
                        type="text"
                        className='w-full bg-purple-500 focus:bg-purple-400 border-none font-bold py-2 px-4 border-b-4 rounded my-2'
                        placeholder='Type a question'
                        value={currentQuestion.questionText}
                        onChange={(e) => updateCurrentQuestion('questionText', e.target.value)}
                    />
                    <div className='w-full'>
                        {currentQuestion.type === 'Write' ? (
                            <input
                                type="text"
                                className='w-full bg-black/50 focus:bg-black/40 border-none font-bold py-2 px-4 border-b-4 rounded my-16'
                                placeholder='Type answer'
                                value={currentQuestion.answer as string}
                                onChange={(e) => updateCurrentQuestion('answer', e.target.value)}
                            />
                        ) : (
                            <Choices
                                answers={currentQuestion.answer as string[]}
                                updateAnswers={(newAnswers) => updateCurrentQuestion('answer', newAnswers)}
                            />
                        )}
                    </div>
                </div>
            </div>
            <div className='flex justify-evenly'>
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
