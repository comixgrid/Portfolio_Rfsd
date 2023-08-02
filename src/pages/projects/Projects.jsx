import React from "react";
import Layout from "./../../components/Layout/Layout";
import "../projects/Projects.css";
import eccom from "../../assets/eccomp.jpg";
import admin from "../../assets/admin.jpg";
import cart from "../../assets/cart.jpg";

const Projects = () => {
  return (
    <>
      <Layout>
        <div className="project-page mobile-view visible-lg overflow-hidden ">
          <div className="row p-4">
            <div className="col-md-3 p-2 ">
              <div className="card w-100">
                <div className="card-body">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        src={eccom}
                        className="d-block w-100"
                        alt="eccom"
                        height={"200px"}
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src={admin}
                        className="d-block w-100"
                        alt="..."
                        height={"200px"}
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src={cart}
                        className="d-block w-100"
                        alt="..."
                        height={"200px"}
                      />
                    </div>
                  </div>
                  <h5 className="card-title">E-ccommerce Web App</h5>
                  <p className="card-text">
                    Tools & technologies used: HTML, CSS, Bootstrap, React js,
                    Express js, Node js, Mongodb, Postman,
                  </p>
                  <a href="#" className="btn btn-danger d-block ">
                    Link
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Projects;
