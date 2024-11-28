import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Quiz from '../components/QuizComponents/Quiz';

const Test: React.FC = () => {
    const [Type, setType] = useState<"QCM"|"Input">("QCM");
    const [Theme, setTheme] = useState<string>("Question");
    const [Question, setQuestion] = useState<string>("");
    const [Choices, setChoices] = useState<string[]|null>(null);
    const [Answer, setAnswer] = useState<string>("");
    const [AnswerUser, setAnswerUser] = useState<string>("");

    const fetchData = async () => {
        try {
            const rep = await axios.get("http://localhost:20904/question/random");
            console.log(rep.data.data[0]);
            setType(rep.data.data[0].type);
            setTheme(rep.data.data[0].theme);
            setQuestion(rep.data.data[0].question);
            setChoices(rep.data.data[0].choices);
            setAnswer(rep.data.data[0].answer);
            setAnswerUser("");
        } catch (error) {
            console.error("Erreur lors de la récupération de la question :", error);
        }
    };


    useEffect(() => {
        fetchData();
    }, []);

    const CheckClickHandle = (answer: string) => {
        setAnswerUser(answer);
    };

    return (
        <div className="p-4">
            <Quiz Theme={Theme} Type={Type} Question={Question} Choices={Choices} onCheck={CheckClickHandle} />
            {AnswerUser && (
                <>
                    <p
                        className={`mt-4 text-lg font-semibold ${
                            AnswerUser === Answer ? 'text-green-500' : 'text-red-500'
                        }`}
                    >
                        Votre réponse : {AnswerUser}
                    </p>
                    {AnswerUser !== Answer && (
                        <p className="mt-2 text-lg font-medium text-gray-700">
                            La bonne réponse : {Answer}
                        </p>
                    )}
                </>
            )}
            <button
                onClick={fetchData}
                className="mt-6 px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
            >
                Relancer une question
            </button>
        </div>
    );
};

export default Test;
