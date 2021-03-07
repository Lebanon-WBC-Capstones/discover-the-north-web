import React from 'react';
import './CityCardItem.css';
import { Card } from 'antd';
import { DoubleRightOutlined } from '@ant-design/icons';

export default function CityCardItem(city) {
  const { imgsrc, name, info, activityNumber } = city;
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
          <div className="overlay">
            <div className="text">
              <h1
                style={{ color: 'white', opacity: 1 }}
                className="city-card-overlay-name"
              >
                {name}
              </h1>
              <div className="city-card-learn-more">
                <span>
                  Learn more{' '}
                  <DoubleRightOutlined
                    style={{ fontSize: '12px', marginBottom: -5 }}
                  />{' '}
                </span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
