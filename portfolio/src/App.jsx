import { useState } from "react";
import { Box, Toolbar } from "@mui/material";
import Layout from "./components/Common/Layout";
import { backgroundColor } from "./components/constants";
import { Router } from "./routes";
import "../src/components/pages/style.css";
import { useLocation } from "react-router-dom";

function App() {
  // Animation
  const loacation = useLocation();
  const [cursorX, setCursorX] = useState();
  const [cursorY, setCursorY] = useState();

  window.addEventListener("mousemove", (e) => {
    setCursorX(e.clientX);
    setCursorY(e.clientY);
  });

  const isSidebar = loacation?.pathname?.startsWith("/app");
  const drawerWidth = isSidebar ? 300 : 0;
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Layout drawerWidth={drawerWidth} />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            margin: 0,
            padding: 0,
            background: backgroundColor,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          {/* <Toolbar /> */}
          <Router />
        </Box>
      </Box>
      <div
        id="move-cursor"
        style={{
          left: cursorX + "px",
          top: cursorY + "px",
        }}
      />
    </>
  );
}

export default App;
