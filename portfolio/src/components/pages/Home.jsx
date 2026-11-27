import { Link as RouterLink } from "react-router-dom";
import { Box, Button, Paper, Typography } from "@mui/material";
import { ReactTyped as Typed } from "react-typed";
import { Fade } from "react-awesome-reveal";

import MyPic from "../assets/home.webp";
import SocialLinks from "../common/SocialLinks";
import { codingProfiles, fullName } from "../constants";
import "./style.css";

const center = { md: "left", xs: "center" };
const justify = { md: "flex-start", xs: "center" };

export default function Home() {
  return (
    <Fade direction="left" triggerOnce duration={600}>
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          py: { xs: 10, md: 6 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            gap: { xs: 4, md: 6 },
            maxWidth: 960,
            width: "100%",
          }}
        >
          <Box
            id="my-profile"
            component="img"
            src={MyPic}
            alt={`Portrait of ${fullName}`}
            width={350}
            height={350}
            fetchpriority="high"
            decoding="async"
            sx={{
              width: { sm: 350, xs: 240 },
              height: "auto",
              aspectRatio: "1 / 1",
              objectFit: "cover",
            }}
          />

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              px: 2,
              flex: "1 1 320px",
              maxWidth: 520,
            }}
          >
            <Typography
              component="h1"
              sx={{
                textAlign: center,
                fontWeight: 700,
                letterSpacing: "1px",
                fontSize: { xs: 34, sm: 44, md: 48 },
                lineHeight: 1.15,
              }}
            >
              {fullName}
            </Typography>

            <Typography
              component="p"
              sx={{
                textAlign: center,
                fontWeight: 500,
                fontSize: { xs: 22, sm: 28 },
                color: "secondary.main",
                minHeight: "1.5em",
              }}
            >
              <Typed
                strings={[
                  "React JS Developer",
                  "Frontend Developer",
                  "Next.js Developer",
                  "Software Developer",
                ]}
                typeSpeed={75}
                backSpeed={50}
                backDelay={1500}
                loop
              />
            </Typography>

            <Typography
              sx={{
                textAlign: center,
                lineHeight: 1.8,
                color: "text.secondary",
              }}
            >
              5+ years building scalable healthcare, HRMS and enterprise web
              apps. Based in Gujarat, India and happy to travel all over the
              world.
            </Typography>

            <Box sx={{ display: "flex", gap: 2, justifyContent: justify, flexWrap: "wrap", mt: 1 }}>
              <Button variant="contained" size="large" component={RouterLink} to="/app/portfolio">
                View my work
              </Button>
              <Button variant="outlined" color="secondary" size="large" component={RouterLink} to="/app/contact">
                Get in touch
              </Button>
            </Box>

            <SocialLinks sx={{ justifyContent: justify }} />

            {/* Coding profiles */}
            <Box sx={{ display: "flex", gap: 2, justifyContent: justify, flexWrap: "wrap" }}>
              {codingProfiles.map(({ name, count, url }) => (
                <Paper
                  key={name}
                  component="a"
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outlined"
                  sx={{
                    px: 3,
                    py: 1.5,
                    minWidth: 140,
                    textAlign: "center",
                    textDecoration: "none",
                    color: "inherit",
                    borderRadius: 3,
                    transition: "transform .2s, border-color .2s",
                    "&:hover": { transform: "translateY(-3px)", borderColor: "secondary.main" },
                  }}
                >
                  <Typography sx={{ fontSize: 32, fontWeight: 800, lineHeight: 1.2 }}>
                    {count}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {name} problems
                  </Typography>
                </Paper>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Fade>
  );
}
