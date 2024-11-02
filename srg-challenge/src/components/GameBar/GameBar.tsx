import React from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Button, Container } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';

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

    const getButtonIcon = () => {
        switch (location.pathname) {
            case '/workDesk':
                return <HomeIcon />;
            default:
                return <ArticleIcon />;
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
                    <Button
                        component={RouterLink}
                        to={getButtonLink()}
                        variant="contained"
                        startIcon={getButtonIcon()}
                        sx={{
                            color: '#fff',
                            backgroundColor: '#3f51b5',
                            '&:hover': {
                                backgroundColor: '#2c387e',
                            },
                        }}
                    >
                        {getButtonText()}
                    </Button>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default GameBar;
