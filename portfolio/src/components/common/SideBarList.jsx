import React from "react";
import { Icon } from "@iconify/react";
import { matchPath, useLocation, useNavigate } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@emotion/react";

const menuItems = [
  {
    path: "/app/home",
    title: "Home",
    icon: <Icon icon="mdi:home" style={{ width: "22px", height: "22px" }} />,
  },
  {
    path: "/app/about",
    title: "About",
    icon: (
      <Icon icon="fontisto:person" style={{ width: "22px", height: "22px" }} />
    ),
  },
  {
    path: "/app/portfolio",
    title: "Portfolio",
    icon: (
      <Icon
        icon="zondicons:portfolio"
        style={{ width: "22px", height: "22px" }}
      />
    ),
  },
  {
    path: "/app/contact",
    title: "Contact",
    icon: (
      <Icon
        icon="fluent:contact-card-link-16-filled"
        style={{ width: "22px", height: "22px" }}
      />
    ),
  },
];

export default function SideBarList({ onClose }) {
  const { pathname } = useLocation();
  const theme = useTheme();

  const matches = useMediaQuery("(max-width:900px)");

  const navigate = useNavigate();
  const isActiveRoot = (path = "") =>
    path ? !!matchPath({ path, end: false }, pathname) : true;

  const onTabSelect = (path) => {
    navigate(path);
    matches && onClose();
  };

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
        Rushikesh
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
              <ListItemButton onClick={() => onTabSelect(item?.path)}>
                <ListItemIcon
                  sx={{
                    "&.MuiListItemIcon-root": {
                      color:
                        theme?.palette?.text[
                          isActiveRoot(item?.path) ? "primary" : "secondary"
                        ],
                    },
                  }}
                >
                  {item?.icon}
                </ListItemIcon>
                <ListItemText
                  sx={{
                    "& .MuiTypography-root": {
                      color:
                        theme?.palette?.text[
                          isActiveRoot(item?.path) ? "primary" : "secondary"
                        ],
                    },
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
