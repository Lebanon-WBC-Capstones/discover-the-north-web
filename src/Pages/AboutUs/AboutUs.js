import React from 'react';
import './AboutUs.css';
import WhyWeDidIt from '../../Components/WhyWeDidItSection/WhyWeDidItSection';
import TeamCards from '../../Components/TeamCards/TeamCards';
import FeedbackForm from '../../Components/FeedbackForm/FeedbackForm';
import { section2, teamMembers } from './AboutUsData';
import { useTranslation } from 'react-i18next';

function AboutUs() {
  const { t } = useTranslation();

  return (
    <div className="about-page">
      <div className="about-us-title-paragraph">
        <h1 className="about-us-page-titles">{t('aboutUsPage.header')}</h1>
        <p className="about-us-paragraph">{t('aboutUsPage.headerDesc')}</p>
      </div>
      <div className="why-we-didit-container-hr">
        <hr className="hr-style" />

        <div className="why-we-didit-container-title">
          <h1 className="about-us-page-titles">
            {t('aboutUsPage.header2.header2Title')}
          </h1>
          <div className="why-we-didit-container">
            <WhyWeDidIt
              imgSrc={section2.part1.icon}
              title={t('aboutUsPage.header2.subTitle1')}
              text={t('aboutUsPage.header2.subText1')}
              className="grid-area-1"
            />
            <WhyWeDidIt
              imgSrc={section2.part2.icon}
              title={t('aboutUsPage.header2.subTitle2')}
              text={t('aboutUsPage.header2.subText2')}
              className="grid-area-2"
            />
            <WhyWeDidIt
              imgSrc={section2.part3.icon}
              title={t('aboutUsPage.header2.subTitle3')}
              text={t('aboutUsPage.header2.subText3')}
              className="grid-area-3"
            />
          </div>
          <hr className="hr-style" />
        </div>
      </div>
      <div className="meet-team-container">
        <h1 className="about-us-page-titles">{t('aboutUsPage.header3')}</h1>
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
