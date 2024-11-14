// ScoreBoard.tsx
import React from 'react';

interface ScoreBoardProps {
    score: number;
    totalQuestions?: number;
}

const ScoreBoard: React.FC<ScoreBoardProps> = ({ score, totalQuestions }) => {
    return (
        <div className="text-center mb-4">
            <h2 className="text-lg font-semibold">
                Score : {score}
                {totalQuestions ? ` / ${totalQuestions}` : ''}
            </h2>
        </div>
    );
};

export default ScoreBoard;
