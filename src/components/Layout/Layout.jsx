import React, { useState } from "react";
import "./Layout.css";
import { BiChevronsLeft, BiChevronsRight } from "react-icons/bi";
import Menus from "../Menu/Menus";

const Layout = ({ children }) => {
  const [toggle, setToggle] = useState(false);

  const handleToggler = () => {
    setToggle(!toggle);
  };
  const handleClose = () => {
    setToggle(false);
  };

  return (
    <>
      <div className="d-flex">
        <div className="sidebar-section d-flex position-absolute z-1">
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
            className={
              toggle ? "sidebar whole-iconbar " : "sidebar d-none d-lg-block "
            }
          >
            <Menus onClose={handleClose} />
          </div>
        </div>
        <div className="w-100 position-relative z-0" onClose={handleClose}>
          <main>{children}</main>
        </div>
      </div>
    </>
  );
};

export default Layout;
