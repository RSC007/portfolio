import { Box, Typography } from "@mui/material";
import Fade from "react-reveal/Fade";
export default function Home() {
  return (
    <Fade left>
      <Box
        sx={{
          margin: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 4,
            minHeight: "600px",
            height: "100%",
            maxWidth: "900px",
            width: "100%",
          }}
        >
          <Box
            sx={{
              width: "250px",
              height: "250px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: "200px",
                height: "200px",
                border: "2px solid",
                borderRadius: "50%",
              }}
            ></Box>
          </Box>
          <Box>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 600,
                letterSpacing: "2px",
                textDecoration: "underline",
              }}
            >
              Rushikesh Chitte
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: 600, letterSpacing: "2px" }}
            >
              I have some css and js files that I try to import into a view in
              React with vite so that it loads the styles, but it doesnt load,
              and when I enter the view, I have to comment and uncomment the
              import in code for the styles to be read.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Fade>
  );
}
