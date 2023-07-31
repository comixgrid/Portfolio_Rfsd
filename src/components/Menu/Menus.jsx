import React from "react";
import "./Menu.css";

const Menus = () => {
  return (
    <>
      <div className="menu d-flex flex-column">
        <div className="profile-picture text-center mt-5">
          <img
            className="profile-img rounded-circle"
            src="https://media.licdn.com/dms/image/D4D03AQE-_y-POGYJ9g/profile-displayphoto-shrink_800_800/0/1680203081838?e=2147483647&v=beta&t=wdS412LLoGyn01rBca_sPeJn4j5H1YmabHFx4pt-RFE"
            alt=""
            srcset=""
            height="200px"
          />
        </div>
        <div className="menu-container nav-items d-flex flex-column gap-3 mt-5 align-items-center text-center ">
          <div className="nav-item w-100">
            <a className="nav-link" href={"/"}>
              Home
            </a>
          </div>
          <div className="nav-item w-100">
            <a className="nav-link" href={"/about"}>
              About
            </a>
          </div>
          <div className="nav-item w-100">
            <a className="nav-link" href={"/projects"}>
              Projects
            </a>
          </div>
          <div className="nav-item w-100">
            <a className="nav-link" href={"/contact"}>
              Contact
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menus;
