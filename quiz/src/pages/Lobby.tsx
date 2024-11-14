import React, { useState } from 'react';
import Logo from '../assets/images/logo.svg';
import LinkButton from '../components/Button/LinkButton';
import PlayerList from '../components/Lobby/PlayerList';
import Settings from '../components/Lobby/Settings';
import Questions from '../components/Lobby/Questions';

const Lobby: React.FC = () => {
    const [tabs, setTabs] = useState('Settings');

    return (
        <div className='bg-image w-screen h-screen grid grid-cols-3 gap-4'>
            <div>
            </div>
            <div className='col-span-2 flex flex-col justify-center items-center'>
                <div>
                    <img src={Logo} alt="logo" height={150} width={150} />
                </div>
                <div className='flex flex-col'>
                    <LinkButton
                        to="/"
                        label="BACK"
                        className='flex opacity-70 hover:text-black hover:duration-200 w-16'
                    />
                    <div className='flex'>
                        <PlayerList />
                        <div className='w-3/5'>
                            <div className='flex justify-around gap-8'>
                                <div 
                                    className='bg-black/20 w-full text-center rounded-t-lg cursor-pointer hover:bg-black/10 duration-200'
                                    onClick={() => setTabs('Settings')}
                                >
                                    <p>SETTINGS</p>
                                </div>
                                <div 
                                    className='bg-black/10 w-full text-center rounded-t-lg cursor-pointer hover:bg-black/20 duration-200'
                                    onClick={() => setTabs('Questions')}
                                >
                                    <p>QUESTIONS</p>
                                </div>
                            </div>
                            <div className='bg-black/20 rounded-b-xl flex flex-col items-end p-2'>
                                {tabs === "Settings" ? <Settings /> : tabs === "Questions" ? <Questions /> : null}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Lobby;
