import React, { useState } from 'react';

const Questions: React.FC = () => {
    const [questions] = useState<number | undefined>(10);

    return (
        <div>
            <p><span className='text-[#3CEB88]'>1</span>/{questions}</p>
            <div>
                <div>
                    <label>
                        <input type="radio" name="questionType" value="write" />
                        Write question
                    </label>
                    <label>
                        <input type="radio" name="questionType" value="choices" />
                        Choices question
                    </label>
                </div>
            </div>
            <div>
                <p>Previous</p>
                <p>Next</p>
            </div>
        </div>
    );
};

export default Questions;