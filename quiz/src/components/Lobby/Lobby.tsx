import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Button from '../Button';
import Logo from '../../assets/images/logo.svg';
import Profile from '../../assets/images/pp.svg';
import Chrono from '../../assets/images/chrono.svg';
import Gamemode from '../../assets/images/gamemode.svg';
import Numbers from '../../assets/images/numbers.svg';
import LinkButton from '../Layout/LinkButton';
import Button from '../Layout/Button';

const Lobby: React.FC = () => {
    // const [username, setUsername] = useState('');
    // const [inviteLink, setInviteLink] = useState('');
    // const navigate = useNavigate();
    const [players, setPlayers] = useState<number | undefined>(4);

    // useEffect(() => {
    //     // Récupère le pseudo depuis le localStorage
    //     const storedUsername = localStorage.getItem('username');
    //     if (storedUsername) {
    //         setUsername(storedUsername);
    //         // Génère un lien d'invitation basé sur l'URL actuelle
    //         setInviteLink(`${window.location.origin}/lobby?invite=${storedUsername}`);
    //     } else {
    //         // Si aucun pseudo n'est défini, redirige vers la page d'accueil
    //         navigate('/');
    //     }
    // }, [navigate]);

    // // Fonction pour copier le lien d'invitation
    // const handleCopyLink = () => {
    //     navigator.clipboard.writeText(inviteLink);
    //     alert('Lien d’invitation copié dans le presse-papier !');
    // };

    return (
        // <div className="flex flex-col items-center justify-center h-screen">
        //     <h1 className="text-2xl font-bold mb-4">Bienvenue dans le lobby, {username} !</h1>
        //     <p className="mb-4">Partagez ce lien pour inviter d'autres joueurs :</p>
        //     <div className="flex items-center">
        //         <input
        //             type="text"
        //             value={inviteLink}
        //             readOnly
        //             className="border border-gray-300 rounded px-2 py-1 mr-2 w-64"
        //         />
        //         <Button onClick={handleCopyLink}>Copier le lien</Button>
        //     </div>
        // </div>
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
                        <div className='bg-black/20 rounded-xl flex flex-col items-end p-2 w-2/5 mr-8'>
                            <p><span className='text-[#FF5F9E]'>1</span>/{players}</p>
                            <select onChange={(e) => setPlayers(Number(e.target.value))} title="players" name="players" id="players" className='block w-full p-2 mb-6 text-sm text-white border-none rounded-lg bg-black/50 w-full'>
                                <option value="4">4 PLAYERS</option>
                                <option value="8">8 PLAYERS</option>
                                <option value="16">16 PLAYERS</option>
                                <option value="24">24 PLAYERS</option>
                                <option value="32">32 PLAYERS</option>
                            </select>
                            <div className='w-full'>
                                <div className='flex w-full bg-black/10 rounded p-2 my-2'>
                                    <img src={Profile} alt="profile picture" className='mr-2' />
                                    <p className='text-white'>Pseudocool143</p>
                                </div>
                                <div className='flex w-full bg-black/10 rounded p-2 my-2'>
                                    <img src={Profile} alt="profile picture" className='mr-2' />
                                    <p>Nobody</p>
                                </div>
                                <div className='flex w-full bg-black/10 rounded p-2 my-2'>
                                    <img src={Profile} alt="profile picture" className='mr-2' />
                                    <p>Nobody</p>
                                </div>
                                <div className='flex w-full bg-black/10 rounded p-2 my-2'>
                                    <img src={Profile} alt="profile picture" className='mr-2' />
                                    <p>Nobody</p>
                                </div>
                            </div>
                        </div>
                        <div className='w-3/5'>
                            <div className='flex justify-around gap-8'>
                                <div className='bg-black/20 w-full text-center rounded-t-lg'>
                                    <p>SETTINGS</p>
                                </div>
                                <div className='bg-black/10 w-full text-center rounded-t-lg'>
                                    <p>QUESTIONS</p>
                                </div>
                            </div>
                            <div className='bg-black/20 rounded-b-xl flex flex-col items-end p-2 w-full'>
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
                                            <select title="chrono" name="chrono" id="chrono" className='block w-full p-2 text-sm text-white border-none rounded-lg bg-black/50 w-full'>
                                                <option value="15s">15 seconds</option>
                                                <option value="30s">30 seconds</option>
                                                <option value="45s">45 seconds</option>
                                                <option value="1min">1 minute</option>
                                                <option value="1min30">1 minute 30</option>
                                                <option value="2min">2 minutes</option>
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
                                            <select title="gamemode" name="gamemode" id="gamemode" className='block w-full p-2 text-sm text-white border-none rounded-lg bg-black/50 w-full'>
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
                                                <p className='font-normal'>Choose the numbers of questions</p>
                                            </div>
                                        </div>
                                        <div className='w-1/2'>
                                            <select title="numbers" name="numbers" id="numbers" className='block w-full p-2 text-sm text-white border-none rounded-lg bg-black/50 w-full'>
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
                                    <Button
                                        label="START"
                                        color="bg-green-500 hover:bg-green-400 border-green-700 hover:border-green-500"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Lobby;
