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
      <div className="part1-aboutus">
        <Title level={1}>About Us</Title>
        <Row justify="center">
          <Col span={16}>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </Paragraph>
          </Col>
        </Row>
      </div>
      <div className="why-we-didit-container-hr">
        <hr className="hr-style" />
        <div className="why-we-didit-container">
          <Row justify="center">
            <Title level={1} className="why-title">
              Why We Did It
            </Title>
          </Row>
          <Row>
            <Col span={5} offset={3}>
              <WhyWeDidIt
                imgSrc={section2.part1.icon}
                title={section2.part1.title}
                text={section2.part1.text}
              />
            </Col>
            <Col span={5} offset={2}>
              <WhyWeDidIt
                imgSrc={section2.part2.icon}
                title={section2.part2.title}
                text={section2.part2.text}
              />
            </Col>
            <Col span={5} offset={2}>
              <WhyWeDidIt
                imgSrc={section2.part3.icon}
                title={section2.part3.title}
                text={section2.part3.text}
              />
            </Col>
          </Row>
        </div>
        <hr className="hr-style" />
      </div>
      <div className="meet-team-container">
        <Row justify="center">
          <Title level={1} className="meet-the-team-title">
            Meet The Team
          </Title>
        </Row>
        <div className="part3-team-members-container">
          <div className="part3-team-members">
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
