import React from "react";
import Layout from "../../components/Layout/Layout";
import "./About.css";
import imgag from "../../assets/1680203081838.jpg";

const About = () => {
  return (
    <>
      <Layout>
        <div className="about-page mobile-view visible-lg  overflow-hidden  ">
          <div className="row about-content d-flex justify-content-center">
            <h2>About Me</h2>{" "}
            <div className="col-md-5 col-xl-5 col-lg-5 col-xs-12 justify-content-center about-pic d-inline ">
              <img
                src={imgag}
                alt="profile pic"
                height="400px"
                className="img-sc rounded w-100"
              />
            </div>
            <div className="col-md-6 col-md-6 col-xl-6 col-lg-6 col-xs-12 text-center d-inline ">
              <p className="about-me ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                blanditiis ipsum temporibus hic esse. Facilis quae inventore
                mollitia fugiat. Reiciendis, veritatis. Quos aliquid, quae
                asperiores doloribus reprehenderit itaque sapiente repellat!
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
                necessitatibus blanditiis, commodi praesentium quas cupiditate
                harum odio quasi eius, nam earum veritatis libero? Perspiciatis
                sint magnam earum beatae nam distinctio. Lorem ipsum dolor, sit
                amet consectetur adipisicing elit. Corporis corrupti
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default About;
