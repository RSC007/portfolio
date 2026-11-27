import { useState } from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  List,
  ListItem,
} from "@mui/material";
import { Fade } from "react-awesome-reveal";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Icon } from "@iconify/react";

import { projects } from "../constants";

export default function Projects() {
  const [expanded, setExpanded] = useState("panel0");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Fade direction="left" triggerOnce>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          paddingY: "56px",
        }}
      >
        <Box sx={{ width: "90%" }}>
          <Typography
            sx={{
              fontSize: "24px",
              fontWeight: 700,
              letterSpacing: "2px",
              marginBottom: 5,
            }}
          >
            PortFolio/Experiance
          </Typography>

          <Box>
            {projects.map((job, ind) => (
              <Accordion
                key={job.company}
                expanded={expanded === `panel${ind}`}
                onChange={handleChange(`panel${ind}`)}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`panel${ind}bh-content`}
                  id={`panel${ind}bh-header`}
                  sx={{
                    "& .MuiAccordionSummary-content": {
                      flexWrap: "wrap",
                    },
                  }}
                >
                  <Typography sx={{ width: "33%", flexShrink: 0 }}>
                    {job.company}
                  </Typography>
                  <Typography sx={{ color: "text.secondary" }}>
                    {job.period}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  {job.products.map((product) => (
                    <Box key={product.name}>
                      <Typography
                        variant="h5"
                        fontWeight={600}
                        sx={{ cursor: product.url ? "pointer" : "default" }}
                        onClick={() =>
                          product.url && window.open(product.url, "_blank")
                        }
                      >
                        {product.url && (
                          <>
                            <Icon
                              icon="prime:link"
                              style={{
                                color: "#6464af",
                                width: "22px",
                                height: "22px",
                                verticalAlign: "middle",
                              }}
                            />{" "}
                          </>
                        )}
                        {product.name}
                      </Typography>
                      <List>
                        {product.points.map((point) => (
                          <ListItem key={point}>
                            <Typography>{point}</Typography>
                          </ListItem>
                        ))}
                      </List>
                    </Box>
                  ))}
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Box>
      </Box>
    </Fade>
  );
}
