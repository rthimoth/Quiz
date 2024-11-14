import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Question from '../components/Quiz/Question';

const Game: React.FC = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [questions, setQuestions] = useState([
        { question: "Quelle est la capitale de la France ?", options: ["Paris", "Londres", "Berlin"] },
        { question: "Quel est le plus grand océan ?", options: ["Atlantique", "Pacifique", "Arctique"] },
    ]);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        // Vérifie qu'il y a un `lobbyId` dans l'URL pour sécuriser l'accès
        const queryParams = new URLSearchParams(location.search);
        const lobbyId = queryParams.get('lobbyId');

        if (!lobbyId) {
            navigate('/'); // Redirige vers l'accueil si aucun `lobbyId` n'est trouvé
        }
    }, [location, navigate]);

    const handleAnswer = (answer: string) => {
        console.log(`Réponse sélectionnée : ${answer}`);
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        } else {
            alert("Le quiz est terminé !");
            navigate('/'); // Redirige vers l'accueil une fois le quiz terminé
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-2xl font-bold mb-4">Quiz en cours</h1>
            <Question
                question={questions[currentQuestionIndex].question}
                options={questions[currentQuestionIndex].options}
                onAnswer={handleAnswer}
            />
        </div>
    );
};

export default Game;