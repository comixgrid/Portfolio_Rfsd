import React, { useState } from "react";
import Home from "../../pages/home/Home";
import "./Layout.css";
import { BiChevronsLeft, BiChevronsRight } from "react-icons/bi";
import Menus from "../Menu/Menus";

const Layout = ({ children }) => {
  const [toggle, setToggle] = useState(true);

  const handleToggler = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <div className="d-flex">
        <div className="sidebar-section d-flex position-absolute z-1">
          <div className={toggle ? "sidebar " : "sidebar d-none d-lg-block"}>
            <Menus />
          </div>
          <div className="whole-iconbar">
            <div className="toggle-icons d-block d-lg-none position-absolute z-1">
              <p onClick={handleToggler} className="border border-4 ">
                {toggle ? (
                  <BiChevronsLeft size={40} />
                ) : (
                  <BiChevronsRight size={40} />
                )}
              </p>
            </div>
          </div>
        </div>
        <div className="w-100 position-relative  ">
          <main>{children}</main>
        </div>
      </div>
    </>
  );
};

export default Layout;
