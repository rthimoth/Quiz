import React from 'react';
import Button from '../Button/Button';

const MultipleChoice: React.FC = () => {
    const [Question] = React.useState('What is the capital of France ?');
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [Answer, setAnswer] = React.useState('');
    const answers = ['Paris', 'London', 'Berlin', 'Madrid'];

    return (
        <div className='flex flex-col justify-center items-center'>
            <p className='text-3xl mb-4'>{Question}</p>
            <div className='w-full'>
                {answers.map((answer, index) => (
                    <span
                        onClick={() => setAnswer(answer)}
                        className='w-full flex flex-col justify-center items-center'
                    >
                        <Button 
                            key={index}
                            label={answer}
                            color="bg-purple-500 hover:bg-purple-400 border-purple-700 hover:border-purple-500 w-4/5 my-2"
                        />
                    </span>
                ))}
            </div>
            <Button
                label="Check"
                color="bg-blue-500 hover:bg-blue-400 border-blue-700 hover:border-blue-500 mt-8"
            />
        </div>
    );
};

export default MultipleChoice;