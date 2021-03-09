import React from 'react';
import './SingleActivityPage.css';
import { Divider, PageHeader } from 'antd';
import ActivitiesCarousel from '../../Components/ActivitiesCarousel/ActivitiesCarousel';
import Button from '../../Components/Button/Button';
import tourguideimg from '../../Components/WhatWeDo/icons/tourGuide.png';
import { useParams } from 'react-router';
import activities from '../../MockData/activities.json';
import Like from '../../Components/Like/Like';
import { Link } from 'react-router-dom';

export default function SingleActivityPage(props) {
  const { id } = useParams();
  return (
    <div className="single-act-container">
      <PageHeader
        ghost={false}
        onBack={() => window.history.back()}
        title="Back"
        className="back-btn"
      />
      {activities
        .filter((act) => parseInt(id) === act.id)
        .map((act) => {
          return (
            <div className="s-act-p-cont">
              <div className="grid-view">
                <div className="left-side-grid">
                  <div className="single-act-info-header">
                    <div className="single-act-info-header-child-1">
                      <h1>{act.name}</h1>
                      <Like />
                    </div>
                    <Divider />
                    <div className="single-act-info-header-child-2">
                      {act.related_tags &&
                        act.related_tags.map((tag) => <span>{tag}</span>)}
                    </div>
                  </div>
                  <div className="left-grid-description">{act.description}</div>

                  <div className="single-act-left-grid-tour-guide">
                    <div className="single-act-info-hire-box">
                      <h1 className="single-act-info-icon-text">
                        {' '}
                        <img
                          src={tourguideimg}
                          className="single-act-info-icon-style"
                          alt="icon"
                        />
                        Need A Tour Guide?
                      </h1>
                      <Link to="/tour-guide">
                        <Button
                          buttonWidth={10}
                          text="See Available tour guides"
                          type="primary"
                        />
                      </Link>
                    </div>
                  </div>
                </div>

                <div>
                  <ActivitiesCarousel
                    actPicArray={act.images}
                    carWidth={'50rem'}
                  />
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}
