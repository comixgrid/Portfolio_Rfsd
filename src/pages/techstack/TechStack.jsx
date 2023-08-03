import React from "react";
import Layout from "../../components/Layout/Layout";
import "../techstack/TechStack.css";
import { TechstackList } from "./../../utils/Tech.js";

const TechStack = () => {
  return (
    <Layout>
      <div className="tech-stack mobile-view visible-lg overflow-hidden mb-2 d-flex justify-content-center">
        <div className="row stack-container">
          <h4
            style={{ textAlign: "center" }}
            className="p-2 project-heading px-2 "
          >
            Programing languages, Frameworks, Databases, Front-end & Back-end
            tools, and APIs
          </h4>
          <div className="tech-container row">
            {TechstackList.map((T) => (
              <div key={T._id} className="col-md-3">
                <div className="card m-2 p-2">
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
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TechStack;
