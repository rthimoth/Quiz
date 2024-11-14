// Lobby.tsx
import React, { useEffect, useState, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Button from '../Button';
import Question from '../Quiz/Question';
import ScoreBoard from '../ScoreBoard';

const Lobby: React.FC = () => {
    const [username, setUsername] = useState('');
    const [players, setPlayers] = useState<string[]>([]);
    const [lobbyId, setLobbyId] = useState('');
    const [inviteLink, setInviteLink] = useState('');
    const [isGameStarted, setIsGameStarted] = useState(false);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [showScoreboard, setShowScoreboard] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const ws = useRef<WebSocket | null>(null);

    const testQuestions = [
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
    ];

    useEffect(() => {
        ws.current = new WebSocket('ws://localhost:8080');

        ws.current.onopen = () => {
            const queryParams = new URLSearchParams(location.search);
            const lobbyIdFromUrl = queryParams.get('lobbyId');
            const storedUsername = localStorage.getItem('username');

            if (!storedUsername) {
                navigate('/join' + location.search);
                return;
            }
            setUsername(storedUsername || '');

            if (!lobbyIdFromUrl) {
                ws.current?.send(JSON.stringify({ type: 'create', username: storedUsername }));
            } else {
                setLobbyId(lobbyIdFromUrl);
                ws.current?.send(JSON.stringify({ type: 'join', lobbyId: lobbyIdFromUrl, username: storedUsername }));
            }
        };

        ws.current.onmessage = (event) => {
            const data = JSON.parse(event.data);

            if (data.type === 'lobby_created') {
                setLobbyId(data.lobbyId);
                setInviteLink(`${window.location.origin}/lobby?lobbyId=${data.lobbyId}`);
            } else if (data.type === 'joined_lobby') {
                setPlayers(data.players);
            } else if (data.type === 'start_game') {
                setIsGameStarted(true);
            } else if (data.type === 'error') {
                alert(data.message);
                navigate('/');
            }
        };

        return () => {
            ws.current?.close();
        };
    }, [location.search, navigate]);

    const startGame = () => {
        ws.current?.send(JSON.stringify({ type: 'start_game', lobbyId }));
    };

    const handleAnswer = (isCorrect: boolean) => {
        console.log('Réponse donnée, est correcte :', isCorrect);
        if (isCorrect) {
            setScore((prevScore) => prevScore + 1);
        }

        if (currentQuestionIndex < testQuestions.length - 1) {
            setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        } else {
            setIsGameStarted(false);
            setShowScoreboard(true);
        }
    };

    const handleTimeout = () => {
        console.log('Temps écoulé pour la question', currentQuestionIndex);
        // Passe à la question suivante sans augmenter le score
        if (currentQuestionIndex < testQuestions.length - 1) {
            setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        } else {
            setIsGameStarted(false);
            setShowScoreboard(true);
        }
    };

    const handleCopyLink = () => {
        navigator.clipboard.writeText(inviteLink);
        alert('Lien d’invitation copié dans le presse-papier !');
    };

    const resetGame = () => {
        setScore(0);
        setCurrentQuestionIndex(0);
        setShowScoreboard(false);
        setIsGameStarted(true);
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-2xl font-bold mb-4">Bienvenue dans le lobby, {username} !</h1>

            {lobbyId && (
                <>
                    <p className="mb-4">Lien d'invitation :</p>
                    <div className="flex items-center">
                        <input
                            type="text"
                            value={inviteLink}
                            readOnly
                            className="border border-gray-300 rounded px-2 py-1 mr-2 w-64"
                        />
                        <Button onClick={handleCopyLink}>Copier le lien</Button>
                    </div>
                </>
            )}

            <h2 className="text-xl font-semibold mt-6">Joueurs dans le lobby :</h2>
            <ul className="list-disc mt-2">
                {players.map((player, index) => (
                    <li key={index}>{player}</li>
                ))}
            </ul>

            {!isGameStarted && !showScoreboard && (
                <Button onClick={startGame} className="mt-4 bg-green-500 hover:bg-green-600">
                    Lancer la Partie
                </Button>
            )}

            {isGameStarted && !showScoreboard && (
                <>
                    <ScoreBoard score={score} />
                    <Question
                        key={currentQuestionIndex}
                        question={testQuestions[currentQuestionIndex].question}
                        options={testQuestions[currentQuestionIndex].options}
                        correctAnswer={testQuestions[currentQuestionIndex].correctAnswer}
                        onAnswer={handleAnswer}
                        onTimeout={handleTimeout}
                    />
                </>
            )}

            {showScoreboard && (
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Le quiz est terminé !</h2>
                    <ScoreBoard score={score} totalQuestions={testQuestions.length} />
                    <Button onClick={resetGame} className="mt-4">
                        Rejouer
                    </Button>
                </div>
            )}
        </div>
    );
};

export default Lobby;
