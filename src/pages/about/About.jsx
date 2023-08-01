import React from "react";
import Layout from "../../components/Layout/Layout";
import "./About.css";
import imgag from "../../assets/1680203081838.jpg";

const About = () => {
  return (
    <>
      <Layout>
        <div className="about-page mobile-view visible-lg mt-4">
          <div className="row about-content col-md-11 d-flex justify-content-center mb-3">
            <div className="col-md-6 text-center d-inline ">
              <h2>About Me</h2>
              <p className="about-me">
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
            <div className="col-md-5 justify-content-center about-pic d-inline ">
              <img
                src={imgag}
                alt=""
                height="400px"
                className="img-sc rounded"
              />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default About;
