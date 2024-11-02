import GameButton from "../GameButton/GameButton";
import React from "react";
import './City.css';
import DrawIcon from '@mui/icons-material/Draw';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import BookIcon from '@mui/icons-material/Book';
import RateReviewIcon from '@mui/icons-material/RateReview';
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
            <GameButton onClick={() => {}} icon={BookIcon}
                        className={'mock1BuildingBtn'}></GameButton>
            <GameButton onClick={() => {}} icon={RateReviewIcon}
                        className={'mock2BuildingBtn'}></GameButton>
        </div>
    );
}

export default City;