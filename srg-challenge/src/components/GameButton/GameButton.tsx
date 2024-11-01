import React from 'react';
import './GameButton.css';

interface ButtonProps {
    onClick: () => void;
    className?: string;
}

const GameButton: React.FC<ButtonProps> = ({ onClick, className }) => {
    return (
        <button onClick={onClick} className={className}></button>
    );
};

export default GameButton;
