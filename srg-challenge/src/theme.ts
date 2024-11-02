// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2', // Customize with your preferred primary color
        },
        secondary: {
            main: '#ff4081', // Customize with your preferred secondary color
        },
        background: {
            default: '#f4f4f9', // Background color for pages
        },
    },
    typography: {
        fontFamily: 'Roboto, Arial, sans-serif',
        h3: {
            fontSize: '2rem',
            fontWeight: 600,
        },
        h4: {
            fontSize: '1.5rem',
            fontWeight: 500,
        },
        body1: {
            fontSize: '1rem',
        },
        caption: {
            fontSize: '0.8rem',
        },
    },
    spacing: 8, // Default spacing factor (e.g., spacing(2) is 8 * 2 = 16px)
});

export default theme;
