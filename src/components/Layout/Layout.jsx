import React, { useState } from "react";
import "./Layout.css";
import { BiChevronsLeft, BiChevronsRight } from "react-icons/bi";
import Menus from "../Menu/Menus";
import { useTheme } from "../../context/ThemeContext.jsx";
import { BsMoonStarsFill, BsSun } from "react-icons/bs";
import Slide from "react-reveal/Slide";
import Home from "./../../pages/home/Home";
import About from "./../../pages/about/About";
import TechStack from "./../../pages/techstack/TechStack";
import Projects from "./../../pages/projects/Projects";
import Contact from "./../../pages/contact/Contact";

const Layout = ({ children }) => {
  const [theme, setTheme] = useTheme();

  const [toggle, setToggle] = useState(false);

  const handleToggler = () => {
    setToggle(!toggle);
  };
  const handleClose = () => {
    setToggle(false);
  };

  const handleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };

  // for active component id
  const [activeComponentId, setActiveComponentId] = useState("home");

  const homePage = () => {
    setActiveComponentId("home");
    handleClose();
  };
  const aboutPage = () => {
    setActiveComponentId("about");
    handleClose();
  };
  const expriencePage = () => {
    setActiveComponentId("exprience");
    handleClose();
  };
  const projectsPage = () => {
    setActiveComponentId("projects");
    handleClose();
  };
  const contactPage = () => {
    setActiveComponentId("contact");
    handleClose();
  };

  return (
    <>
      <div className="d-flex">
        <div className="sidebar-section d-flex position-absolute z-1 ">
          <div className="whole-iconbar">
            <div className="toggle-icons d-block d-lg-none position-fixed z-1">
              <p onClick={handleToggler} className="border border-4 ">
                {toggle ? (
                  <BiChevronsLeft size={40} />
                ) : (
                  <BiChevronsRight size={40} />
                )}
              </p>
            </div>
          </div>
          <Slide left>
            <div
              id={theme}
              className={
                toggle ? "sidebar whole-iconbar " : "sidebar d-none d-lg-block "
              }
            >
              <Menus
                homePage={homePage}
                aboutPage={aboutPage}
                expriencePage={expriencePage}
                projectsPage={projectsPage}
                contactPage={contactPage}
              />
            </div>
          </Slide>
        </div>
        <div className="w-100 position-relative z-0" onClose={handleClose}>
          <main>
            <div id={theme} onClick={handleClose}>
              <Home isActive={activeComponentId === "home"} />
              <About isActive={activeComponentId === "about"} />
              <TechStack isActive={activeComponentId === "exprience"} />
              <Projects isActive={activeComponentId === "projects"} />
              <Contact isActive={activeComponentId === "contact"} />
            </div>
          </main>
        </div>
      </div>
      <Slide right>
        <button className="theme-btn border " onClick={handleTheme}>
          {theme === "light" ? (
            <BsMoonStarsFill size={30} />
          ) : (
            <BsSun size={30} color="white" />
          )}
        </button>
      </Slide>
    </>
  );
};

export default Layout;
