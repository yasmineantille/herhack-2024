import React from 'react';
import { IconButton } from '@mui/material';
import { SvgIconComponent } from '@mui/icons-material';

interface ButtonProps {
    onClick: () => void;
    className?: string;
    icon: SvgIconComponent;
    color?: string;
}

const GameButton: React.FC<ButtonProps> = ({ onClick, className, icon: Icon, color = '#FFD93D' }) => {
    const hoverColor = color === '#FFD93D' ? '#FFD93D' : `${color}CC`;

    return (
        <IconButton
            onClick={onClick}
            className={className}
            sx={{
                position: 'relative',
                width: 70,
                height: 70,
                backgroundColor: color,
                color: '#D35B5B',
                borderRadius: '50%',
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.3)',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                '&:hover': {
                    backgroundColor: hoverColor,
                    transform: 'scale(1.1)',
                    boxShadow: '0px 6px 16px rgba(0, 0, 0, 0.4)',
                    '&::after': {
                        borderTopColor: hoverColor, // Change tail color on hover
                    },
                },
                '& .MuiSvgIcon-root': {
                    fontSize: 38,
                },
                '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -6,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: 0,
                    height: 0,
                    borderLeft: '8px solid transparent',
                    borderRight: '8px solid transparent',
                    borderTop: `8px solid ${color}`, // Initial color for the triangle tail
                    transition: 'border-top-color 0.2s ease', // Smooth transition for hover effect
                },
            }}
        >
            <Icon fontSize="inherit" />
        </IconButton>
    );
};

export default GameButton;
