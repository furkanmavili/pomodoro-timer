import { amber, deepOrange, grey } from '@mui/material/colors';

export const getDesignTokens = (mode) => ({
    typography: {
        "fontFamily": `"Dosis", "Roboto", "Helvetica", "Arial", sans-serif`,
        "fontSize": 14,
        "fontWeightLight": 400,
        "fontWeightRegular": 400,
        "fontWeightMedium": 700
    },
    palette: {
      mode,
      ...(mode === 'light'
        ? {
            // palette values for light mode
            primary: {
                main: "#A78BFA"
            },
            divider: amber[200],
            text: {
              primary: grey[900],
              secondary: grey[800],
            },
          }
        : {
            // palette values for dark mode
            primary: {
                main: "#818CF8"
            } ,
            divider: deepOrange[700],
            background: {
              default: "hsl(221, 39%, 11%)",
              paper: "	hsl(221, 39%, 13%)",
            },
            text: {
              primary: '#fff',
              secondary: grey[500],
            },
          }),
    },
  });

