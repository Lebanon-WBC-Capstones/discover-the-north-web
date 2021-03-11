import React from 'react';
import './WhatWeDo.css';
import activity from './icons/activity.png';
import cities from './icons/cities.png';
import tourGuide from './icons/tourGuide.png';
import { useTranslation } from 'react-i18next/';

export default function WhatWeDo(props) {
  const { t } = useTranslation();
  const information = [
    {
      title: `${props.activityNumber}+${t('homePage.headerTitle1')}`,
      desc: `${t('homePage.subHeader1')}`,
      img: activity,
    },
    {
      title: `${t('homePage.headerTitle2')}`,
      desc: `${t('homePage.subHeader2')}`,
      img: cities,
    },
    {
      title: `${t('homePage.headerTitle3')}`,
      desc: `${t('homePage.subHeader3')}`,
      img: tourGuide,
    },
  ];

  function parts(arrayOfObj) {
    return (
      <>
        <span className="responsive-styling">30+ activities to explore!</span>
        <div className="iconContainer">
          {arrayOfObj.map((item) => {
            return (
              <div className="part">
                <img src={item.img} className="iconStyle" alt="icon" />
                <div className="texts">
                  <h2>{item.title}</h2>
                  <p>{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  }

  return parts(information);
}
