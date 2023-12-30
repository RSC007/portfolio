import { Avatar, Box, Typography } from "@mui/material";
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
            sx={{
              width: "350px",
              height: "350px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Avatar
              alt="Image"
              src={MyPic}
              sx={{
                width: "300px",
                height: "300px",
                // border: "2px solid",
                // borderRadius: "50%",
              }}
            />
            {/* <Box
              sx={{
                width: "300px",
                height: "300px",
                border: "2px solid",
                borderRadius: "50%",
              }}
            ></Box> */}
          </Box>
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
                // typedRef={(typed) => typed}
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
              sx={{ fontWeight: 600, letterSpacing: "2px", color: "#767676" }}
            >
              Creative developer based in Gujarat, India and <br />
              happy to travel all over the World
            </Typography>

            <Box
              display="flex"
              gap="4px"
              alignItems="center"
              justifyContent="flex-start"
            >
              <Icon
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
                style={{
                  width: 44,
                  height: 22,
                  cursor: "pointer",
                }}
                icon="ph:twitter-logo-fill"
                onClick={() =>
                  onRedirect("https://twitter.com/RUSHIKE32714454")
                }
              />
              <Icon
                style={{
                  width: 44,
                  height: 22,
                  cursor: "pointer",
                }}
                icon="formkit:instagram"
                onClick={() =>
                  onRedirect("https://www.instagram.com/rs_chitte/")
                }
              />
              <Icon
                style={{
                  width: 44,
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
          </Box>
        </Box>
      </Box>
    </Fade>
  );
}
