import GameButton from "../GameButton/GameButton";
import React from "react";
import { ReactComponent as Skyline } from './skyline2.svg';
import './City.css';
import DrawIcon from '@mui/icons-material/Draw';
import MicIcon from '@mui/icons-material/Mic';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

interface GameProps {

}

const City: React.FC<GameProps> = () => {
    const navigateTo = (route: string) => {
        window.location.href = route;
    };

    return (
        <div className={'game'}>
            <div className={'skyline'}></div>
            <GameButton onClick={() => navigateTo('/title')} icon={DrawIcon} className={'titleBuildingBtn'}></GameButton>
            <GameButton onClick={() => navigateTo('/quote')} icon={FormatQuoteIcon} className={'quoteBuildingBtn'}></GameButton>
        </div>
    );
}

export default City;