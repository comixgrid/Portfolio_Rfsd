import React from "react";
import { FaNodeJs } from "react-icons/fa";
import { RiHtml5Fill } from "react-icons/ri";
import { SiPython } from "react-icons/si";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Bounce from "react-reveal/Bounce";

const Experience = () => {
  return (
    <>
      <div className="row about-content d-flex justify-content-center mt-3">
        <Bounce right cascade>
          <h2
            className="border-bottom pb-2 "
            style={{ fontFamily: "monospace" }}
          >
            Experience
          </h2>
        </Bounce>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#241468", color: "#C1D0B5" }}
            contentArrowStyle={{ borderRight: "7px solid  purple" }}
            date="Oct-2022 - Jul-2023"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<FaNodeJs />}
          >
            <h3 className="vertical-timeline-element-title">
              FullStack Web Development Trainee
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Testbook.com(Skill Academy) , IN
            </h4>
            <p>
              – Skilled in creating dynamic and responsive user interfaces
              through popular front-end frameworks like React.
              <br /> – Experienced in server-side programming using Node.js and
              proficient in working with databases like MongoDB.
              <br /> – Proficient in version control using Git to efficiently
              manage and track project changes.
              <br /> – Proficient in full stack development with expertise in
              web technologies such as HTML, CSS, and JavaScript.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#241468", color: "#C1D0B5" }}
            contentArrowStyle={{ borderRight: "7px solid  purple" }}
            date="06/03/2023 - 02/04/2023"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<RiHtml5Fill />}
          >
            <h3 className="vertical-timeline-element-title">
              Web development Intern
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              InternPe , IN
            </h4>
            <p>
              Proficient in web development with expertise in web technologies
              such as HTML, CSS, and JavaScript.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#241468", color: "#C1D0B5" }}
            contentArrowStyle={{ borderRight: "7px solid  purple" }}
            date="Aug-2019(1 month)"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<SiPython />}
          >
            <h3 className="vertical-timeline-element-title">
              Python Programming Tranning
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Ardent Computech Pvt. LTD. , In
            </h4>
            <p>Worked on a project “Online Restaurant app.</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Experience;
