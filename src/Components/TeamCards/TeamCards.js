import React from 'react';
import './teamCard.css';
import { Card } from 'antd';
import {
  TwitterOutlined,
  LinkedinOutlined,
  GithubOutlined,
} from '@ant-design/icons';
const { Meta } = Card;
const mbImgStyle = {
  height: 210,
  objectFit: 'cover',
};
const TeamCard = ({ imgsrc, name, specialization, url }) => {
  return (
    <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
      <Card
        hoverable
        className="about-team-card"
        style={{ width: 265, height: 314 }}
        cover={<img src={imgsrc} alt="team member" style={mbImgStyle} />}
        actions={[
          <a href={url.github} target="_blank" rel="noreferrer">
            <GithubOutlined key="github" />
          </a>,
          <a href={url.linkedin} target="_blank" rel="noreferrer">
            <LinkedinOutlined key="linkedin" />
          </a>,
          <a href={url.twitter} target="_blank" rel="noreferrer">
            <TwitterOutlined key="twitter" />
          </a>,
        ]}
      >
        <Meta
          title={<h2 className="team-memb-name">{name}</h2>}
          description={specialization}
        />
      </Card>
    </div>
  );
};
export default TeamCard;
