import { useState } from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Menu,
  List,
  ListItem,
} from "@mui/material";
import { Fade } from "react-reveal";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Icon } from "@iconify/react";

export default function Projects() {
  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

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
              marginBottom: 5,
            }}
          >
            PortFolio/Experiance
          </Typography>

          <Box>
            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography sx={{ width: "33%", flexShrink: 0 }}>
                  Bigscal Technologies (On-Site)
                </Typography>
                <Typography sx={{ color: "text.secondary" }}>
                  June-2021 To Dec-2022
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="h5" fontWeight={600}>
                  CEM & GNE admin panel
                </Typography>
                <List>
                  <ListItem>
                    <Typography>
                      Completed the internship in frontend up to 6 month.
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography>
                      Worked on two admin panels: GNE and CEM, leveraging a
                      variety of technologies including Formik, Ag-Grid,
                      Bootstrap & RTK.{" "}
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography>
                      In the GNE (Gifts and Entertainment) project, an admin
                      panel allowed individuals at various organizational levels
                      to assign ranks to clients. These rankings were used by
                      stakeholders to determine the distribution of gifts and
                      vacation packages. In the CEM (Contact Event Management)
                      project, events were organized to distribute these prizes
                      to clients.{" "}
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography>
                      Regularly attended stand-up calls with the Project
                      /manager to discuss project progress updates, and task
                      assignment.{" "}
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography>
                      Demonstrated strong proficiency in React development,
                      utilizing the latest industry best practices.
                    </Typography>
                  </ListItem>
                </List>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
              >
                <Typography sx={{ width: "33%", flexShrink: 0 }}>
                  ContactPoint360 (WFH)
                </Typography>
                <Typography sx={{ color: "text.secondary" }}>
                  Dec-2022 To Present
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  variant="h5"
                  fontWeight={600}
                  sx={{
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    window.open(
                      "https://contactpoint360.h2r.ai/app/dashboard",
                      "_blank"
                    );
                  }}
                >
                  <Icon
                    icon="prime:link"
                    style={{
                      color: "#6464af",
                      width: "22px",
                      height: "22px",
                      verticalAlign: "middle",
                      cursor: "pointer",
                    }}
                  />{" "}
                  H2R (Hire to Rehire)
                </Typography>
                <List>
                  <ListItem>
                    <Typography>
                      Developed an advanced HRMS system using React, Typescript,
                      Material UI, and other cutting-edge technologies.
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography>
                      This system effectively streamlines HR operations,
                      encompassing the entire spectrum from streamlined hiring
                      procedures to smooth offboarding processes.{" "}
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography>
                      Created role-based dashboards for HR (H2R) and feedback,
                      serving both administrators and employees effectively
                      (Module: Alert (Email distribute), Time Off(Leave
                      management) other more).{" "}
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography>
                      Collaborate with back-end developers and product managers
                      to implement new features.{" "}
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography>
                      Developed an advanced HRMS system using React, Typescript,
                      Material UI, and other cutting-edge technologies.
                    </Typography>
                  </ListItem>
                </List>
                <Typography
                  variant="h5"
                  fontWeight={600}
                  sx={{ cursor: "pointer" }}
                  onClick={() => {
                    window.open(
                      "http://dvcareer.cp360apps.com/About",
                      "_blank"
                    );
                  }}
                >
                  <Icon
                    icon="prime:link"
                    style={{
                      color: "#6464af",
                      width: "22px",
                      height: "22px",
                      verticalAlign: "middle",
                      cursor: "pointer",
                    }}
                  />{" "}
                  Careers
                </Typography>
                <List>
                  <ListItem>
                    <Typography>
                      Provided the new design and code refactor support. using
                      the technologies like Material UI, Axios.
                    </Typography>
                  </ListItem>
                </List>
              </AccordionDetails>
            </Accordion>
          </Box>
        </Box>
      </Box>
    </Fade>
  );
}
