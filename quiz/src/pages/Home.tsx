import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Input from '../components/Input';

const Home: React.FC = () => {
    const [username, setUsername] = useState('');
    const [gameType, setGameType] = useState<'public' | 'private'>('public');
    const navigate = useNavigate();

    const handleStart = () => {
        if (username.trim()) {
            // Stocker le pseudo et le type de partie dans le localStorage
            localStorage.setItem('username', username);
            localStorage.setItem('gameType', gameType);

            // Rediriger vers le lobby
            navigate('/lobby');
        }
    };

    const handleTest = () => {
        navigate('/test');
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-3xl font-bold mb-4">Bienvenue au Quiz !</h1>

            <Input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Entrez votre pseudo"
            />

            <div className="mt-4">
                <label className="mr-2">Type de Partie :</label>
                <div className="flex gap-4">
                    <label className="flex items-center">
                        <input
                            type="radio"
                            value="public"
                            checked={gameType === 'public'}
                            onChange={() => setGameType('public')}
                            className="mr-2"
                        />
                        Publique
                    </label>
                    <label className="flex items-center">
                        <input
                            type="radio"
                            value="private"
                            checked={gameType === 'private'}
                            onChange={() => setGameType('private')}
                            className="mr-2"
                        />
                        Privée
                    </label>
                </div>
            </div>

            <Button onClick={handleStart} className="mt-4">
                Commencer
            </Button>
            <Button onClick={handleTest} className="mt-4">
                test
            </Button>
        </div>
    );
};

export default Home;
