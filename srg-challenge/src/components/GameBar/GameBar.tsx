import React from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Button, Container, Stack } from '@mui/material';
import ApartmentIcon from '@mui/icons-material/Apartment';

// Define the shared color
const buttonColor = 'darkred';

interface BarProps {
    className?: string;
}

const GameBar: React.FC<BarProps> = ({ className }) => {
    const location = useLocation();

    const getButtonText = () => {
        switch (location.pathname) {
            case '/workDesk':
                return 'Back to the city';
            default:
                return 'Write your article';
        }
    };

    const getButtonLink = () => {
        switch (location.pathname) {
            case '/':
                return '/workDesk';
            default:
                return '/';
        }
    };

    return (
        <AppBar
            position="fixed"
            sx={{
                top: 'auto',
                bottom: 0,
                backgroundColor: '#333',
                py: 1,
            }}
            className={className}
        >
            <Container maxWidth="md">
                <Toolbar sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Stack direction="row" spacing={2}>
                        {/* Conditionally render the Home Button */}
                        {location.pathname !== '/' && (
                            <Button
                                component={RouterLink}
                                to="/"
                                variant="contained"
                                startIcon={<ApartmentIcon />}
                                sx={{
                                    color: '#fff',
                                    backgroundColor: buttonColor,
                                    '&:hover': {
                                        backgroundColor: `${buttonColor}CC`, // Slightly transparent on hover
                                    },
                                }}
                            >
                                Back to the city
                            </Button>
                        )}

                        {/* Existing Button */}
                        <Button
                            component={RouterLink}
                            to={getButtonLink()}
                            variant="contained"
                            sx={{
                                color: '#fff',
                                backgroundColor: buttonColor,
                                '&:hover': {
                                    backgroundColor: `${buttonColor}CC`,
                                },
                            }}
                        >
                            {getButtonText()}
                        </Button>
                    </Stack>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default GameBar;
