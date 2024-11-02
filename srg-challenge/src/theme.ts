import { createTheme } from '@mui/material/styles';
import { PaletteMode } from '@mui/material';

// Function to create a theme based on the mode with both light and dark kid-friendly variants
const getTheme = (mode: PaletteMode) =>
    createTheme({
        palette: {
            mode,
            primary: {
                main: mode === 'light' ? '#FF6B6B' : '#FF8E8E', // Soft Bright Red for primary buttons
                dark: '#D35B5B', // Darker shade for primary in both modes
                light: '#FF9C9C', // Lighter shade for primary in both modes
                contrastText: '#FFFFFF', // White text for better contrast on primary
            },
            secondary: {
                main: mode === 'light' ? '#FFD93D' : '#FFE570', // Cheerful Yellow for secondary buttons
                dark: '#CCB52E', // Darker shade for secondary in both modes
                light: '#FFEB8A', // Lighter shade for secondary in both modes
                contrastText: '#333333', // Darker text for better contrast on secondary
            },
            background: {
                default: mode === 'light' ? '#FFF7E6' : '#2B2B2B', // Soft Cream for light mode, dark grey for dark mode
                paper: mode === 'light' ? '#D6F3FF' : '#404040', // Light Sky Blue for light mode, darker grey for dark
            },
            text: {
                primary: mode === 'light' ? '#333333' : '#FFFFFF', // Dark Grey for light mode, White for dark mode
                secondary: mode === 'light' ? '#666666' : '#CCCCCC', // Medium Grey for light mode, light grey for dark mode
            },
            warning: {
                main: '#FFB84D', // Soft Orange for warnings
            },
            info: {
                main: '#4DA6FF', // Bright Sky Blue for informational elements
            },
            success: {
                main: '#5CD65C', // Fresh Green for success
            },
            error: {
                main: mode === 'light' ? '#FF6B6B' : '#FF8E8E', // Same as primary color for error consistency
            },
            divider: mode === 'light' ? '#E0E0E0' : '#555555', // Lighter divider in light mode, darker in dark mode
        },
        typography: {
            fontFamily: "'Poppins', 'Comic Neue', 'Quicksand', 'Roboto', 'Helvetica', 'Arial', sans-serif",
            fontSize: 14, // Slightly larger text for readability
        },
        components: {
            MuiButton: {
                styleOverrides: {
                    root: {
                        borderRadius: '12px', // Rounded corners for a softer look
                        textTransform: 'none', // Keeps button text lowercase
                        padding: '10px 20px', // Makes buttons slightly larger for easy clicking
                    },
                },
                defaultProps: {
                    variant: 'contained',
                    color: 'primary',
                },
            },
            MuiAppBar: {
                styleOverrides: {
                    colorPrimary: {
                        backgroundColor: mode === 'light' ? '#FFD93D' : '#2B2B2B', // Bright Yellow for light, dark grey for dark mode
                    },
                },
            },
        },
    });

export default getTheme;
