import React from 'react';
import Button from '../Button/Button';

const WriteQuestion: React.FC = () => {
    const [Question] = React.useState('What is the capital of France ?');
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [Answer, setAnswer] = React.useState('');

    return (
        <div className='flex flex-col justify-center items-center'>
            <p className='text-3xl mb-4'>{Question}</p>
            <div className='w-full'>
                <span
                    className='w-full flex flex-col justify-center items-center'
                >
                    <input
                        type="text"
                        className='bg-purple-500 focus:bg-purple-400 border-purple-700 focus:border-purple-500 font-bold py-2 px-4 border-b-4 rounded my-20'
                        placeholder='Your answer'
                    />
                </span>
            </div>
            <Button
                label="Check"
                color="bg-blue-500 hover:bg-blue-400 border-blue-700 hover:border-blue-500 mt-8"
            />
        </div>
    );
};

export default WriteQuestion;