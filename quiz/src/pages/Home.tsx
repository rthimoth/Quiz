import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../components/Pseudo';
import Logo from '../assets/images/logo.svg';
import Button from '../components/Button/Button';

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
        <div className='bg-image w-screen h-screen grid grid-cols-3 gap-4'>
            <div>
            </div>
            <div className='col-span-2 flex flex-col justify-center items-center'>
                <div>
                    <img src={Logo} alt="logo" height={300} width={300} />
                </div>
                <div className='flex flex-col justify-center items-center w-2/5'>
                    <h1 className="text-lg text-white font-bold mb-4 text-center">Choose a name !</h1>
                    <Input
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Entrez votre pseudo"
                    />
                    <span onClick={handleStart} className="mt-4 w-full flex justify-center items-center">
                        <Button
                            label="JOIN"
                            color="bg-purple-500 hover:bg-purple-400 border-purple-700 hover:border-purple-500 mt-8 w-4/5"
                        />
                    </span>
                    <div className='flex flex-col justify-center items-center w-full'>
                        <Button
                            label="Create a private game"
                            color="bg-slate-100 hover:bg-slate-200 border-slate-400 hover:border-slate-300 mt-8 w-4/5 text-black"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
