import { useState } from "react";
import {
  Box,
  Drawer,
  CssBaseline,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Outlet } from "react-router-dom";

import SideBar from "./SideBar";

const drawerWidth = 300;

export default function Layout({ ...props }) {
  const { window: wd } = props;

  const container = wd !== undefined ? () => wd().document.body : undefined;

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <SideBar>
        <Outlet />
      </SideBar>
    </>
  );
}
