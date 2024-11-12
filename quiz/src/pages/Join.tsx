import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Button from '../components/Button';
import Input from '../components/Input';

const Join: React.FC = () => {
    const [username, setUsername] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const handleJoin = () => {
        if (username.trim()) {
            // Enregistre le pseudo dans le localStorage
            localStorage.setItem('username', username);

            // Récupère le paramètre d'invitation depuis l'URL
            const queryParams = new URLSearchParams(location.search);
            const invite = queryParams.get('invite');

            // Redirige vers le lobby avec le pseudo et l'info de l'invitant
            navigate(`/lobby?invite=${invite}`);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-2xl font-bold mb-4">Rejoignez le lobby</h1>
            <Input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Entrez votre pseudo"
            />
            <Button onClick={handleJoin} className="mt-4">
                Rejoindre
            </Button>
        </div>
    );
};

export default Join;
