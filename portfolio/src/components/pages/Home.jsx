import { Avatar, Box, Paper, Typography } from "@mui/material";
import { Icon } from "@iconify/react";
import Typed from "react-typed";
import Fade from "react-reveal/Fade";

import MyPic from "../assets/Home.jpg";

import "./style.css";

export default function Home() {
  const onRedirect = (url = "") => {
    window.open(url, "_blank");
  };
  return (
    <Fade left>
      <Box
        sx={{
          margin: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            flexWrap: "wrap",
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
            id="my-profile"
            sx={{
              width: "350px",
              height: "auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            component="img"
            src={MyPic}
          ></Box>
          <Box display="flex" flexDirection="column" gap={2} paddingX={2}>
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
              sx={{
                fontWeight: 500,
                fontSize: 32,
                letterSpacing: "2px",
              }}
            >
              <Typed
                strings={[
                  "Frontend Developer",
                  "React Js Developer",
                  "Freelancer",
                ]}
                typeSpeed={75}
                backSpeed={75}
                loop={true}
              />
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{
                fontWeight: 600,
                lineHeight: 2,
                letterSpacing: "2px",
                color: "#767676",
              }}
            >
              Creative developer based in Gujarat, India and <br />
              happy to travel all over the World
            </Typography>

            <Box
              marginTop={2}
              display="flex"
              gap={2}
              alignItems="center"
              justifyContent="flex-start"
            >
              <Icon
                id="social-icon"
                style={{
                  width: 22,
                  height: 22,
                  cursor: "pointer",
                }}
                icon="line-md:linkedin"
                onClick={() =>
                  onRedirect(
                    "https://www.linkedin.com/in/rushikesh-chitte-26b786166/"
                  )
                }
              />
              <Icon
                id="social-icon"
                style={{
                  width: 22,
                  height: 22,
                  cursor: "pointer",
                }}
                icon="ph:twitter-logo-fill"
                onClick={() =>
                  onRedirect("https://twitter.com/RUSHIKE32714454")
                }
              />
              <Icon
                id="social-icon"
                style={{
                  width: 22,
                  height: 22,
                  cursor: "pointer",
                }}
                icon="formkit:instagram"
                onClick={() =>
                  onRedirect("https://www.instagram.com/rs_chitte/")
                }
              />
              <Icon
                id="social-icon"
                style={{
                  width: 22,
                  height: 22,
                  cursor: "pointer",
                }}
                icon="gg:facebook"
                onClick={() =>
                  onRedirect(
                    "https://www.facebook.com/profile.php?id=100009133947674"
                  )
                }
              />
            </Box>

            {/* Active Platform */}
            <Box sx={{ display: "flex", gap: 3 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  borderRadius: "12px",
                }}
              >
                <Typography variant="subtitle1" letterSpacing="4px">LeetCode</Typography>
                <Paper
                  sx={{
                    maxWidth: "100px",
                    height: "75px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "12px",
                    padding: "16px",
                    cursor: "pointer",
                    letterSpacing: "2px",
                  }}
                  onClick={() =>
                    onRedirect("https://leetcode.com/rushichitte1998/")
                  }
                >
                  <Typography letterSpacing="2px" fontSize="40px" fontWeight={800}>
                    76+
                  </Typography>
                </Paper>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  borderRadius: "12px",
                }}
              >
                <Typography variant="subtitle1" letterSpacing="4px">Codding Nijas</Typography>
                <Paper
                  sx={{
                    maxWidth: "100px",
                    height: "75px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "12px",
                    padding: "16px",
                    cursor: "pointer",
                  }}
                  onClick={() =>
                    onRedirect(
                      "https://www.codingninjas.com/studio/profile/025be801-4500-45a0-8d11-88f75b3cdf3f"
                    )
                  }
                >
                  <Typography letterSpacing="2px" fontSize="40px" fontWeight={800}>
                    132+
                  </Typography>
                </Paper>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Fade>
  );
}
