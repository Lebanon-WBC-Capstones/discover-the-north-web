import React from 'react';
import './CityCardItem.css';
import { Card } from 'antd';
import { DoubleArrow } from '@material-ui/icons';

export default function CityCardItem(city) {
  const { imgsrc, name, activityNumberPerCity } = city;
  const style = {
    borderRadius: '10px',
  };
  return (
    <div className="city-card-component">
      <div class="city-card-container">
        <Card
          style={{ width: 280, height: 250, borderRadius: 10 }}
          cover={
            <img
              style={style}
              className="city-card-img-size"
              alt="example"
              src={imgsrc}
            />
          }
        >
          <div className="city-card-component-overlay">
            <div className="city-card-component-text">
              <h1
                style={{ color: 'white', opacity: 1 }}
                className="city-card-overlay-name"
              >
                {name}
              </h1>
              <span className="city-p-activity-nb">
                {activityNumberPerCity} activity
              </span>
              <div className="city-card-learn-more">
                <span className="city-card-learn-more-child-1">
                  Learn more <DoubleArrow className="double-ar-right" />{' '}
                </span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
