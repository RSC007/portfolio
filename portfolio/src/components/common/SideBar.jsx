import {
  Toolbar,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { Icon } from "@iconify/react";

import { matchPath, useLocation, useNavigate } from "react-router-dom";

const color = "#4c4c4c";
const menuItems = [
  {
    path: "",
    title: "Home",
    icon: (
      <Icon icon="mdi:home" style={{ color, width: "22px", height: "22px" }} />
    ),
  },
  {
    path: "about",
    title: "About",
    icon: (
      <Icon
        icon="fontisto:person"
        style={{ color, width: "22px", height: "22px" }}
      />
    ),
  },
  {
    path: "portfolio",
    title: "Portfolio",
    icon: (
      <Icon
        icon="zondicons:portfolio"
        style={{ color, width: "22px", height: "22px" }}
      />
    ),
  },
  {
    path: "contact",
    title: "Contact",
    icon: (
      <Icon
        icon="fluent:contact-card-link-16-filled"
        style={{ color, width: "22px", height: "22px" }}
      />
    ),
  },
];

export default function SideBar() {
  const { pathname } = useLocation();

  const navigate = useNavigate();
  const isActiveRoot = (path = "") =>
    path ? !!matchPath({ path, end: false }, pathname) : true;
  return (
    <>
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: "24px",
          letterSpacing: "4px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        JavaScript
      </Typography>
      <Toolbar
        sx={{
          justifyContent: "center",
          "& .MuiPaper-root": {
            justifyContent: "center",
          },
        }}
      >
        <List>
          {menuItems.map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton onClick={() => navigate(item?.path)}>
                <ListItemIcon>{item?.icon}</ListItemIcon>
                <ListItemText
                  sx={{
                    color: isActiveRoot(item?.path) ? "black" : "#9f8f8f",
                  }}
                  primary={item?.title}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Toolbar>
    </>
  );
}
