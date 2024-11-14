import { useState } from 'react';
import QcmButton from './QcmButton';
import InputQuiz from './InputQuiz';

interface QuizProps {
    Type:"QCM"|"Input";
    Question:string;
    Choices:string[]|null;
    onCheck:(AnswerUser:string) => void;
}

const Quiz: React.FC<QuizProps> = ({ Type, Question, Choices, onCheck }) => {

    const [AnswerUser, setAnswerUser] = useState<string | null>(null)

    const handleChoice = (Choice: string) => {
        setAnswerUser(Choice)
    }

    const handleChangeInput = (Input: string) => {
        setAnswerUser(Input)
    }

    const handleClickCheck = () => {
        if (AnswerUser !== null) {
            onCheck(AnswerUser)
        }
    }


    return <div className='text-center'>
        <p className='text-4xl front-bold mb-4'>{Type}</p>
        <p className='text-2xl'>{Question}</p>
        {Type === "QCM" && (
            <div className='mt-10'>
                {Choices && Choices.map((Choice) => (
                    <QcmButton 
                        key={Choice}
                        Choice={Choice}
                        onSelect={handleChoice}
                        isSelected={Choice === AnswerUser}/>
                ))}
            </div>
        )}  
        {Type === "Input" && (
            <div className='mt-10'>
                <InputQuiz handleInput={handleChangeInput}/>
            </div>
        )}
        <div className='box-border border bg-green-400 rounded-lg cursor-pointer mt-10' onClick={handleClickCheck}>
            <p>CHECK</p>
        </div>
    </div>;
};

export default Quiz;

