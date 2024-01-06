import { Navigate, useRoutes } from "react-router-dom";

import Home from "../components/pages/Home";
import Layout from "../components/Common/Layout";
import Projects from "../components/pages/Projects";
import About from "../components/pages/About";
import Contact from "../components/pages/Contact";
import Page404 from "../components/pages/Page404";

export const Router = () => {
  return useRoutes([
    {
      path: "/",
      element: <Navigate to="/app/home" replace />,
    },
    {
      path: "/app",
      element: <Navigate to="/app/home" replace />,
    },
    {
      path: "/app",
      element: <Layout />,
      children: [
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "portfolio",
          element: <Projects />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
      ],
    },
    { path: "/", element: <Navigate to="/app" replace /> },
    { path: "*", element: <Navigate to="/404" replace /> },
    { path: "/404", element: <Page404 /> },
  ]);
};
