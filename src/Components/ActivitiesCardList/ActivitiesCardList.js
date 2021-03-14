import React, { useState } from 'react';
import { Skeleton } from 'antd';
import { Close } from '@material-ui/icons';

import './ActivitiesCardList.css';
import ActivityItem from '../ActivitiesItem/ActivitiesItem';

export default function ActivitiesCardList(props) {
  const { activityData, handleMouseOver, handleMouseLeave } = props;

  let reslength = 0;

  const [filteredOutdoor, setFilteredOutdoor] = useState(false);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const filterOutdoor = () => {
    setShow(!show);
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
    setFilteredOutdoor(!filteredOutdoor);
  };

  filteredOutdoor
    ? (reslength = activityData.filter(
        (activity) => activity.type === 'Outdoor Activity'
      ).length)
    : (reslength = activityData.length);

  return (
    <div className="activity-card-list">
      <div className="result-sort">
        <span className="results-number">{reslength} results</span>
        <span className="only-outdoor" onClick={filterOutdoor}>
          Only outdoor activities
          {show ? <Close /> : ''}
        </span>
      </div>

      {loading ? (
        <div className="loading-spinner-layout">
          {[1, 2, 3].map((e) => (
            <>
              <Skeleton.Input
                style={{
                  width: '100%',
                  height: '200px',
                  borderRadius: '10px',
                  marginLeft: '-76px',
                }}
                active
              />
              <br />
            </>
          ))}
        </div>
      ) : filteredOutdoor ? (
        activityData
          .filter((activity) => activity.type === 'Outdoor Activity')
          .map((activity) => {
            return (
              <>
                <ActivityItem
                  index={activity.id}
                  imgsrc={activity.image}
                  name={activity.name}
                  tags={activity.related_tags}
                  cityName={activity.city}
                  price={activity.price}
                  rating={activity.rating}
                  handleMouseOver={handleMouseOver}
                  handleMouseLeave={handleMouseLeave}
                />
              </>
            );
          })
      ) : (
        activityData.map((activity) => {
          return (
            <>
              <ActivityItem
                index={activity.id}
                imgsrc={activity.image}
                name={activity.name}
                tags={activity.related_tags}
                cityName={activity.city}
                price={activity.price}
                rating={activity.rating}
                handleMouseOver={handleMouseOver}
                handleMouseLeave={handleMouseLeave}
              />
            </>
          );
        })
      )}
    </div>
  );
}
