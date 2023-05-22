import { lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";

// lazy
const Store = lazy(() => import("@/pages/Store/Store"));
const Home = lazy(() => import("@/pages/Home/Home"));
const About = lazy(() => import("@/pages/About/About"));

const Router = () => {
  const route = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/store",
      element: <Store />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "*",
      element: <Navigate to="/" />,
    },
  ]);

  return route;
};

export default Router;
