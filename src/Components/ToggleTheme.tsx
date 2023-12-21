import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { AppBar, Button } from '@mui/material';
import { useState } from 'react';
const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});
const LightTheme = createTheme({
    palette: {
        mode: 'light',
    },
});

export default function ToggleTheme() {
    const [toggle, setToggle] = useState(false)
    return (
        <ThemeProvider theme={toggle ? darkTheme : LightTheme}>
            <CssBaseline />
            <Button onClick={() => setToggle(prev => !prev)}>Chnage Theme</Button>
        </ThemeProvider>
    );
}
