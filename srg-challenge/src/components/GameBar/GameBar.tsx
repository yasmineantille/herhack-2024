import React from 'react';
import './GameBar.css';

interface BarProps {
    className?: string;
}

const GameBar: React.FC<BarProps> = ({className}) => {
    return (
        <div className={className}></div>
    );
};

export default GameBar;
