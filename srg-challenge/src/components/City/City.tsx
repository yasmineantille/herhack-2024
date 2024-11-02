import GameButton from "../GameButton/GameButton";
import React from "react";
import { ReactComponent as Skyline } from './skyline2.svg';
import './City.css';

interface GameProps {

}

const City: React.FC<GameProps> = () => {
    const navigateTo = (route: string) => {
        window.location.href = route;
    };

    return (
        <div className={'game'}>
            <div className={'skyline'}></div>
            <GameButton onClick={() => navigateTo('/title')} className={'titleBuildingBtn'}></GameButton>
            <GameButton onClick={() => navigateTo('/workDesk')} className={'workdesk'}></GameButton>
            <GameButton onClick={() => navigateTo('/quote')} className={'quote'}></GameButton>
        </div>
    );
}

export default City;