import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { Newspaper, LocalLibrary } from '@mui/icons-material';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import BookIcon from '@mui/icons-material/Book';
import {StyledFlippableCard} from "../StyledComponents/StyledComponents";
import './FlippableCard.css';

interface FlippableCardProps {
    icon: string;
    title: string;
    flipsideText: string;
}

const IconBox: React.FC<{ icon: string }> = ({ icon }) => {
    const renderIcon = () => {
        switch (icon) {
            case 'newspaper':
                return <Newspaper fontSize="large" />;
            case 'connect':
                return <ConnectWithoutContactIcon fontSize="large" />;
            case 'locallibrary':
                return <LocalLibrary fontSize="large" />;
            case 'book':
                return <BookIcon fontSize="large" />;
            default:
                return null;
        }
    };

    return (
        <Box
            sx={{
                width: 64,
                height: 64,
                color: 'white',
                backgroundColor: 'primary.main',
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: 3,
                transition: 'transform 0.3s',
                '&:hover': {
                    transform: 'scale(1.1)',
                },
            }}
        >
            {renderIcon()}
        </Box>
    );
};

const FlippableCard: React.FC<FlippableCardProps> = ({ icon, title, flipsideText }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleCardClick = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <StyledFlippableCard onClick={handleCardClick} className={`flippable-card ${isFlipped ? 'flipped' : ''}`}>
            <Box className="card-content" sx={{ textAlign: 'center', p: 1 }}>
                <Box className="card-front">
                    <Box display="flex" justifyContent="center">
                        <IconBox icon={icon} />
                    </Box>
                    <Typography variant="h6" color="primary.main" fontWeight="bold" sx={{ mt: 2 }}>
                        {title}
                    </Typography>
                </Box>
                <Box className="card-back" >
                    <Box display="flex" justifyContent="center">
                        <IconBox icon={icon} />
                    </Box>
                    <Typography>
                        {flipsideText}
                    </Typography>
                </Box>
            </Box>
        </StyledFlippableCard>
    );
};

export default FlippableCard;
