import { useContext, useState } from "react";
import {
  Box,
  Drawer,
  IconButton,
  Tooltip,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";

import SideBarList from "./SideBarList";
import { Context } from "../contextApi";

const drawerWidth = 300;

const floatingButtonSx = {
  position: "fixed",
  top: 12,
  zIndex: (t) => t.zIndex.appBar,
  bgcolor: "background.paper",
  boxShadow: 2,
  "&:hover": { bgcolor: "background.paper" },
};

export default function SideBar({ children }) {
  const theme = useTheme();
  // noSsr reads the media query synchronously, so the drawer
  // doesn't flash open on phones during the first render.
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"), { noSsr: true });
  const [mobileOpen, setMobileOpen] = useState(false);

  const {
    theme: { theme: mode, toggleTheme },
  } = useContext(Context);

  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <Box
        component="nav"
        aria-label="Main navigation"
        sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
      >
        <Drawer
          variant={isDesktop ? "permanent" : "temporary"}
          open={isDesktop || mobileOpen}
          onClose={() => setMobileOpen(false)}
          ModalProps={{ keepMounted: true }}
          sx={{
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
              justifyContent: "center",
            },
          }}
        >
          <SideBarList onNavigate={() => setMobileOpen(false)} />
        </Drawer>
      </Box>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          minWidth: 0,
          minHeight: "100vh",
          px: { xs: 2, sm: 4, md: 6 },
          overflowX: "clip",
        }}
      >
        {!isDesktop && (
          <IconButton
            aria-label="Open navigation menu"
            onClick={() => setMobileOpen(true)}
            sx={{ ...floatingButtonSx, left: 12 }}
          >
            <MenuIcon />
          </IconButton>
        )}
        <Tooltip title={`Switch to ${mode === "dark" ? "light" : "dark"} mode`}>
          <IconButton
            aria-label={`Switch to ${mode === "dark" ? "light" : "dark"} mode`}
            onClick={toggleTheme}
            sx={{ ...floatingButtonSx, right: 12 }}
          >
            {mode === "dark" ? <LightModeOutlinedIcon /> : <DarkModeOutlinedIcon />}
          </IconButton>
        </Tooltip>
        {children}
      </Box>
    </Box>
  );
}
