// Game.tsx
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Question from '../components/Quiz/Question';
import ScoreBoard from '../components/ScoreBoard';
import Button from '../components/Button';

const Game: React.FC = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [showScoreboard, setShowScoreboard] = useState(false);
    const [questions, setQuestions] = useState([
        {
            question: "Quelle est la capitale de la France ?",
            options: ["Paris", "Londres", "Berlin"],
            correctAnswer: "Paris",
        },
        {
            question: "Quel est le plus grand océan ?",
            options: ["Atlantique", "Pacifique", "Arctique"],
            correctAnswer: "Pacifique",
        },
    ]);

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const lobbyId = queryParams.get('lobbyId');

        if (!lobbyId) {
            navigate('/');
        }
    }, [location, navigate]);

    const handleAnswer = (isCorrect: boolean) => {
        if (isCorrect) {
            setScore((prevScore) => prevScore + 1);
        }

        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        } else {
            setShowScoreboard(true);
        }
    };

    const handleTimeout = () => {
        // Le joueur n'a pas répondu à temps
        // Passe à la question suivante sans augmenter le score
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        } else {
            setShowScoreboard(true);
        }
    };

    const resetGame = () => {
        setScore(0);
        setCurrentQuestionIndex(0);
        setShowScoreboard(false);
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            {!showScoreboard ? (
                <>
                    <h1 className="text-2xl font-bold mb-4">Quiz en cours</h1>
                    <ScoreBoard score={score} />
                    <Question
                        question={questions[currentQuestionIndex].question}
                        options={questions[currentQuestionIndex].options}
                        correctAnswer={questions[currentQuestionIndex].correctAnswer}
                        onAnswer={handleAnswer}
                        onTimeout={handleTimeout} // Ajouté
                    />
                </>
            ) : (
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Le quiz est terminé !</h2>
                    <ScoreBoard score={score} totalQuestions={questions.length} />
                    <Button onClick={resetGame} className="mt-4">
                        Rejouer
                    </Button>
                </div>
            )}
        </div>
    );
};

export default Game;