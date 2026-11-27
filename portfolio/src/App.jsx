import { useContext, useMemo } from "react";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { amber, grey } from "@mui/material/colors";

import { Router } from "./routes";
import { Context } from "./components/contextApi";
import "./components/pages/style.css";

function App() {
  const {
    theme: { theme },
  } = useContext(Context);

  const MUItheme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: theme,
          ...(theme === "light"
            ? {
                primary: amber,
                // Darker accent for text/icons: amber on white fails contrast.
                secondary: { main: "#8a5a00" },
                divider: amber[200],
                text: {
                  primary: "#000000",
                  secondary: "#5f6563",
                },
              }
            : {
                primary: { main: amber[400] },
                secondary: { main: amber[400] },
                divider: grey[700],
                background: {
                  default: grey[900],
                  paper: "#2a2a2a",
                },
                text: {
                  primary: "#fff",
                  secondary: grey[400],
                },
              }),
        },
        shape: { borderRadius: 10 },
        components: {
          MuiButton: {
            defaultProps: { disableElevation: true },
            styleOverrides: { root: { textTransform: "none", fontWeight: 600 } },
          },
        },
      }),
    [theme]
  );

  return (
    <ThemeProvider theme={MUItheme}>
      <CssBaseline />
      <Router />
    </ThemeProvider>
  );
}

export default App;
