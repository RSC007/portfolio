import { useContext, useEffect, useState } from "react";
import {
  Toolbar,
  useMediaQuery,
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
    height: "100%",
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

  const isToggleSideBar = useMediaQuery("(min-width:900px)");

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

  useEffect(() => {
    setOpen(isToggleSideBar);
  }, [isToggleSideBar]);

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
          <IconButton
            sx={{
              position: "absolute",
              top: "10px",
              right: "10px",
              zIndex: 999,
              display: { md: "none" },
            }}
            onClick={handleDrawerClose}
          >
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
          <SideBarList onClose={handleDrawerClose} />
        </Drawer>
        <Main open={open}>
          <IconButton
            color="inherit"
            onClick={handleDrawerOpen}
            sx={{
              position: "absolute",
              top: "10px",
              left: "15px",
              mr: 2,
              zIndex: 999,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              position: "absolute",
              top: "10px",
              right: "15px",
              zIndex: 999,
              height: "100vh",
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
