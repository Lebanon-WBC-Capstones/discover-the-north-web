import React from 'react';
import { useTranslation } from 'react-i18next/';
import { Link } from 'react-router-dom';
import './NeedATourGuide.css';
import { Typography } from 'antd';

const { Title } = Typography;

export default function NeedATourGuid() {
  const { t } = useTranslation();
  return (
    <div className="need-tour-guide-container">
      <Title level={1}>{t('homePage.needTour')}</Title>
      <div className="buttonContainer">
        <Link to="/tour-guide">
          <button className="takeButton">
            <span>{t('homePage.needTourButton')}</span>
          </button>
        </Link>
      </div>
    </div>
  );
}
