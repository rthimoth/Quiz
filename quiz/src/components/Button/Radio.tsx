import React from 'react';

interface Props {
    label: string,
}

const Radio: React.FC<Props> = ({ label }) => (
    <label className='block p-2 text-sm text-white border-none rounded-lg bg-black/50 w-full my-4 flex'>
        <input type="radio" name="answer" value="write" className='custom-radio mx-2' />
        <input type="text" placeholder={label} className='bg-transparent focus:outline-none' />
    </label>
);

export default Radio;