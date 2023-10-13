import React from "react";
import Layout from "./../../components/Layout/Layout";
import "../projects/Projects.css";
import eccom from "../../assets/eccomp.jpg";
import arbnb from "../../assets/arbnb-clone.jpg";
import imdb from "../../assets/movie.jpg";
import inshort from "../../assets/inshorts.jpg";
import googli from "../../assets/google.jpg";
import linkedin from "../../assets/linkedin.jpg";
import quiz from "../../assets/quiz.jpg";
import Slide from "react-reveal/Slide";

const Projects = () => {
  return (
    <>
      <div
        className="project-page mobile-view visible-lg overflow-hidden"
        id="projects"
      >
        <h2 className=" mt-3 text-center text-capitalize">
          Top Recent Projects
        </h2>
        <div className="row about-content d-flex mt-3 gap-4">
          <Slide right cascade>
            <div className="col-md-3">
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
                  <span className="card-detail-badge">Bootstrap</span>
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
            <div className="col-md-3">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full stack</span>
                  <img src={arbnb} alt="project1" />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">react</span>
                  <span className="card-detail-badge">Mongodb</span>
                  <span className="card-detail-badge">Tailwind CSS</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">Arbnb-Clone</h6>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/techeduhelper/arbnbclone-fixes"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
          </Slide>

          <Slide right cascade>
            <div className="col-md-3 ">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Frontend + API</span>
                  <img src={imdb} alt="project1" />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Themoviedb API</span>
                  <span className="card-detail-badge">Axios</span>
                  <span className="card-detail-badge">react</span>
                  <span className="card-detail-badge">Tailwind CSS</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">Imdb-clone</h6>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/techeduhelper/imdb-M"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
          </Slide>

          <Slide right cascade>
            <div className="col-md-3">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full stack</span>
                  <img src={inshort} alt="project1" />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">react</span>
                  <span className="card-detail-badge">Mongodb</span>
                  <span className="card-detail-badge">Material Ui</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">Inshort-clone</h6>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/techeduhelper/Inshorts-clone"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
          </Slide>

          <Slide right cascade>
            <div className="col-md-3">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Frontend + API</span>
                  <img src={googli} alt="project1" />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Random-word-api</span>
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">Tailwind CSS</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">Google-Landing-page</h6>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/techeduhelper/googli"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
          </Slide>

          <Slide right cascade>
            <div className="col-md-3">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Simple Frontend</span>
                  <img src={linkedin} alt="project1" />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">HTML</span>
                  <span className="card-detail-badge">CSS</span>
                  <span className="card-detail-badge">Box-Model</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">linkedin Frontpage</h6>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/techeduhelper/linkedin_clone"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
          </Slide>

          <Slide right cascade>
            <div className="col-md-3">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Javascript Bassed</span>
                  <img src={quiz} alt="project1" />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">HTML</span>
                  <span className="card-detail-badge">CSS</span>
                  <span className="card-detail-badge">Javascript</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">Quiz App</h6>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/techeduhelper/Quiz-app"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
          </Slide>
        </div>
      </div>
    </>
  );
};

export default Projects;
