import React from "react";
import { TbSchool } from "react-icons/tb";
import { LuSchool2, LuSchool } from "react-icons/lu";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useTheme } from "../../context/ThemeContext";

const Education = () => {
  const Edutheme = useTheme();
  return (
    <>
      <div
        className="row about-content d-flex justify-content-center mt-1"
        id={Edutheme}
      >
        <h2 className="border-bottom pb-2 " style={{ fontFamily: "monospace" }}>
          Education
        </h2>
        {console.log(Edutheme)}
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#241468", color: "#C1D0B5" }}
            contentArrowStyle={{ borderRight: "7px solid  purple" }}
            date="2021 - present"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<TbSchool />}
          >
            <h3 className="vertical-timeline-element-title">B.Tech</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Seacom Engineering College, IN
            </h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "grey", color: "#C1D0B5" }}
            contentArrowStyle={{ borderRight: "7px solid  purple" }}
            date="2017 - 2020"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<LuSchool />}
          >
            <h3 className="vertical-timeline-element-title">
              Diploma In Computer Software Technology
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              S.A.R.M. Polytechnic, IN
            </h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#176B87", color: "#C1D0B5" }}
            contentArrowStyle={{ borderRight: "7px solid  purple" }}
            date="2015 - 2017"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<LuSchool2 />}
          >
            <h3 className="vertical-timeline-element-title">
              Higher Secondary(H,S)
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Lowada High School, IN
            </h4>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Education;
