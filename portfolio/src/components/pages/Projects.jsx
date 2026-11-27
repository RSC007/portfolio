import { useState } from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Link,
} from "@mui/material";
import { Fade } from "react-awesome-reveal";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

import { projects } from "../constants";

export default function Projects() {
  const [expanded, setExpanded] = useState(0);

  return (
    <Fade direction="left" triggerOnce duration={600}>
      <Box sx={{ maxWidth: 1100, mx: "auto", py: { xs: 10, md: 8 } }}>
        <Typography component="h1" sx={{ fontSize: 32, fontWeight: 700, letterSpacing: "2px", mb: 1 }}>
          Portfolio &amp; Experience
        </Typography>
        <Typography color="text.secondary" sx={{ mb: 5 }}>
          Products I&apos;ve built and shipped, grouped by company.
        </Typography>

        {projects.map((job, ind) => (
          <Accordion
            key={job.company}
            expanded={expanded === ind}
            onChange={(_, isExpanded) => setExpanded(isExpanded ? ind : false)}
            disableGutters
            sx={{ mb: 2, borderRadius: 3, "&:before": { display: "none" }, overflow: "hidden" }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${ind}-content`}
              id={`panel${ind}-header`}
              sx={{ px: { xs: 2, sm: 3 }, py: 1 }}
            >
              <Box sx={{ display: "flex", flexWrap: "wrap", columnGap: 3, rowGap: 0.5, alignItems: "baseline" }}>
                <Typography component="h2" sx={{ fontWeight: 700, fontSize: 18 }}>
                  {job.company}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {job.period}
                </Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails sx={{ px: { xs: 2, sm: 3 }, pb: 3 }}>
              {job.products.map((product) => (
                <Box key={product.name} sx={{ "&:not(:first-of-type)": { mt: 4 } }}>
                  <Typography component="h3" variant="h6" fontWeight={600}>
                    {product.url ? (
                      <Link
                        href={product.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        underline="hover"
                        color="inherit"
                        sx={{ display: "inline-flex", alignItems: "center", gap: 1 }}
                      >
                        {product.name}
                        <OpenInNewIcon fontSize="small" sx={{ color: "secondary.main" }} />
                      </Link>
                    ) : (
                      product.name
                    )}
                  </Typography>
                  <Box
                    component="ul"
                    sx={{
                      pl: 2.5,
                      mt: 1.5,
                      mb: 0,
                      "& li": { mb: 1, lineHeight: 1.7, color: "text.secondary" },
                      "& li::marker": { color: "secondary.main" },
                    }}
                  >
                    {product.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </Box>
                </Box>
              ))}
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Fade>
  );
}
