import React, { useEffect } from 'react';
import Chrono from '../../assets/images/chrono.svg';
import Gamemode from '../../assets/images/gamemode.svg';
import Numbers from '../../assets/images/numbers.svg';
import Button from '../Button/Button';
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

    useEffect(() => {
        setNumbers(2);
        setGamemode('private');
        setChrono(10);
    }, []);

    return (
        <div>
            <div>
                <div className='flex items-center m-4'>
                    <div className='flex w-1/2 mx-4'>
                        <img src={Chrono} alt="chrono" className='mr-2' />
                        <div>
                            <p>CHRONO</p>
                            <p className='font-normal'>Edit the timer to answer to a question</p>
                        </div>
                    </div>
                    <div className='w-1/2'>
                        <select
                            title="chrono"
                            name="chrono"
                            id="chrono"
                            className='block w-full p-2 text-sm text-white border-none rounded-lg bg-black/50'
                            value={chrono}
                            onChange={(e) => setChrono(Number(e.target.value))}
                        >
                            <option value="5">5 seconds</option>
                            <option value="10">10 seconds</option>
                            <option value="15">15 seconds</option>
                            <option value="30">30 seconds</option>
                            <option value="45">45 seconds</option>
                            <option value="60">1 minute</option>
                            <option value="90">1 minute 30</option>
                            <option value="120">2 minutes</option>
                        </select>
                    </div>
                </div>
                <div className='flex items-center m-4'>
                    <div className='flex w-1/2 mx-4'>
                        <img src={Gamemode} alt="gamemode" className='mr-2' />
                        <div>
                            <p>GAMEMODE</p>
                            <p className='font-normal'>Choose the gamemode to create your questions or take the public questions</p>
                        </div>
                    </div>
                    <div className='w-1/2'>
                        <select
                            title="gamemode"
                            name="gamemode"
                            id="gamemode"
                            className='block w-full p-2 text-sm text-white border-none rounded-lg bg-black/50'
                            value={gamemode}
                            onChange={(e) => setGamemode(e.target.value)}
                        >
                            <option value="public">Public</option>
                            <option value="private">Private</option>
                        </select>
                    </div>
                </div>
                <div className='flex items-center m-4'>
                    <div className='flex w-1/2 mx-4'>
                        <img src={Numbers} alt="numbers" className='mr-2' />
                        <div>
                            <p>NUMBERS</p>
                            <p className='font-normal'>Choose the number of questions</p>
                        </div>
                    </div>
                    <div className='w-1/2'>
                        <select
                            title="numbers"
                            name="numbers"
                            id="numbers"
                            className='block w-full p-2 text-sm text-white border-none rounded-lg bg-black/50'
                            value={numbers}
                            onChange={(e) => setNumbers(Number(e.target.value))}
                        >
                            <option value="2">2</option>
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="15">15</option>
                            <option value="20">20</option>
                            <option value="25">25</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className='flex justify-around items-center w-full mt-8'>
                <Button
                    label="SHARE LINK"
                    color="bg-blue-500 hover:bg-blue-400 border-blue-700 hover:border-blue-500"
                />
                <SubmitButton
                    label="START"
                    color="bg-green-500 hover:bg-green-400 border-green-700 hover:border-green-500"
                    onClick={onStartGame}
                />
            </div>
        </div>
    );
};

export default Settings;
