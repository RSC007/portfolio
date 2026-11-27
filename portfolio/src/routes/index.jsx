import { lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";

import Layout from "../components/common/Layout";
import Page404 from "../components/pages/Page404";
import { pageLoaders } from "./loaders";

const Home = lazy(pageLoaders.home);
const About = lazy(pageLoaders.about);
const Projects = lazy(pageLoaders.portfolio);
const Contact = lazy(pageLoaders.contact);

export const Router = () =>
  useRoutes([
    { path: "/", element: <Navigate to="/app/home" replace /> },
    {
      path: "/app",
      element: <Layout />,
      children: [
        { index: true, element: <Navigate to="/app/home" replace /> },
        { path: "home", element: <Home /> },
        { path: "portfolio", element: <Projects /> },
        { path: "about", element: <About /> },
        { path: "contact", element: <Contact /> },
      ],
    },
    { path: "/404", element: <Page404 /> },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
