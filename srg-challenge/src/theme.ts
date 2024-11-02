import {createTheme} from '@mui/material/styles';


const theme = createTheme({
    palette: {
        primary: {
            main: '#DA6C6C', // Muted Red for primary buttons or important elements
        },
        secondary: {
            main: '#F9A26B', // Warm Orange for secondary buttons or highlights
        },
        background: {
            default: '#F5E6D8', // Soft Cream as the main background color
            paper: '#69C1CC', // Soft Turquoise as a secondary background, for cards or sections
        },
        text: {
            primary: '#2E2E2E', // Deep Charcoal for main text
            secondary: '#8C8C8C', // Warm Grey for secondary text or less important information
        },
        warning: {
            main: '#EF5747', // Vibrant Red for warnings or critical actions
        },
        info: {
            main: '#5E8CBA', // Deep Blue for informational elements or links
        },
        success: {
            main: '#FFD24A', // Bright Yellow for success messages or positive indicators
        },
        error: {
            main: '#DA6C6C', // Muted Red (can be reused as an error color for consistency)
        },
        divider: '#8C8C8C', // Warm Grey as a divider color
    },
    typography: {
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '8px', // Optional: Rounded corners for buttons
                    textTransform: 'none', // Optional: Keeps button text lowercase
                },
            },
            defaultProps: {
                variant: 'contained',
                color: 'primary',
            },
        },
    },
});


export default theme;