import React, { useEffect, useState } from 'react';

interface InputQuizProps {
    handleInput:(rep:string) => void;
};

const InputQuiz: React.FC<InputQuizProps> = ({ handleInput }) => {
    
    const [InputValue, setInputValue] = useState<string>("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    useEffect(() => {
        handleInput(InputValue)
    }, [InputValue])
    

    return <>
        <div className="flex flex-col items-center">
            <label htmlFor="input" className="mb-2 text-lg font-semibold text-gray-700">
                Saisissez votre reponse :
            </label>
            <input
                type="text"
                id="input"
                value={InputValue}
                onChange={handleChange}
                className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Entrez votre reponse ici..."
            />
        </div>
    </>;
};

export default InputQuiz;