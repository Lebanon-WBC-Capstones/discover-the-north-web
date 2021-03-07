import React from 'react';
import './AboutUs.css';
import WhyWeDidIt from '../../Components/WhyWeDidItSection/WhyWeDidItSection';
import TeamCards from '../../Components/TeamCards/TeamCards';
import FeedbackForm from '../../Components/FeedbackForm/FeedbackForm';
import { Typography, Row, Col } from 'antd';
import { section2, teamMembers } from './AboutUsData';

const { Title, Paragraph } = Typography;

function AboutUs() {
  return (
    <div className="about-page">
      <div className="about-us-title-paragraph">
        <h1 className="about-us-page-titles">About us</h1>
        <p className="about-us-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      </div>

      <div className="why-we-didit-container-hr">
        <hr className="hr-style" />
        <div className="why-we-didit-container-title">
          <h1 className="about-us-page-titles">Why we did it</h1>
          <div className="why-we-didit-container">
            <WhyWeDidIt
              imgSrc={section2.part1.icon}
              title={section2.part1.title}
              text={section2.part1.text}
              className="grid-area-1"
            />
            <WhyWeDidIt
              imgSrc={section2.part2.icon}
              title={section2.part2.title}
              text={section2.part2.text}
              className="grid-area-2"
            />
            <WhyWeDidIt
              imgSrc={section2.part3.icon}
              title={section2.part3.title}
              text={section2.part3.text}
              className="grid-area-3"
            />
          </div>
        </div>
        <hr className="hr-style" />
      </div>

      <div className="meet-team-container">
        <h1 className="about-us-page-titles">Meet the team</h1>
        <div className="about-team-members-container">
          <div className="about-team-members">
            {teamMembers.map((member) => (
              <TeamCards
                imgsrc={member.image}
                name={member.name}
                specialization={member.specialization}
                url={member.url}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="part4-feedback">
        <FeedbackForm />
      </div>
    </div>
  );
}

export default AboutUs;
