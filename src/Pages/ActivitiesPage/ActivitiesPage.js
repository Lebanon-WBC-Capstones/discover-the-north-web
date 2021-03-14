import React, { useState } from 'react';
import ActivitiesCardList from '../../Components/ActivitiesCardList/ActivitiesCardList';
import ActivitiesMap from './ActivitiesMap';
import './ActivitiesPage.css';
import { Affix, Divider } from 'antd';
import DropDownsPackage from '../../Components/DropdownPackage/DropdownPackage';
import activities_data from '../../MockData/activities.json';

export const TooltipColor = React.createContext();
export const ID = React.createContext();

export default function ActivitiesPage() {
  const [top] = useState(51);

  const [hover, setHover] = useState(false);
  const [id, setId] = useState(null);
  const handleMouseOver = (id) => {
    setHover(true);
    setId(id);
  };
  const handleMouseLeave = (id) => {
    setHover(false);
    setId(null);
  };

  const [checked, setChecked] = useState([]);

  const handleFilter = (priceResult, actResult, cityResult) => {
    if (
      cityResult.length !== 0 &&
      actResult.length === 0 &&
      priceResult.length === 0
    ) {
      setChecked(cityResult);
    }
    if (
      actResult.length !== 0 &&
      cityResult.length === 0 &&
      priceResult.length === 0
    ) {
      setChecked(actResult);
    }
    if (
      priceResult.length !== 0 &&
      actResult.length === 0 &&
      cityResult.length === 0
    ) {
      setChecked(priceResult);
    }
    if (
      cityResult.length !== 0 &&
      actResult.length !== 0 &&
      priceResult.length === 0
    ) {
      const res = [];
      actResult.forEach((a) => {
        cityResult.forEach((c) => {
          if (a === c) {
            res.push(a);
          }
        });
      });
      setChecked(res);
    } else if (
      cityResult.length !== 0 &&
      priceResult.length !== 0 &&
      actResult.length === 0
    ) {
      const res = [];
      priceResult.forEach((a) => {
        cityResult.forEach((c) => {
          if (a === c) res.push(a);
        });
      });
      setChecked(res);
    } else if (
      actResult.length !== 0 &&
      priceResult.length !== 0 &&
      cityResult.length === 0
    ) {
      const res = [];
      actResult.forEach((a) => {
        priceResult.forEach((c) => {
          if (a === c) {
            res.push(a);
          }
        });
      });
      setChecked(res);
    } else if (
      cityResult.length !== 0 &&
      actResult.length !== 0 &&
      priceResult.length !== 0
    ) {
      const res = [];
      actResult.forEach((a) => {
        cityResult.forEach((c) => {
          if (a === c) {
            priceResult.forEach((p) => {
              if (a === p) {
                res.push(a);
              }
            });
          }
        });
      });
      setChecked(res);
    }
  };
  return (
    <TooltipColor.Provider value={hover}>
      <ID.Provider value={id}>
        <div className="act-page">
          <div className="act-left-grid-column">
            <div
              data-aos="fade-right"
              data-aos-offset="500"
              data-aos-duration="500"
            >
              <DropDownsPackage handleFilter={handleFilter} />
              <Divider />

              {checked.length === 0 ? (
                <ActivitiesCardList
                  activityData={activities_data}
                  handleMouseOver={handleMouseOver}
                  handleMouseLeave={handleMouseLeave}
                />
              ) : (
                <ActivitiesCardList
                  activityData={checked}
                  handleMouseOver={handleMouseOver}
                  handleMouseLeave={handleMouseLeave}
                />
              )}
            </div>
          </div>
          <div className="act-right-grid-column">
            <Affix offsetTop={top}>
              <div
                data-aos="fade-left"
                data-aos-offset="500"
                data-aos-duration="500"
              >
                <ActivitiesMap />
              </div>
            </Affix>
          </div>
        </div>
      </ID.Provider>
    </TooltipColor.Provider>
  );
}
