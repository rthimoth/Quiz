import React, { useState } from 'react';
import Profile from '../../assets/images/pp.svg';

const PlayerList: React.FC = () => {
    const [players, setPlayers] = useState<number | undefined>(4);

    return (
        <div className='bg-black/20 rounded-xl flex flex-col items-end p-2 w-2/5 mr-8 min-w-60'>
            <p><span className='text-[#FF5F9E]'>1</span>/{players}</p>
            <select
                onChange={(e) => setPlayers(Number(e.target.value))}
                title="players"
                name="players"
                id="players"
                className='block w-full p-2 mb-6 text-sm text-white border-none rounded-lg bg-black/50 w-full'
            >
                <option value="4">4 PLAYERS</option>
                <option value="8">8 PLAYERS</option>
                <option value="16">16 PLAYERS</option>
                <option value="24">24 PLAYERS</option>
                <option value="32">32 PLAYERS</option>
            </select>
            <div
                className='w-full overflow-y-auto max-h-60 player-list'
            >
                {Array.from({ length: players ?? 0 }, (_, index) => (
                    <div key={index} className='flex w-full bg-black/10 rounded p-2 my-2'>
                        <img src={Profile} alt="profile picture" className='mr-2' />
                        <p>Player {index + 1}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PlayerList;
