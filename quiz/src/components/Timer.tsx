import React, { useEffect, useState, useRef } from 'react';

interface Props {
    timer: number;
}

const Timer: React.FC<Props> = ({ timer }) => {
    const [time, setTime] = useState(timer);
    const intervalRef = useRef<number | null>(null);

    useEffect(() => {
        setTime(timer);

        intervalRef.current = window.setInterval(() => {
            setTime((prevTime) => {
                if (prevTime === 1) {
                    clearInterval(intervalRef.current!);
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000);

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [timer]);

    return (
        <div>
            <p className='text-xl'>{time} s</p>
        </div>
    );
};

export default Timer;
