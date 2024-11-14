import React, { useState } from 'react';
import Radio from '../Button/Radio';
import Button from '../Button/Button';

const Questions: React.FC = () => {
    const [questions] = useState<number | undefined>(10);

    return (
        <div>
            <div className='w-full flex justify-end'>
                <p><span className='text-[#3CEB88]'>1</span>/{questions}</p>
            </div>
            <div>
                <div className='flex justify-evenly items-center w-full'>
                    <label className='flex justify-center items-center w-72'>
                        <input type="radio" name="type" value="write" className='custom-radio mr-2' />
                        Write question
                    </label>
                    <label className='flex justify-center items-center w-72'>
                        <input type="radio" name="type" value="choices" className='custom-radio mr-2' />
                        Choices question
                    </label>
                </div>
                <div className='flex flex-col justify-center items-center px-16'>
                    <input
                        type="text"
                        className='w-full bg-purple-500 focus:bg-purple-400 border-none font-bold py-2 px-4 border-b-4 rounded my-2'
                        placeholder='Type a question'
                    />
                    <div className='w-full'>
                        <Radio label='First answer' />
                        <Radio label='Second answer' />
                        <Radio label='Third answer' />
                        <Radio label='Fourth answer' />
                    </div>
                </div>
            </div>
            <div className='flex justify-evenly'>
                <Button
                    label="PREVIOUS"
                    color="bg-purple-500 hover:bg-purple-400 border-purple-700 hover:border-purple-500"
                />
                <Button
                    label="NEXT"
                    color="bg-purple-500 hover:bg-purple-400 border-purple-700 hover:border-purple-500"
                />
            </div>
        </div>
    );
};

export default Questions;