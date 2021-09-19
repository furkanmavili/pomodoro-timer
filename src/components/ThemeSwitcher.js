import React from 'react';
import IconButton from '@mui/material/IconButton';
import { useTheme as useMuiTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import useTheme from '../hooks/useTheme';

function ThemeSwitcher() {
    const theme = useMuiTheme()
    const toggleTheme = useTheme(state => state.toggleTheme)
    return (
        <IconButton sx={{ ml: 1 }} onClick={toggleTheme} color="inherit">
        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    )
}

export default ThemeSwitcher
