import React, { useState } from "react";
import "./Layout.css";
import { BiChevronsLeft, BiChevronsRight } from "react-icons/bi";
import Menus from "../Menu/Menus";
import { useTheme } from "../../context/ThemeContext.jsx";
import { BsMoonStarsFill, BsSun } from "react-icons/bs";

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
          <div
            id={theme}
            className={
              toggle ? "sidebar whole-iconbar " : "sidebar d-none d-lg-block "
            }
          >
            <Menus onClose={handleClose} />
          </div>
        </div>

        <div className="w-100 position-relative z-0" onClose={handleClose}>
          <main>
            <div id={theme}>{children}</div>
          </main>
        </div>
      </div>
      <button className="theme-btn" onClick={handleTheme}>
        {theme === "light" ? (
          <BsMoonStarsFill size={30} />
        ) : (
          <BsSun size={30} color="white" />
        )}
      </button>
    </>
  );
};

export default Layout;
