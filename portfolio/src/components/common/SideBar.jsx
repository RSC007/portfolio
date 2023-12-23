import {
  Toolbar,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import AdbIcon from "@mui/icons-material/Adb";
import BookIcon from "@mui/icons-material/Book";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";

import { matchPath, useLocation, useNavigate } from "react-router-dom";

const color = "#4c4c4c";
const menuItems = [
  { path: "home", title: "Home", icon: <HomeIcon sx={{ color }} /> },
  { path: "about", title: "About", icon: <AttachFileIcon sx={{ color }} /> },
  {
    path: "projects",
    title: "Projects",
    icon: <AccountTreeIcon sx={{ color }} />,
  },
  { path: "skills", title: "Skills", icon: <AdbIcon sx={{ color }} /> },
  { path: "blog", title: "Blog", icon: <BookIcon sx={{ color }} /> },
  {
    path: "contact",
    title: "Contact",
    icon: <ConnectWithoutContactIcon sx={{ color }} />,
  },
];

export default function SideBar() {
  const { pathname } = useLocation();

  const navigate = useNavigate();
  const isActiveRoot = (path = "") =>
    path ? !!matchPath({ path, end: false }, pathname) : false;
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
