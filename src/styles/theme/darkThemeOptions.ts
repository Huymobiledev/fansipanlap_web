import { createTheme } from '@mui/material/styles';
import type { } from '@mui/lab/themeAugmentation';

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    xxl: true;
    qhd: true;
    uhd: true;
  }
}

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#1C1C24'
    },
    primary: {
      main: '#333333',
    },
    secondary: {
      main: '#555555',
    },
  },
  typography: {
    fontFamily: `"Montserrat", "Helvetica", "Arial", sans-serif`,
    fontWeightRegular: 500,
    htmlFontSize: 10,
  },
  spacing: 10,

  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      xxl: 2048,
      qhd: 2560,
      uhd: 3840,
    },
  },

});

export default darkTheme;