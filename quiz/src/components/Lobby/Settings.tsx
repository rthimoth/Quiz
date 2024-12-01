import React from 'react';
import SubmitButton from '../Button/SubmitButton';

interface Props {
    chrono: number;
    setChrono: (chrono: number) => void;
    gamemode: string;
    setGamemode: (gamemode: string) => void;
    numbers: number;
    setNumbers: (numbers: number) => void;
    onStartGame: () => void;
}

const Settings: React.FC<Props> = ({ chrono, setChrono, gamemode, setGamemode, numbers, setNumbers, onStartGame }) => {
    return (
        <div className="flex flex-col items-center">
            <h2 className="text-xl">Settings</h2>
            <div className="mt-4">
                <label>Time per Question:</label>
                <input
                    type="number"
                    value={chrono}
                    onChange={(e) => setChrono(Number(e.target.value))}
                    className="p-2 border border-gray-400 rounded"
                />
            </div>
            <div className="mt-4">
                <label>Game Mode:</label>
                <select
                    aria-label="Game Mode"
                    value={gamemode}
                    onChange={(e) => setGamemode(e.target.value)}
                    className="p-2 border border-gray-400 rounded"
                >
                    <option value="private">Private</option>
                    <option value="public">Public</option>
                </select>
            </div>
            <div className="mt-4">
                <label>Number of Questions:</label>
                <input
                    type="number"
                    value={numbers}
                    onChange={(e) => setNumbers(Number(e.target.value))}
                    className="p-2 border border-gray-400 rounded"
                />
            </div>
            <div className="mt-6">
                <SubmitButton
                    label="Start Game"
                    color="bg-green-500 hover:bg-green-400 border-green-700 hover:border-green-500"
                    onClick={onStartGame}
                />
            </div>
        </div>
    );
};

export default Settings;
