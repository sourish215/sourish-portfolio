import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#ffde59"
    },
  },
  typography: {
    fontFamily: [
      'Roboto Mono',
    ].join(','),
    h4:{
      // fontFamily: 'Raleway',
      fontWeight: 'bold',
    }
  },
});

export default theme;