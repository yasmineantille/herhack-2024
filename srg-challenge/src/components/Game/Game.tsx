import GameButton from "../GameButton/GameButton";
import GameBar from "../GameBar/GameBar";
import React from "react";
import { ReactComponent as Skyline } from './skyline2.svg';
import './Game.css';

interface GameProps {

}

const Game: React.FC<GameProps> = () => {
    const navigate = () => {
        window.location.href = '/game';
    };

    return (
        <div className={'game'}>
            <Skyline className={'skyline'}/>
            <GameBar className={'gameBar'}></GameBar>
            <GameButton onClick={() => navigate()} className={'firstGame'}></GameButton>
        </div>
    );
}

export default Game;