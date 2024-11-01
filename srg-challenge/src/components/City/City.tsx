import GameButton from "../GameButton/GameButton";
import React from "react";
import { ReactComponent as Skyline } from './skyline2.svg';
import './City.css';

interface GameProps {

}

const City: React.FC<GameProps> = () => {
    const navigate = () => {
        window.location.href = '/game';
    };

    return (
        <div className={'game'}>
            <Skyline className={'skyline'}/>
            <GameButton onClick={() => navigate()} className={'firstGame'}></GameButton>
        </div>
    );
}

export default City;