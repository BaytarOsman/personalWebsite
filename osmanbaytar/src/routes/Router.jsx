import React from "react";
import { useRoutes } from "react-router-dom";
import HomeView from "../views/HomeView";
import AboutView from "../views/AboutView";
import SkillsView from "../views/SkillsView";
import SocialsView from "../views/SocialsView";
import ContactView from "../views/ContactView";

const Router = () => {
  const routes = useRoutes([
    { path: "/", element: <HomeView /> },
    { path: "*", element: <HomeView /> },
    { path: "/about", element: <AboutView /> },
    { path: "/skills", element: <SkillsView /> },
    { path: "/socials", element: <SocialsView /> },
    { path: "/contact", element: <ContactView /> },
  ]);
  return routes;
};

export default Router;
