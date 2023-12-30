import {
  Box,
  Typography,
  Divider,
  Grid,
  Button,
  Paper,
  LinearProgress,
} from "@mui/material";
import { Fade } from "react-reveal";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import {
  backgroundColor,
  bioList,
  coddingLanguage,
  language,
  knowledge,
  interest,
  experiance,
  education,
} from "../constants";

export default function About() {
  return (
    <Fade left>
      <Box
        sx={{
          width: "90%",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          backgroundColor: "#f8f8f8",
          paddingY: "56px",
        }}
      >
        <Box sx={{ width: "90%" }}>
          <Typography
            sx={{
              fontSize: "28px",
              fontWeight: 700,
              letterSpacing: "2px",
            }}
          >
            About Me
          </Typography>
          <Box
            sx={{
              width: "100%",
              height: "550px",
              border: "2px solid",
              marginBottom: "38px",
            }}
          ></Box>

          {/* Information  */}
          <Box marginBottom="56px">
            <Typography>Rushikesh Chitte</Typography>
            <Typography variant="subtitle2">JavaScript Developer</Typography>
            <Divider sx={{ marginY: 3 }} />

            <Typography marginBottom={2} variant="subtitle2">
              This is dummy test for experiance purpose. just checking
            </Typography>
            <Typography variant="subtitle2">
              This is dummy test for experiance purpose. just checking, This is
              dummy test for experiance purpose. just checking
            </Typography>
            <Divider sx={{ marginY: 3 }} />

            {/* Bio */}
            <Grid container rowGap={2} marginBottom={4}>
              {bioList?.map((info, ind) => (
                <Grid
                  itme
                  md={6}
                  key={ind}
                  sx={{ display: "flex", gap: "52px" }}
                >
                  <Typography sx={{ fontWeight: 600, flexBasis: "25%" }}>
                    {info?.title}:
                  </Typography>
                  <Typography sx={{ flexBasis: "75%" }}>
                    {info?.value}
                  </Typography>
                </Grid>
              ))}
            </Grid>

            <Button
              variant="contained"
              onClick={() => {
                window.open(
                  "https://drive.google.com/file/d/1T2VevKk_tVhiMKS_1PFVpv4XZ9rQ8zFi/view?usp=sharing"
                );
              }}
            >
              Download CV
            </Button>
          </Box>
        </Box>

        {/* Main Skills */}
        <Paper
          sx={{
            padding: `10%`,
            width: "100%",
            margin: "auto",
            minHeight: "350px",
            borderRadius: "12px",
          }}
        >
          <Grid container justifyContent="space-between">
            <Grid item md={5} xs={12}>
              <Typography sx={{ fontWeight: 700, letterSpacing: "2px" }}>
                Programming Skills
              </Typography>
              <Box>
                {coddingLanguage?.map((code, ind) => (
                  <ProgressBars data={code} ind={ind} />
                ))}
              </Box>
            </Grid>
            <Grid item md={5} xs={12}>
              <Typography sx={{ fontWeight: 700, letterSpacing: "2px" }}>
                Language Skills
              </Typography>
              <Box>
                {language?.map((lang, ind) => (
                  <ProgressBars data={lang} ind={ind} />
                ))}
              </Box>
            </Grid>
          </Grid>
        </Paper>

        {/* Knowledge Section */}
        <Box sx={{ width: "90%", marginY: "102px" }}>
          <Grid container spacing={2}>
            <Grid item md={6} xs={12}>
              <Typography sx={{ fontWeight: 700, letterSpacing: "2px" }}>
                Knowledge
              </Typography>
              <Box marginY={4}>
                {knowledge?.map((it, ind) => (
                  <Box
                    key={ind}
                    sx={{ display: "flex", gap: 1, marginBottom: 1 }}
                  >
                    <ArrowRightIcon /> <Typography>{it}</Typography>
                  </Box>
                ))}
              </Box>
            </Grid>
            <Grid item md={6} xs={12}>
              <Typography sx={{ fontWeight: 700, letterSpacing: "2px" }}>
                Interests
              </Typography>
              <Box marginY={4}>
                {interest?.map((it, ind) => (
                  <Box
                    key={ind}
                    sx={{ display: "flex", gap: 1, marginBottom: 1 }}
                  >
                    <ArrowRightIcon /> <Typography>{it}</Typography>
                  </Box>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* Education And Experiance */}
        <Paper
          sx={{
            padding: `10%`,
            width: "100%",
            margin: "auto",
            minHeight: "350px",
            borderRadius: "12px",
          }}
        >
          <Grid container justifyContent="space-between">
            <Grid item md={5} xs={12}>
              <Typography sx={{ fontWeight: 700, letterSpacing: "2px" }}>
                Experiance
              </Typography>
              <Box>
                {experiance?.map((exp, ind) => (
                  <>
                    <Divider sx={{ marginY: 3 }} />
                    <Box
                      key={ind}
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "16px",
                        marginBottom: 3,
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          paddingY: "4px",
                          paddingX: "8px",
                          borderRadius: "30%",
                          background: backgroundColor,
                          fontWeight: 600,
                        }}
                      >
                        {exp?.period}
                      </Box>
                      <Typography sx={{ fontWeight: 700, wordSpacing: "4px" }}>
                        {exp?.company}
                      </Typography>
                      <Typography variant="subtitle2">
                        {exp?.description}
                      </Typography>
                    </Box>
                  </>
                ))}
              </Box>
            </Grid>
            <Grid item md={5} xs={12}>
              <Typography sx={{ fontWeight: 700, letterSpacing: "2px" }}>
                Education
              </Typography>
              <Box>
                {education?.map((edu, ind) => (
                  <>
                    <Divider sx={{ marginY: 3 }} />
                    <Box
                      key={ind}
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "16px",
                        marginBottom: 3,
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          paddingY: "4px",
                          paddingX: "8px",
                          borderRadius: "30%",
                          background: backgroundColor,
                          fontWeight: 600,
                        }}
                      >
                        {edu?.period}
                      </Box>
                      <Typography sx={{ fontWeight: 700, wordSpacing: "4px" }}>
                        {edu?.collage}
                      </Typography>
                    </Box>
                  </>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Fade>
  );
}

const ProgressBars = ({ data, ind }) => (
  <Box marginTop={3} key={ind}>
    <Box marginBottom={1} display="flex" justifyContent="space-between">
      <Typography>{data?.title}</Typography>
      <Typography>{`${data?.value}%`}</Typography>
    </Box>
    <LinearProgress
      sx={{
        "& .MuiLinearProgress-bar": { background: "black" },
      }}
      variant="determinate"
      value={data?.value}
    />
  </Box>
);
