import React from 'react';
import BackButton from '../components/Button/LinkButton';
import Timer from '../components/Timer';
// import MultipleChoice from '../components/Quiz/MultipleChoice';
import WriteQuestion from '../components/Quiz/WriteQuestion';

const Game: React.FC = () => {
    const [QuestionMaxNumber] = React.useState('10');
    const [QuestionNumber] = React.useState('1');

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
            <WriteQuestion />
            <div className='flex justify-end w-full p-8'>
                <p><span className='text-[#3CEB88]'>{QuestionNumber}</span>/{QuestionMaxNumber}</p>
            </div>
        </div>
    );
};

export default Game;
