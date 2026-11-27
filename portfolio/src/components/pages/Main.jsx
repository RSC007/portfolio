import { Box } from "@mui/material";
import { Bounce } from "react-awesome-reveal";

import Home from "./sections/Home";

export default function Main() {
  return (
    <Box
      sx={{
        margin: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh"
      }}
    >
      <Bounce triggerOnce>
        <Home />
      </Bounce>
    </Box>
  );
}
