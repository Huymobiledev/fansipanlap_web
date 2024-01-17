import { createTheme } from '@mui/material/styles';
import { createBreakpoints } from "@mui/system";
const breakpoints = createBreakpoints({});

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

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#F8F8F8'
    },
    primary: {
      main: '#343434',
    },
    secondary: {
      main: '#898989',
    },
  },
  typography: {
    fontFamily: `"Montserrat", "Helvetica", "Arial", sans-serif`,
    fontWeightRegular: 500,
    htmlFontSize: 10,
    subtitle1:{
      [breakpoints.down('md')]: {
        fontSize: 12
      },
      [breakpoints.down('sm')]: {
        fontSize: 10
      },
    },
    h2:{
      [breakpoints.down('md')]: {
        fontSize: 42
      },
      [breakpoints.down('sm')]: {
        fontSize: 36
      },
    },
    h5:{
      [breakpoints.down('md')]: {
        fontSize: 16
      },
      [breakpoints.down('sm')]: {
        fontSize: 14
      },
    },
    h6:{
      [breakpoints.down('md')]: {
        fontSize: 20
      },
      [breakpoints.down('sm')]: {
        fontSize: 16
      },
    },
    body1:{
      [breakpoints.down('md')]: {
        fontSize: 16
      },
      [breakpoints.down('sm')]: {
        fontSize: 14
      },
    }
  },
  components: {
    MuiButtonBase: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          fontFamily: `"Montserrat", "Helvetica", "Arial", sans-serif`,
        },
      },
    },
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

export default lightTheme;