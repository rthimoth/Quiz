import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Input from '../components/Input';

const Home: React.FC = () => {
    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    const handleStart = () => {
        if (username.trim()) {
            localStorage.setItem('username', username);
            navigate('/lobby');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-3xl font-bold mb-4">Choose a name !</h1>
            <Input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Entrez votre pseudo"
            />
            <Button onClick={handleStart} className="mt-4">
                Commencer
            </Button>
        </div>
    );
};

export default Home;
