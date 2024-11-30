import React, { useState, useEffect } from 'react';

interface TimerProps {
    initialTime: number;
    onExpire: () => void;
}

const Timer: React.FC<TimerProps> = ({ initialTime, onExpire }) => {
    const [timeLeft, setTimeLeft] = useState<number>(initialTime);

    useEffect(() => {
        setTimeLeft(initialTime);

        const timer = setInterval(() => {
            setTimeLeft((prevTime) => {
                if (prevTime <= 1) {
                    clearInterval(timer);
                    onExpire();
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, [initialTime, onExpire]);

    return (
        <div className="text-center mb-2">
            <h2 className="text-lg font-semibold">Temps restant : {timeLeft} secondes</h2>
        </div>
    );
};

export default Timer;
