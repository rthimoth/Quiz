import React, { useState } from 'react';
import axios from 'axios';
import Logo from '../assets/images/logo.svg';
import LinkButton from '../components/Button/LinkButton';
import PlayerList from '../components/Lobby/PlayerList';
import Settings from '../components/Lobby/Settings';
import Questions from '../components/Lobby/Questions';
import { useNavigate } from 'react-router-dom';

interface Question {
    type: string;
    question: string;
    answer: string | string[];
    choices?: string[];
}

const Lobby: React.FC = () => {
    const [tabs, setTabs] = useState('Settings');
    const [questions, setQuestions] = useState<Question[]>([{
        type: 'Input',
        question: '',
        answer: '',
        choices: ['', '', '', ''],
    }]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [chrono, setChrono] = useState(30);
    const [gamemode, setGamemode] = useState('private');
    const [numbers, setNumbers] = useState(1);
    const navigate = useNavigate();

    const adjustQuestionsArray = (newNumbers: number) => {
        if (newNumbers > questions.length) {
            setQuestions((prev) => [
                ...prev,
                ...Array(newNumbers - prev.length).fill({
                    type: 'Input',
                    question: '',
                    answer: '',
                    choices: ['', '', '', ''],
                }),
            ]);
        } else if (newNumbers < questions.length) {
            setQuestions((prev) => prev.slice(0, newNumbers));
            setCurrentIndex((prevIndex) => Math.min(prevIndex, newNumbers - 1));
        }
    };

    const handleNumbersChange = (newNumbers: number) => {
        setNumbers(newNumbers);
        adjustQuestionsArray(newNumbers);
    };

    const updateCurrentQuestion = (key: keyof Question, value: string | string[]) => {
        const updatedQuestions = [...questions];
        const updatedQuestion = { ...updatedQuestions[currentIndex], [key]: value };

        if (key === 'type') {
            if (value === 'Choices') {
                updatedQuestion.answer = '';
                updatedQuestion.choices = updatedQuestion.choices || ['', '', '', ''];
            } else if (value === 'Input') {
                updatedQuestion.answer = '';
                delete updatedQuestion.choices;
            }
        }

        updatedQuestions[currentIndex] = updatedQuestion;
        setQuestions(updatedQuestions);
    };

    const handleStartGame = () => {
        if (gamemode === 'public') {
            axios.get(`http://localhost:20904/question/random/${numbers}`)
                .then((response) => {
                    const apiQuestions = response.data.data;
    
                    const transformedQuestions = apiQuestions.map((apiQuestion: { type: string; question: string; answer: string; choices?: string[]; theme: string }) => ({
                        type: apiQuestion.type, 
                        question: apiQuestion.question + " ( " + apiQuestion.theme + " )",
                        answer: apiQuestion.answer,
                        choices: apiQuestion.choices,
                    }));
    
                    console.log('Transformed API questions:', transformedQuestions);
    
                    navigate('/game', { state: { questions: transformedQuestions, chrono, numbers } });
                })
                .catch((error) => {
                    console.error('Error fetching questions:', error);
                    alert('Failed to fetch questions. Please try again.');
                });
            return;
        } else {
            if (questions.some((question) => question.question === '')) {
                alert('Please fill all questions');
                return;
            }
            if (questions.some((question) => question.type === 'Choices' && (question.choices?.some((choice) => choice === '')))) {
                alert('Please fill all answers');
                return;
            }
            console.log('Questions:', questions);
            navigate('/game', { state: { questions, chrono, numbers } });
        }
    };
    

    const handleNext = () => {
        if (currentIndex < numbers - 1) {
            setCurrentIndex((prev) => prev + 1);
        }
    };

    const handlePrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prev) => prev - 1);
        }
    };

    return (
        <div className='bg-image w-screen h-screen grid grid-cols-3 gap-4'>
            <div></div>
            <div className='col-span-2 flex flex-col justify-center items-center'>
                <div>
                    <img src={Logo} alt="logo" height={150} width={150} />
                </div>
                <div className='flex flex-col'>
                    <LinkButton
                        to="/"
                        label="BACK"
                        className='flex opacity-70 hover:text-black hover:duration-200 w-16'
                    />
                    <div className='flex'>
                        <PlayerList />
                        <div className='w-full'>
                            <div className='flex justify-around gap-8'>
                                <div
                                    className={`w-full text-center rounded-t-lg cursor-pointer duration-200 ${tabs === 'Settings' ? 'bg-black/20 hover:bg-black/10' : 'bg-black/10 hover:bg-black/20'}`}
                                    onClick={() => setTabs('Settings')}
                                >
                                    <p>SETTINGS</p>
                                </div>
                                {gamemode === 'private' && (
                                    <div
                                        className={`w-full text-center rounded-t-lg cursor-pointer duration-200 ${tabs === 'Questions' ? 'bg-black/20 hover:bg-black/10' : 'bg-black/10 hover:bg-black/20'}`}
                                        onClick={() => setTabs('Questions')}
                                    >
                                        <p>QUESTIONS</p>
                                    </div>
                                )}
                            </div>
                            <div className='bg-black/20 rounded-b-xl flex flex-col items-end p-2'>
                                {tabs === 'Settings' ? (
                                    <Settings
                                        chrono={chrono}
                                        setChrono={setChrono}
                                        gamemode={gamemode}
                                        setGamemode={setGamemode}
                                        numbers={numbers}
                                        setNumbers={handleNumbersChange}
                                        onStartGame={handleStartGame}
                                    />
                                ) : tabs === 'Questions' && questions[currentIndex] ? (
                                    <Questions
                                        questions={questions}
                                        currentIndex={currentIndex}
                                        updateCurrentQuestion={updateCurrentQuestion}
                                        handleNext={handleNext}
                                        handlePrevious={handlePrevious}
                                    />
                                ) : null}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Lobby;
