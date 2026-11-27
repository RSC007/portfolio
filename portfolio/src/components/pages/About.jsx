import {
  Box,
  Typography,
  Divider,
  Grid,
  Button,
  Paper,
  LinearProgress,
  Chip,
  Link,
} from "@mui/material";
import { Fade } from "react-awesome-reveal";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import DownloadIcon from "@mui/icons-material/Download";

import MyPic from "../assets/about.webp";
import {
  bioList,
  codingLanguage,
  language,
  knowledge,
  interest,
  experience,
  education,
  designation,
  summary,
  fullName,
  cvUrl,
} from "../constants";

const sectionTitleSx = { fontWeight: 700, letterSpacing: "2px", fontSize: 20 };
const cardSx = {
  p: { xs: 3, sm: 5, md: 6 },
  width: "100%",
  borderRadius: 3,
};

export default function About() {
  return (
    <Fade direction="left" triggerOnce duration={600}>
      <Box sx={{ maxWidth: 1100, mx: "auto", py: { xs: 10, md: 8 } }}>
        <Typography component="h1" sx={{ fontSize: 32, fontWeight: 700, letterSpacing: "2px", mb: 4 }}>
          About Me
        </Typography>

        {/* Intro */}
        <Grid container spacing={{ xs: 4, md: 6 }} sx={{ mb: 8 }}>
          <Grid item xs={12} md={5}>
            <Box
              component="img"
              src={MyPic}
              alt={`${fullName} standing on a bridge`}
              width={900}
              height={900}
              decoding="async"
              sx={{
                width: "100%",
                height: "auto",
                aspectRatio: "1 / 1",
                objectFit: "cover",
                borderRadius: 3,
                boxShadow: 4,
              }}
            />
          </Grid>
          <Grid item xs={12} md={7}>
            <Typography variant="h5" fontWeight={700}>
              {fullName}
            </Typography>
            <Typography color="secondary.main" fontWeight={600}>
              {designation}
            </Typography>
            <Divider sx={{ my: 3 }} />
            <Typography color="text.secondary" lineHeight={1.8}>
              {summary}
            </Typography>
            <Divider sx={{ my: 3 }} />

            <Grid container rowSpacing={1.5} columnSpacing={3} sx={{ mb: 4 }}>
              {bioList.map(({ title, value, href }) => (
                <Grid item xs={12} sm={6} key={title} sx={{ display: "flex", gap: 1.5 }}>
                  <Typography sx={{ fontWeight: 600, minWidth: 92 }}>{title}:</Typography>
                  {href ? (
                    <Link href={href} color="inherit" underline="hover" sx={{ wordBreak: "break-word" }}>
                      {value}
                    </Link>
                  ) : (
                    <Typography color="text.secondary" sx={{ wordBreak: "break-word" }}>
                      {value}
                    </Typography>
                  )}
                </Grid>
              ))}
            </Grid>

            <Button
              size="large"
              variant="contained"
              startIcon={<DownloadIcon />}
              href={cvUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV
            </Button>
          </Grid>
        </Grid>

        {/* Skills */}
        <Paper sx={cardSx}>
          <Grid container spacing={{ xs: 5, md: 8 }}>
            <Grid item md={6} xs={12}>
              <Typography sx={sectionTitleSx}>Programming Skills</Typography>
              {codingLanguage.map((item) => (
                <ProgressBar key={item.title} data={item} />
              ))}
            </Grid>
            <Grid item md={6} xs={12}>
              <Typography sx={sectionTitleSx}>Language Skills</Typography>
              {language.map((item) => (
                <ProgressBar key={item.title} data={item} />
              ))}
            </Grid>
          </Grid>
        </Paper>

        {/* Knowledge & interests */}
        <Grid container spacing={{ xs: 4, md: 8 }} sx={{ my: { xs: 6, md: 10 } }}>
          <Grid item md={6} xs={12}>
            <Typography sx={sectionTitleSx}>Knowledge</Typography>
            <BulletList items={knowledge} />
          </Grid>
          <Grid item md={6} xs={12}>
            <Typography sx={sectionTitleSx}>Interests</Typography>
            <BulletList items={interest} />
          </Grid>
        </Grid>

        {/* Experience & education */}
        <Paper sx={cardSx}>
          <Grid container spacing={{ xs: 5, md: 8 }}>
            <Grid item md={6} xs={12}>
              <Typography sx={sectionTitleSx}>Experience</Typography>
              {experience.map((exp) => (
                <TimelineItem key={exp.company} period={exp.period} title={exp.company}>
                  {exp.description}
                </TimelineItem>
              ))}
            </Grid>
            <Grid item md={6} xs={12}>
              <Typography sx={sectionTitleSx}>Education</Typography>
              {education.map((edu) => (
                <TimelineItem key={edu.collage} period={edu.period} title={edu.collage} />
              ))}
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Fade>
  );
}

const ProgressBar = ({ data }) => (
  <Box mt={3}>
    <Box mb={1} display="flex" justifyContent="space-between">
      <Typography>{data.title}</Typography>
      <Typography color="text.secondary">{`${data.value}%`}</Typography>
    </Box>
    <LinearProgress
      variant="determinate"
      value={data.value}
      aria-label={`${data.title} ${data.value}%`}
      sx={{ height: 8, borderRadius: 4 }}
    />
  </Box>
);

const BulletList = ({ items }) => (
  <Box mt={3}>
    {items.map((it) => (
      <Box key={it} sx={{ display: "flex", gap: 1, mb: 1.25 }}>
        <ArrowRightIcon sx={{ color: "secondary.main", flexShrink: 0 }} />
        <Typography>{it}</Typography>
      </Box>
    ))}
  </Box>
);

const TimelineItem = ({ period, title, children }) => (
  <>
    <Divider sx={{ my: 3 }} />
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 1.5 }}>
      <Chip label={period} size="small" color="secondary" variant="outlined" sx={{ fontWeight: 600 }} />
      <Typography sx={{ fontWeight: 700 }}>{title}</Typography>
      {children && (
        <Typography variant="body2" color="text.secondary" lineHeight={1.7}>
          {children}
        </Typography>
      )}
    </Box>
  </>
);
