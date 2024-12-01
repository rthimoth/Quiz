import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import BackButton from '../components/Button/LinkButton';
import Timer from '../components/Timer';
import WriteQuestion from '../components/Quiz/WriteQuestion';
import MultipleChoice from '../components/Quiz/MultipleChoice';
import SubmitButton from '../components/Button/SubmitButton';

const Game: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { questions, chrono, numbers } = location.state || { questions: [], chrono: 30, numbers: 2 };

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [timer, setTimer] = useState(chrono);
    const [gameStarted, setGameStarted] = useState(false);
    const [answered, setAnswered] = useState(false);

    const handleAnswerSubmit = (isCorrect: boolean) => {
        setIsCorrect(isCorrect);
        setAnswered(true);
    };

    const startGame = () => {
        setGameStarted(true);
        setTimer(chrono);
        setAnswered(false);
    };

    const goToNextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setIsCorrect(null);
            setAnswered(false);
            setCurrentQuestionIndex((prev) => prev + 1);
        } else {
            navigate('/result', { state: { questions } });
        }
    };

    useEffect(() => {
        let countdown: number | undefined;
        if (gameStarted) {
            setTimer(chrono);

            countdown = window.setInterval(() => {
                setTimer((prev: number) => {
                    if (prev === 1) {
                        clearInterval(countdown);
                        goToNextQuestion();
                    }
                    return prev - 1;
                });
            }, 1000);
        }

        return () => clearInterval(countdown);
    }, [gameStarted, currentQuestionIndex]);

    const currentQuestion = questions[currentQuestionIndex];

    return (
        <div className="flex flex-col items-center h-screen w-screen bg-[#B066E0]">
            <div className="flex w-full p-4">
                <BackButton
                    to="/"
                    label="LEAVE"
                    className="flex opacity-70 hover:text-black hover:duration-200 w-16"
                />
            </div>
            <div className="flex justify-end w-full p-16">
                <Timer timer={timer} />
            </div>

            {gameStarted ? (
                currentQuestion.type === 'Input' ? (
                    <WriteQuestion
                        question={currentQuestion.question}
                        correctAnswer={currentQuestion.answer}
                        onAnswerSubmit={handleAnswerSubmit}
                    />
                ) : currentQuestion.type === 'QCM' ? (
                    <MultipleChoice
                        question={currentQuestion.question}
                        answers={currentQuestion.choices || []}
                        correctAnswer={currentQuestion.answer}
                        onAnswerSubmit={handleAnswerSubmit}
                    />
                ) : null
            ) : (
                <SubmitButton
                    label="Start Game"
                    color="bg-green-500 hover:bg-green-400 border-green-700 hover:border-green-500"
                    onClick={startGame}
                />
            )}

            {answered && isCorrect !== null && (
                <div className="mt-4">
                    <p>{isCorrect ? 'Correct!' : 'Incorrect!'}</p>
                </div>
            )}
            <div className="flex justify-end w-full p-16">
                <p>{currentQuestionIndex + 1}/{numbers}</p>
            </div>
        </div>
    );
};

export default Game;
