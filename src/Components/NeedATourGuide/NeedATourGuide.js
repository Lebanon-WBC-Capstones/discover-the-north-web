import React from 'react';
import { useTranslation } from 'react-i18next/';
import { Link } from 'react-router-dom';
import './NeedATourGuide.css';

export default function NeedATourGuid() {
  const { t } = useTranslation();
  return (
    <div className="need-tour-guide-container">
      <h1>{t('homePage.needTour')}</h1>
      <div className="buttonContainer">
        <Link to="/tour-guide">
          <button className="takeButton">{t('homePage.needTourButton')}</button>
        </Link>
      </div>
    </div>
  );
}
