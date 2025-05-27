import React from "react";
import { FaUserGraduate } from "react-icons/fa6"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Eudcation.css";

const Education = () => {
  return (
    <>
      <div className="education" id='education'>
        <h2 className="col-12 mt-3 b-1 text-center text-uppercase">Education</h2>
        <hr />
        <VerticalTimeline>
            <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(10, 10, 10)", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(10, 10, 10)" }}
            date="2020 - 2023"
            iconStyle={{ background: "cyan", color: "black" }}
            icon={<FaUserGraduate />}
            >
            <h3 className="vertical-timeline-element-title">Bachelores Of Technology</h3>
            <h4 className="vertical-timeline-element-subtitle">University College of Engineering NarasaraopetJNTUK</h4>
            </VerticalTimelineElement>

            <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(10, 10, 10)", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(10, 10, 10)" }}
            date="2015 - 2018"
            iconStyle={{ background: "cyan", color: "black" }}
            icon={<FaUserGraduate />}
            >
            <h3 className="vertical-timeline-element-title">Diploma</h3>
            <h4 className="vertical-timeline-element-subtitle">Andhra Polytechnic Kakinada</h4>
            </VerticalTimelineElement>
            
            <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(10, 10, 10)", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(10, 10, 10)" }}
            date="2014 - 2015"
            iconStyle={{ background: "cyan", color: "black" }}
            icon={<FaUserGraduate />}
            >
            <h3 className="vertical-timeline-element-title">Secondary School Education</h3>
            <h4 className="vertical-timeline-element-subtitle">ZPH School Narasapurapupeta</h4>
            </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Education;
