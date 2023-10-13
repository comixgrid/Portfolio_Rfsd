import React from "react";
import "./About.css";
import imgag from "../../assets/about.jpg";
import Education from "../education/Education";
import Jello from "react-reveal/Jello";

const About = () => {
  return (
    <>
      <div
        className="about-page mobile-view visible-lg  overflow-hidden"
        id="about"
      >
        <div className="row about-content d-flex justify-content-center">
          <Jello>
            <h2
              className="border-bottom pb-2 "
              style={{ fontFamily: "poppins" }}
            >
              About Me
            </h2>
          </Jello>
          <div className="col-md-5 col-xl-5 col-lg-5 col-xs-12 justify-content-center about-pic d-inline ">
            <dotlottie-player
              src="https://lottie.host/5aede2e2-6465-4e5c-a317-6d3d359432e2/ty37AE2eEI.json"
              background="transparent"
              speed="1"
              loop
              autoplay
              style={{}}
            ></dotlottie-player>
          </div>
          <div className="col-md-6 col-md-6 col-xl-6 col-lg-6 col-xs-12 text-center d-inline ">
            <p className="about-me ">
              Hi there, I am a driven Full Stack Web Developer with experience
              in HTML, CSS, and JavaScript who is about to graduate from
              Computer Science and Engineering (2024). I've worked with Node.js,
              MongoDB, React.js, Express.js, MySQL, and Passport.js firsthand. I
              am skilled at integrating external services into web projects
              using APIs.
              <br />
              <br />
              Using Material UI, Bootstrap, and Tailwind CSS, I take
              satisfaction in creating visually beautiful and user-centric
              experiences. As a self-starter, I'm now investigating React Native
              for mobile app development and Next.js for optimal server-side
              rendering. I am enthusiastic to contribute my abilities to the
              development of creative and meaningful initiatives, with a strong
              emphasis on creating outstanding web experiences.
            </p>
          </div>
        </div>
        <Education />
      </div>
    </>
  );
};

export default About;
