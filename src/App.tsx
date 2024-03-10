import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { ThemeProvider } from "@mui/material";
import theme from "./config/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box className="App">
        <CssBaseline />
        <RouterProvider router={router} />
      </Box>
    </ThemeProvider>
  );
}

export default App;
