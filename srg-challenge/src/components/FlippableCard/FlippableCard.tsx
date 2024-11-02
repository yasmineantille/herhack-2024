import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import {Newspaper, LocalLibrary} from '@mui/icons-material';
import { StyledSourceCard } from '../StyledComponents/StyledComponents';
import './FlippableCard.css';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';

interface FlippableCardProps {
    icon: string;
    title: string;
    flipsideText: string;
}

const IconBox: React.FC<{ icon: string }> = ({ icon }) => {
    const renderIcon = () => {
        switch (icon) {
            case 'newspaper':
                return <Newspaper color="action" fontSize="large" />;
            case 'connect':
                return <ConnectWithoutContactIcon color='action' fontSize='large' />;
            case 'library':
                return <LocalLibrary color="action" fontSize="large" />;
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
                backgroundColor: 'primary.light',
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
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
        <StyledSourceCard onClick={handleCardClick} className={`flippable-card ${isFlipped ? 'flipped' : ''}`}>
            <Box className="card-content">
                <Box className="card-front">
                    <Box display="flex" justifyContent="center" >
                        <IconBox icon={icon} />
                    </Box>
                    <Typography variant="h5" color="primary">
                        {title}
                    </Typography>
                </Box>
                <Box className="card-back">
                    <Box display="flex" justifyContent="center">
                        <IconBox icon={icon} />
                    </Box>
                    <Typography>
                        {flipsideText}
                    </Typography>
                </Box>
            </Box>
        </StyledSourceCard>
    );
};

export default FlippableCard;