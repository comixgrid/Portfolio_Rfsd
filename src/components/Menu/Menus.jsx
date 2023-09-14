import React from "react";
import "./Menu.css";
import { Link } from "react-router-dom";
import Zoom from "react-reveal/Zoom";
import { useState } from "react";

const Menus = ({ onClose }) => {
  const handleMenuItemClick = (component) => {
    setSelectedComponent(component);
    onClose();
  };

  return (
    <>
      <div className="menu d-flex flex-column">
        <Zoom>
          <div className="profile-picture text-center mt-5">
            <img
              className="profile-img rounded-circle"
              src="https://media.licdn.com/dms/image/D4D03AQE-_y-POGYJ9g/profile-displayphoto-shrink_800_800/0/1680203081838?e=2147483647&v=beta&t=wdS412LLoGyn01rBca_sPeJn4j5H1YmabHFx4pt-RFE"
              alt="profile-pic"
              height="200px"
            />
          </div>
        </Zoom>

        <div className="menu-container nav-items d-flex flex-column gap-3 mt-5 align-items-center text-center ">
          <div className="nav-item w-100" onClick={handleMenuItemClick}>
            <Link className="nav-link">Home</Link>
          </div>
          <div className="nav-item w-100">
            <Link className="nav-link" onClick={handleMenuItemClick}>
              About-Education
            </Link>
          </div>
          <div className="nav-item w-100" onClick={handleMenuItemClick}>
            <Link className="nav-link">TechStack-Experience</Link>
          </div>
          <div className="nav-item w-100" onClick={handleMenuItemClick}>
            <Link className="nav-link">Projects</Link>
          </div>
          <div className="nav-item w-100" onClick={handleMenuItemClick}>
            <Link className="nav-link">Contact</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menus;
