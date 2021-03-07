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
  height: 200,
};
const TeamCard = ({ imgsrc, name, specialization, url }) => {
  return (
    <Card
      hoverable
      className="about-team-card"
      style={{ width: 280, height: 305 }}
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
  );
};
export default TeamCard;
