import React from 'react';
import './AboutUs.css';
import WhyWeDidIt from '../../Components/WhyWeDidItSection/WhyWeDidItSection';
import TeamCards from '../../Components/TeamCards/TeamCards';
import FeedbackForm from '../../Components/FeedbackForm/FeedbackForm';
import { section2, teamMembers } from './AboutUsData';

function AboutUs() {
  return (
    <div className="about-page">
      <div className="about-us-title-paragraph">
        <h1 className="about-us-page-titles">About us</h1>
        <p className="about-us-paragraph">
          We are 5 people of north Lebanon youth. Our main goal is it showcase
          this part of our country and make it accessible for all visitors. So,
          we located all the interesting activities along with a handful of tour
          guides in order to make discovering the north of Lebanon a delightful
          journey.
        </p>
      </div>

      <div className="why-we-didit-container-hr">
        <hr className="hr-style" />
        <div className="why-we-didit-container-title">
          <h1 className="about-us-page-titles">Why we did it</h1>
          <div className="why-we-didit-container">
            <WhyWeDidIt
              imgSrc={section2.part1.icon}
              title={section2.part1.title}
              text={section2.part1.text}
              className="grid-area-1"
            />
            <WhyWeDidIt
              imgSrc={section2.part2.icon}
              title={section2.part2.title}
              text={section2.part2.text}
              className="grid-area-2"
            />
            <WhyWeDidIt
              imgSrc={section2.part3.icon}
              title={section2.part3.title}
              text={section2.part3.text}
              className="grid-area-3"
            />
          </div>
        </div>
        <hr className="hr-style" />
      </div>

      <div className="meet-team-container">
        <h1 className="about-us-page-titles">Meet the team</h1>
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
