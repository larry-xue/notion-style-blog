import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
    },
    secondary: {
      main: '#f48fb1',
    },
    background: {
      default: '#121212',
      paper: '#242424',
    },
  },
  typography: {
    fontSize: 12
  }
});

export default theme;