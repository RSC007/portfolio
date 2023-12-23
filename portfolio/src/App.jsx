import { Box, Toolbar } from "@mui/material";
import Layout from "./components/Common/Layout";
import { backgroundColor } from "./components/constants";
import { Router } from "./routes";

const drawerWidth = 300;

function App() {
  return (
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
  );
}

export default App;
