import React from 'react';
import { Link } from 'react-router-dom';
import './NeedATourGuide.css';
import { Typography } from 'antd';

const { Title } = Typography;

export default function NeedATourGuid() {
  return (
    <div className="need-tour-guide-container">
      <Title level={1}>Need a Tour Guide?</Title>
      <div className="buttonContainer">
        <Link to="/tour-guide">
          <button className="takeButton">
            <span>Go there</span>
          </button>
        </Link>
      </div>
    </div>
  );
}
