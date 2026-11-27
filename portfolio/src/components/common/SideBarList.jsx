import { NavLink } from "react-router-dom";
import {
  Avatar,
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import ContactMailOutlinedIcon from "@mui/icons-material/ContactMailOutlined";

import SocialLinks from "./SocialLinks";
import { designation, fullName } from "../constants";

const menuItems = [
  { path: "/app/home", title: "Home", Icon: HomeOutlinedIcon },
  { path: "/app/about", title: "About", Icon: PersonOutlineIcon },
  { path: "/app/portfolio", title: "Portfolio", Icon: WorkOutlineIcon },
  { path: "/app/contact", title: "Contact", Icon: ContactMailOutlinedIcon },
];

export default function SideBarList({ onNavigate }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        px: 3,
        py: 4,
        gap: 3,
      }}
    >
      <Box sx={{ textAlign: "center" }}>
        <Avatar
          sx={{
            width: 64,
            height: 64,
            mx: "auto",
            mb: 1.5,
            bgcolor: "primary.main",
            color: "primary.contrastText",
            fontWeight: 700,
            fontSize: 24,
          }}
        >
          RC
        </Avatar>
        <Typography sx={{ fontWeight: 700, fontSize: 22, letterSpacing: "3px" }}>
          {fullName.split(" ")[0]}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {designation}
        </Typography>
      </Box>

      <List sx={{ width: "100%" }}>
        {menuItems.map(({ path, title, Icon }) => (
          <ListItemButton
            key={path}
            component={NavLink}
            to={path}
            onClick={onNavigate}
            sx={{
              borderRadius: 2,
              mb: 0.5,
              color: "text.secondary",
              "& .MuiListItemIcon-root": { color: "inherit", minWidth: 40 },
              "&.active": {
                color: "text.primary",
                bgcolor: "action.selected",
                fontWeight: 600,
              },
              "&.active .MuiListItemIcon-root": { color: "secondary.main" },
            }}
          >
            <ListItemIcon>
              <Icon />
            </ListItemIcon>
            <ListItemText
              primary={title}
              primaryTypographyProps={{ fontWeight: "inherit" }}
            />
          </ListItemButton>
        ))}
      </List>

      <SocialLinks size="small" sx={{ justifyContent: "center" }} />
    </Box>
  );
}
