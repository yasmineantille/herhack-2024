import GameButton from "../GameButton/GameButton";
import React from "react";
import './City.css';
import DrawIcon from '@mui/icons-material/Draw';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import {useNavigate} from "react-router-dom";

interface GameProps {

}

const City: React.FC<GameProps> = () => {
    const navigate = useNavigate();

    const navigateTo = (route: string) => {
        navigate(route);
    };

    return (
        <div className={'game'}>
            <div className={'skyline'}></div>
            <GameButton onClick={() => navigateTo('/title')} icon={DrawIcon}
                        className={'titleBuildingBtn'}></GameButton>
            <GameButton onClick={() => navigateTo('/quote')} icon={FormatQuoteIcon}
                        className={'quoteBuildingBtn'}></GameButton>
        </div>
    );
}

export default City;