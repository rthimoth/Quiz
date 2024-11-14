import { useState } from 'react';
import QcmButton from './qcmButton';
import InputQuiz from './InputQuiz';

interface QuizProps {
    Type:string;
    Question:string;
    Choices:string[];
    onCheck:(ResponseUser:string) => void;
}

const Quiz: React.FC<QuizProps> = ({ Type, Question, Choices, onCheck }) => {

    const [ResponseUser, setResponseUser] = useState<string | null>(null)

    const handleChoice = (choice: string) => {
        setResponseUser(choice)
    }

    const handleChangeInput = (input: string) => {
        setResponseUser(input)
    }

    const handleClickCheck = () => {
        if (ResponseUser !== null) {
            onCheck(ResponseUser)
        }
    }


    return <div className='text-center'>
        <p className='text-4xl front-bold mb-4'>{Type}</p>
        <p className='text-2xl'>{Question}</p>
        {Type === "QCM" && (
            <div className='mt-5'>
                { Choices.map((choice) => (
                    <QcmButton 
                        key={choice}
                        Choice={choice}
                        onSelect={handleChoice}
                        isSelected={choice === ResponseUser}/>
                ))}
            </div>
        )}
        {Type === "Input" && (
            <div className='mb-5'>
                <InputQuiz handleInput={handleChangeInput}/>
            </div>
        )}
        <div className='box-border border bg-green-400 rounded-lg cursor-pointer' onClick={handleClickCheck}>
            <p>CHECK</p>
        </div>
    </div>;
};

export default Quiz;

