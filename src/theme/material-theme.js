import { createTheme } from '@mui/material';

export const themeOptions = createTheme({
    palette: {
        primary: {
            main: '#1BD760',
            light: '#39d472',
            dark: '#3b5249',
            contrastText: '#ffffff'
        },
        background: {
            paper: '#000000',
            default: '#121212'
        },
        text: {
            primary: '#ffffff',
            secondary: '#b3b3b3'
        },
        devider: '#292929'
    }
});