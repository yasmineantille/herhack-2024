import GameButton from "../GameButton/GameButton";
import React from "react";
import './City.css';
import DrawIcon from '@mui/icons-material/Draw';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import {ROOT} from "../../App";

interface GameProps {

}

const City: React.FC<GameProps> = () => {
    const navigateTo = (route: string) => {
        window.location.href = ROOT + route;
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