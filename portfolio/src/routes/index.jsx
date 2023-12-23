import { useRoutes } from "react-router-dom";

import Home from "../components/pages/Home";
import Layout from "../components/Common/Layout";
import Projects from "../components/pages/Projects";
import About from "../components/pages/About";
import Skills from "../components/pages/Skills";
import Blogs from "../components/pages/Blogs";
import Contact from "../components/pages/Contact";

export const Router = () => {
  return useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "projects",
          element: <Projects />,
        },
        {
          path: "skills",
          element: <Skills />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "blog",
          element: <Blogs />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
      ],
    },
  ]);
};
