import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Button';

const Lobby: React.FC = () => {
    const [username, setUsername] = useState('');
    const [inviteLink, setInviteLink] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        // Récupère le pseudo depuis le localStorage
        const storedUsername = localStorage.getItem('username');
        if (storedUsername) {
            setUsername(storedUsername);
            // Génère un lien d'invitation basé sur l'URL actuelle
            setInviteLink(`${window.location.origin}/lobby?invite=${storedUsername}`);
        } else {
            // Si aucun pseudo n'est défini, redirige vers la page d'accueil
            navigate('/');
        }
    }, [navigate]);

    // Fonction pour copier le lien d'invitation
    const handleCopyLink = () => {
        navigator.clipboard.writeText(inviteLink);
        alert('Lien d’invitation copié dans le presse-papier !');
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-2xl font-bold mb-4">Bienvenue dans le lobby, {username} !</h1>
            <p className="mb-4">Partagez ce lien pour inviter d'autres joueurs :</p>
            <div className="flex items-center">
                <input
                    type="text"
                    value={inviteLink}
                    readOnly
                    className="border border-gray-300 rounded px-2 py-1 mr-2 w-64"
                />
                <Button onClick={handleCopyLink}>Copier le lien</Button>
            </div>
        </div>
    );
};

export default Lobby;
