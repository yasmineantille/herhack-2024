import React from 'react';
import { IconButton } from '@mui/material';
import { SvgIconComponent } from '@mui/icons-material';

interface ButtonProps {
    onClick: () => void;
    className?: string;
    icon: SvgIconComponent;
    color?: string; // Add an optional color prop
}

const GameButton: React.FC<ButtonProps> = ({ onClick, className, icon: Icon, color = 'darkred' }) => {
    // Calculate a lighter hover color based on the provided color
    const hoverColor = color === 'darkred' ? 'red' : `${color}CC`; // Make the color slightly transparent for hover

    return (
        <IconButton
            onClick={onClick}
            className={className}
            sx={{
                width: 70,
                height: 70,
                backgroundColor: color,         // Use the color prop here
                color: 'white',
                borderRadius: '50%',
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.3)',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                '&:hover': {
                    backgroundColor: hoverColor, // Use the calculated hover color
                    transform: 'scale(1.1)',
                    boxShadow: '0px 6px 16px rgba(0, 0, 0, 0.4)',
                },
                '& .MuiSvgIcon-root': {
                    fontSize: 38,
                    filter: 'drop-shadow(0px 2px 4px rgba(255, 255, 255, 0.6))',
                },
            }}
        >
            <Icon fontSize="inherit" />
        </IconButton>
    );
};

export default GameButton;
