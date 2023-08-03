import React from "react";
import Layout from "./../../components/Layout/Layout";
import "../projects/Projects.css";
import eccom from "../../assets/eccomp.jpg";
import Slide from "react-reveal/Slide";

const Projects = () => {
  return (
    <>
      <Layout>
        <div className="project-page mobile-view visible-lg overflow-hidden ">
          <div className="row about-content d-flex  mt-3">
            <h2 className="col-12 mt-3 text-center text-uppercase">
              TOP RECENT PROJECTS
            </h2>
            <Slide right cascade>
              <div className="col-md-4">
                <div className="card rounded">
                  <div className="card-image">
                    <span className="card-notify-badge">Full stack</span>
                    <img src={eccom} alt="project1" />
                  </div>
                  <div className="card-image-overly m-auto mt-3">
                    <span className="card-detail-badge">Node</span>
                    <span className="card-detail-badge">Express</span>
                    <span className="card-detail-badge">react</span>
                    <span className="card-detail-badge">Mongodb</span>
                  </div>
                  <div className="card-body text-center">
                    <div className="ad-title m-auto">
                      <h6 className="text-uppercase">Eccommerce App</h6>
                    </div>
                    <a
                      className="ad-btn"
                      href="https://github.com/techeduhelper/projects/tree/master/e-ccom"
                    >
                      View
                    </a>
                  </div>
                </div>
              </div>
            </Slide>

            <Slide right cascade>
              <div className="col-md-4">
                <div className="card rounded">
                  <div className="card-image">
                    <span className="card-notify-badge">Full stack</span>
                    <img src={eccom} alt="project1" />
                  </div>
                  <div className="card-image-overly m-auto mt-3">
                    <span className="card-detail-badge">Node</span>
                    <span className="card-detail-badge">Express</span>
                    <span className="card-detail-badge">react</span>
                    <span className="card-detail-badge">Mongodb</span>
                  </div>
                  <div className="card-body text-center">
                    <div className="ad-title m-auto">
                      <h6 className="text-uppercase">Eccommerce App</h6>
                    </div>
                    <a
                      className="ad-btn"
                      href="https://github.com/techeduhelper/projects/tree/master/e-ccom"
                    >
                      View
                    </a>
                  </div>
                </div>
              </div>
            </Slide>

            <Slide right cascade>
              <div className="col-md-4">
                <div className="card rounded">
                  <div className="card-image">
                    <span className="card-notify-badge">Full stack</span>
                    <img src={eccom} alt="project1" />
                  </div>
                  <div className="card-image-overly m-auto mt-3">
                    <span className="card-detail-badge">Node</span>
                    <span className="card-detail-badge">Express</span>
                    <span className="card-detail-badge">react</span>
                    <span className="card-detail-badge">Mongodb</span>
                  </div>
                  <div className="card-body text-center">
                    <div className="ad-title m-auto">
                      <h6 className="text-uppercase">Eccommerce App</h6>
                    </div>
                    <a
                      className="ad-btn"
                      href="https://github.com/techeduhelper/projects/tree/master/e-ccom"
                    >
                      View
                    </a>
                  </div>
                </div>
              </div>
            </Slide>

            <Slide right cascade>
              <div className="col-md-4">
                <div className="card rounded">
                  <div className="card-image">
                    <span className="card-notify-badge">Full stack</span>
                    <img src={eccom} alt="project1" />
                  </div>
                  <div className="card-image-overly m-auto mt-3">
                    <span className="card-detail-badge">Node</span>
                    <span className="card-detail-badge">Express</span>
                    <span className="card-detail-badge">react</span>
                    <span className="card-detail-badge">Mongodb</span>
                  </div>
                  <div className="card-body text-center">
                    <div className="ad-title m-auto">
                      <h6 className="text-uppercase">Eccommerce App</h6>
                    </div>
                    <a
                      className="ad-btn"
                      href="https://github.com/techeduhelper/projects/tree/master/e-ccom"
                    >
                      View
                    </a>
                  </div>
                </div>
              </div>
            </Slide>
            <Slide right cascade>
              <div className="col-md-4">
                <div className="card rounded">
                  <div className="card-image">
                    <span className="card-notify-badge">Full stack</span>
                    <img src={eccom} alt="project1" />
                  </div>
                  <div className="card-image-overly m-auto mt-3">
                    <span className="card-detail-badge">Node</span>
                    <span className="card-detail-badge">Express</span>
                    <span className="card-detail-badge">react</span>
                    <span className="card-detail-badge">Mongodb</span>
                  </div>
                  <div className="card-body text-center">
                    <div className="ad-title m-auto">
                      <h6 className="text-uppercase">Eccommerce App</h6>
                    </div>
                    <a
                      className="ad-btn"
                      href="https://github.com/techeduhelper/projects/tree/master/e-ccom"
                    >
                      View
                    </a>
                  </div>
                </div>
              </div>
            </Slide>

            <Slide right cascade>
              {" "}
              <div className="col-md-4">
                <div className="card rounded">
                  <div className="card-image">
                    <span className="card-notify-badge">Full stack</span>
                    <img src={eccom} alt="project1" />
                  </div>
                  <div className="card-image-overly m-auto mt-3">
                    <span className="card-detail-badge">Node</span>
                    <span className="card-detail-badge">Express</span>
                    <span className="card-detail-badge">react</span>
                    <span className="card-detail-badge">Mongodb</span>
                  </div>
                  <div className="card-body text-center">
                    <div className="ad-title m-auto">
                      <h6 className="text-uppercase">Eccommerce App</h6>
                    </div>
                    <a
                      className="ad-btn"
                      href="https://github.com/techeduhelper/projects/tree/master/e-ccom"
                    >
                      View
                    </a>
                  </div>
                </div>
              </div>
            </Slide>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Projects;
