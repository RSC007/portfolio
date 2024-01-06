import { useContext, useState } from "react";
import { Box, ThemeProvider, createTheme } from "@mui/material";

import { Router } from "./routes";
import { Context } from "./components/contextApi";
import "../src/components/pages/style.css";
import { amber, deepOrange, green, grey, purple } from "@mui/material/colors";

function App() {
  const context = useContext(Context);
  const {
    theme: { theme },
  } = context;
  // Animation
  const [cursorX, setCursorX] = useState();
  const [cursorY, setCursorY] = useState();

  window.addEventListener("mousemove", (e) => {
    setCursorX(e.clientX);
    setCursorY(e.clientY);
  });

  const MUItheme = createTheme({
    palette: {
      mode: theme,
      ...(theme === "light"
        ? {
            primary: amber,
            divider: amber[200],
            text: {
              primary: grey[900],
              secondary: grey[800],
            },
          }
        : {
            primary: grey,
            divider: grey[700],
            background: {
              default: grey[900],
              paper: grey[900],
            },
            text: {
              primary: "#fff",
              secondary: grey[500],
            },
          }),
    },
  });

  return (
    <>
      <ThemeProvider theme={MUItheme}>
        <Box sx={{ display: "flex" }}>
          <Router />
        </Box>
        <div
          id="move-cursor"
          style={{
            left: cursorX + "px",
            top: cursorY + "px",
          }}
        />
      </ThemeProvider>
    </>
  );
}

export default App;
