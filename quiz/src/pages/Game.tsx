import React from 'react';
import BackButton from '../components/Button/LinkButton';
import Button from '../components/Button/Button';
import Timer from '../components/Timer';


const Game: React.FC = () => {
    const [Question] = React.useState('What is the capital of France ?');
    const [QuestionMaxNumber] = React.useState('10');
    const [QuestionNumber] = React.useState('1');
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [Answer, setAnswer] = React.useState('');
    const answers = ['Paris', 'London', 'Berlin', 'Madrid'];

    return (
        <div className="flex flex-col items-center h-screen w-screen bg-[#B066E0]">
            <div className='flex w-full p-4'>
                <BackButton
                    to="/"
                    label="LEAVE"
                    className='flex opacity-70 hover:text-black hover:duration-200 w-16'
                />
            </div>
            <div className='flex justify-end w-full p-16'>
                <Timer 
                    timer={30}
                />
            </div>
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
            <div className='flex justify-end w-full p-8'>
                <p><span className='text-[#3CEB88]'>{QuestionNumber}</span>/{QuestionMaxNumber}</p>
            </div>
        </div>
    );
};

export default Game;
