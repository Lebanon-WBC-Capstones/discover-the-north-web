import React from 'react';
import './WhyWeDidItSection.css';

function WhyWeDidItSection({ imgSrc, title, text }) {
  return (
    <div className="about-why-style">
      <img src={imgSrc} alt="icon" className="about-why-icon-size" />
      <div className="about-why-title-p">
        <h1 className="margin-top-parag">{title}</h1>
        <p> {text} </p>
      </div>
    </div>
  );
}

export default WhyWeDidItSection;
