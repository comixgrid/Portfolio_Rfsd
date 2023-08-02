import React from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";
import CV from "../../assets/document/Maniruddin.pdf";
import { BiLogoFacebook } from "react-icons/bi";
import { BsInstagram, BsGithub } from "react-icons/bs";
import Layout from "../../components/Layout/Layout";

const Home = () => {
  return (
    <>
      <Layout>
        <div className="home-page mobile-view visible-lg overflow-hidden ">
          <div className="home-container ">
            <div className="content-container d-flex flex-column text-center ">
              <h2 className="hi-class d-inline ">Hi, I am a</h2>&nbsp;
              <h2 className="typewriter-effect d-inline display-4">
                <Typewriter
                  options={{
                    strings: [
                      "Maniruddin Khan",
                      "React Developer!",
                      "MERN Stack Developer!",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h2>
              <span className="text-white text-justify fs-4 p-2  ">
                I am a frontend web developer. I can provide clean code and
                pixel perfect design. I also make website more & more
                interactive with web animations.
              </span>
            </div>
          </div>
          <div className="button-container text-center gap-4 mt-2 z-1">
            <button type="button" className="btn btn-danger btn-lg text-white">
              Hire Me
            </button>
            <a
              type="button"
              href={CV}
              download="Maniruddin_Khan_CV"
              className="btn btn-outline-light btn-lg text-danger"
            >
              Download CV
            </a>
          </div>
          <div className="social-media d-flex justify-content-center gap-3 mt-5">
            <a
              className="btn btn-outline-primary"
              style={{ animationDelay: "0.3s" }}
            >
              <BiLogoFacebook size={30} />
            </a>
            <a
              className="btn btn-outline-danger"
              style={{ animationDelay: "0.5s" }}
            >
              <BsInstagram size={30} />
            </a>
            <a
              className="btn btn-outline-secondary"
              style={{ animationDelay: "0.7s" }}
            >
              <BsGithub size={30} />
            </a>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;
