import React from "react";
import "../techstack/TechStack.css";
import { TechstackList } from "./../../utils/Tech.js";
import Experience from "../experience/Experience";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";

const TechStack = ({ isActive }) => {
  return (
    <>
      {isActive && (
        <div
          className="tech-stack mobile-view visible-lg overflow-hidden d-flex justify-content-center flex-column "
          style={{ display: isActive ? "block" : "none" }}
          id="exprience"
        >
          <div className="row about-content d-flex justify-content-center align-items-center">
            <div className="row stack-container w-100 ">
              <Slide right cascade>
                <h1 className="border-bottom pb-2 ">Technologies Stack</h1>
              </Slide>
              <h5
                style={{ textAlign: "center", fontFamily: "cursive" }}
                className="p-1 project-heading"
              >
                Programing languages, Frameworks, Databases, Front-end &
                Back-end tools, and APIs
              </h5>
              <div className="tech-container row">
                {TechstackList.map((T) => (
                  <Fade left key={T._id}>
                    <div className="col-md-3">
                      <div className="card m-1 p-2">
                        <div className="card-content">
                          <div className="card-body">
                            <div className="media d-flex justify-content-center flex-row gap-1 ">
                              <div className="align-self-center">
                                <T.icon size={30} />
                              </div>
                              <div className="media-body">
                                <h5>{T.name}</h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Fade>
                ))}
              </div>
            </div>
          </div>
          <Experience />
        </div>
      )}
    </>
  );
};

export default TechStack;
