import { useRoutes } from "react-router-dom";

import Home from "../components/pages/Home";
import Layout from "../components/Common/Layout";
import Projects from "../components/pages/Projects";
import About from "../components/pages/About";
import Contact from "../components/pages/Contact";

export const Router = () => {
  return useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
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
  ]);
};
