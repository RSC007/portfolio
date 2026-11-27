import { Suspense, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Box, CircularProgress } from "@mui/material";

import SideBar from "./SideBar";
import { prefetchPages } from "../../routes/loaders";

const titles = {
  "/app/home": "Rushikesh Chitte | React JS Developer",
  "/app/about": "About | Rushikesh Chitte",
  "/app/portfolio": "Portfolio | Rushikesh Chitte",
  "/app/contact": "Contact | Rushikesh Chitte",
};

const PageLoader = () => (
  <Box
    sx={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <CircularProgress aria-label="Loading page" />
  </Box>
);

export default function Layout() {
  const { pathname } = useLocation();

  // Scroll to top and update the tab title on every route change.
  useEffect(() => {
    window.scrollTo(0, 0);
    if (titles[pathname]) document.title = titles[pathname];
  }, [pathname]);

  // Once the first page is up, quietly fetch the other pages so
  // navigating between them is instant.
  useEffect(() => {
    const idle =
      window.requestIdleCallback || ((cb) => setTimeout(cb, 1500));
    const id = idle(prefetchPages);
    return () => (window.cancelIdleCallback || clearTimeout)(id);
  }, []);

  return (
    <SideBar>
      <Suspense fallback={<PageLoader />}>
        <Outlet />
      </Suspense>
    </SideBar>
  );
}
