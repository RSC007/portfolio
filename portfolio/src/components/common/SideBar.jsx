import { useContext, useEffect, useState } from "react";
import {
  Toolbar,
  Typography,
  styled,
  useTheme,
  Box,
  CssBaseline,
  IconButton,
  Drawer,
  Divider,
} from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import Brightness6Icon from "@mui/icons-material/Brightness6";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import SideBarList from "./SideBarList";
import { Context } from "../contextApi";

const drawerWidth = 340;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingX: "56px",
    height: "auto",
    overflowY: "auto",
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function SideBar({ children }) {
  const theme = useTheme();
  const [open, setOpen] = useState(true);

  const context = useContext(Context);
  const {
    theme: { theme: mode, toggleTheme },
  } = context;

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  window.addEventListener("resize", (event) => {
    event.currentTarget.innerWidth >= 900 && setOpen(true);
  });

  return (
    <>
      <Box
        sx={{
          display: "flex",
          maxWidth: "100vw",
          width: "100%",
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "10px",
            left: "25px",
            display: { md: "none" },
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
        </Box>
        <CssBaseline />
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              height: "100vh",
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <Box
            sx={{
              position: "absolute",
              top: "10px",
              right: "10px",
              display: { md: "none" },
            }}
          >
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </Box>
          <SideBarList />
        </Drawer>
        <Main open={open}>
          <Box
            sx={{
              position: "absolute",
              top: "10px",
              right: "15px",
            }}
          >
            <IconButton color="inherit" onClick={toggleTheme}>
              {mode === "dark" ? <Brightness6Icon /> : <Brightness4Icon />}
            </IconButton>
          </Box>
          {children}
        </Main>
      </Box>
    </>
  );
}
