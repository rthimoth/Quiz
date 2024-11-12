import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Button from '../Button';

const Lobby: React.FC = () => {
    const [username, setUsername] = useState('');
    const [players, setPlayers] = useState<string[]>([]);
    const [lobbyId, setLobbyId] = useState('');
    const [inviteLink, setInviteLink] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const ws = new WebSocket('ws://localhost:8080'); // Connexion au serveur WebSocket

        ws.onopen = () => {
            const queryParams = new URLSearchParams(location.search);
            const lobbyIdFromUrl = queryParams.get('lobbyId');
            const storedUsername = localStorage.getItem('username');

            if (!storedUsername) {
                navigate('/join' + location.search);
                return;
            }
            setUsername(storedUsername || '');

            if (!lobbyIdFromUrl) {
                // Si aucun `lobbyId` n'est fourni, on est l'hôte et on crée un nouveau lobby
                ws.send(JSON.stringify({ type: 'create', username: storedUsername }));
            } else {
                setLobbyId(lobbyIdFromUrl);
                ws.send(JSON.stringify({ type: 'join', lobbyId: lobbyIdFromUrl, username: storedUsername }));
            }
        };

        ws.onmessage = (event) => {
            const data = JSON.parse(event.data);

            if (data.type === 'lobby_created') {
                setLobbyId(data.lobbyId);
                setInviteLink(`${window.location.origin}/lobby?lobbyId=${data.lobbyId}`);
            } else if (data.type === 'joined_lobby') {
                setPlayers(data.players);
            } else if (data.type === 'player_joined') {
                setPlayers((prev) => [...prev, data.username]);
            } else if (data.type === 'error') {
                alert(data.message);
                navigate('/');
            }
        };

        return () => {
            ws.close();
        };
    }, [location.search, navigate]);

    const handleCopyLink = () => {
        navigator.clipboard.writeText(inviteLink);
        alert('Lien d’invitation copié dans le presse-papier !');
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
        </div>
    );
};

export default Lobby;