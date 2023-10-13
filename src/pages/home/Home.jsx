import React from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";
import CV from "../../assets/document/Maniruddin_Khan.pdf";
import { BiLogoFacebook } from "react-icons/bi";
import { BsInstagram, BsGithub } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { useTheme } from "../../context/ThemeContext";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

const Home = () => {
  const theme = useTheme();
  console.log(theme);
  return (
    <>
      <div className="outer-home" id="home">
        <div className="home-page mobile-view visible-lg overflow-hidden">
          <div className="home-container ">
            <div className="content-container d-flex flex-column text-center ">
              <Fade left cascade>
                <h2
                  className={`d-inline ${
                    theme[0] === "dark" ? "hi-class" : "hi-class-light"
                  }`}
                >
                  Hi, I am
                </h2>
              </Fade>
              &nbsp;
              <h2
                className={
                  theme[0] === "dark"
                    ? "typewriter-effect d-inline display-4"
                    : "typewriter-effect-light d-inline display-4"
                }
              >
                <Typewriter
                  options={{
                    strings: [
                      "Maniruddin Khan",
                      "React Developer!",
                      "MERN Developer!",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h2>
              <Zoom left cascade>
                <span
                  className={`${
                    theme[0] === "dark"
                      ? "text-white text-position fs-5 mt-3 mb-4"
                      : "text-black text-position fs-5 mt-3 mb-4"
                  }`}
                >
                  Full Stack Web Developer skilled in HTML, CSS, JavaScript,
                  Node.js, MongoDB, React.js, and more.
                </span>
              </Zoom>
            </div>
          </div>
          <div className="button-container text-center gap-4 mt-4 z-1">
            <a
              type="button"
              className="btn btn-danger btn-lg text-white"
              href="https://api.whatsapp.com/send?phone=8617559654"
              rel="norefferer"
              target="_blank"
            >
              Hire Me
            </a>
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
              href="https://www.facebook.com/maniruddin.khan.35/"
              target="blank"
            >
              <BiLogoFacebook size={30} />
            </a>
            <a
              className="btn btn-outline-danger"
              style={{ animationDelay: "0.5s" }}
              href="https://www.instagram.com/ig_mk_techeduhelper/"
              target="blank"
            >
              <BsInstagram size={30} />
            </a>
            <a
              className="btn btn-outline-secondary"
              style={{ animationDelay: "0.7s" }}
              href="https://github.com/techeduhelper"
              target="blank"
            >
              <BsGithub size={30} />
            </a>
            <a
              className="btn btn-outline-primary"
              style={{ animationDelay: "0.7s" }}
              href="https://www.linkedin.com/in/maniruddin-khan/"
              target="blank"
            >
              <AiFillLinkedin size={30} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
