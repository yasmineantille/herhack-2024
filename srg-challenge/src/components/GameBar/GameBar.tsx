import React from 'react';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Button, Container, Stack } from '@mui/material';
import ApartmentIcon from '@mui/icons-material/Apartment';
import EditIcon from '@mui/icons-material/Edit';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';

// Define the shared color
const buttonColor = 'darkred';

interface BarProps {
    className?: string;
    toggleShowHelp: () => void;
}

const GameBar: React.FC<BarProps> = ({ className, toggleShowHelp }) => {
    const location = useLocation();

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
                        {location.pathname !== '/' && (
                            <Button
                                component={RouterLink}
                                to="/"
                                variant="contained"
                                startIcon={<ApartmentIcon />}
                            >
                                Back to the city
                            </Button>
                        )}
                        {location.pathname !== '/workDesk' && (
                            <Button
                            component={RouterLink}
                            to={'/workDesk'}
                            variant="contained"
                            startIcon={<EditIcon />}
                        >
                            Write your article
                        </Button>
                        )}
                        <Button
                            onClick={() => {
                                toggleShowHelp();
                            }}
                            variant="contained"
                            startIcon={<QuestionMarkIcon />}
                        >
                            Gameplay help
                        </Button>

                    </Stack>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default GameBar;
