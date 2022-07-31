import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#ffde59',
    },
    secondary: {
      main: '#000',
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
  },
});

export default theme;