import React, { useState } from 'react';
import './TourGuidePage.css';
import activities from '../../MockData/activities.json';
import TourGuideCard from '../../Components/TourGuideCard/TourGuideCard';
import EmailModal from '../../Components/EmailModal/EmailModal';
import { useTranslation } from 'react-i18next';

export default function TourGuidePage() {
  const [visible, setVisible] = useState(false);
  const handleClick = () => {
    setVisible(!visible);
  };
  const { t } = useTranslation();

  return (
    <div className="tour-guide-page-container">
      <div className="tour-guide-page-header">
        <div>
          <h1>{t('tourGuidePage.header')}</h1>
        </div>
        <div className="join-us">
          <p onClick={handleClick}>{t('tourGuidePage.join')}</p>
          <EmailModal isModalVisible={visible} setIsModalVisible={setVisible} />
        </div>
      </div>
      <div data-aos="fade-right" data-aos-offset="500" data-aos-duration="500">
        <div className="tourGuideCardContainer">
          {activities.map((activity) =>
            activity.tour_guides.map((guider) => {
              return (
                <TourGuideCard
                  imgsrc={guider.image}
                  name={guider.name}
                  tags={guider.speciality_tags}
                  description={guider.summary}
                  guide={guider}
                />
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
