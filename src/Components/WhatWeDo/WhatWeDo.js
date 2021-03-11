import React from 'react';
import './WhatWeDo.css';
import activity from './icons/activity.png';
import cities from './icons/cities.png';
import tourGuide from './icons/tourGuide.png';

export default function WhatWeDo(props) {
  const information = [
    {
      title: `${props.activityNumber}+ activities`,
      desc: 'Enjoy a variety of activities throughout the north!',
      img: activity,
    },
    {
      title: 'Explore Cities',
      desc: 'Every City has its own stuff, get to know them more with us',
      img: cities,
    },
    {
      title: 'Have tour guide',
      desc: 'First time in North? don’t worry you can have a tour guide',
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
