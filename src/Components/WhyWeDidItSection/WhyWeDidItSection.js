import React from 'react';
import './WhyWeDidItSection.css';
import { Typography } from 'antd';

const { Title, Paragraph } = Typography;

function WhyWeDidItSection({ imgSrc, title, text }) {
  return (
    <div className="about-why-style">
      <img src={imgSrc} alt="icon" className="about-why-icon-size" />
      <Title level={3} className="margin-top-parag">
        {title}
      </Title>
      <Paragraph> {text} </Paragraph>
    </div>
  );
}

export default WhyWeDidItSection;
