import React from "react";
import Layout from "../../components/Layout/Layout";
import "./About.css";
import imgag from "../../assets/1680203081838.jpg";

const About = () => {
  return (
    <>
      <Layout>
        <div className="about-page mobile-view visible-lg mt-4">
          <div className="row col-md-12 mt-4 d-flex ">
            <div className="col-md-6 text-center">
              <h2>About Me</h2>
            </div>
            <div className="col-md-6 mt-4 text-center">
              <img src={imgag} alt="" height="500px" className="img-sc rounded" />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default About;
