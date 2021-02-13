import React, { useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import './Search.css';
import { Menu, Dropdown } from 'antd';

export default function Search(props) {
  const [citySearch, setCitySearch] = useState('');
  const [activitySearch, setActivitySearch] = useState('');
  const citiesMenu = (
    <Menu>
      {props.citiesArray.map((city, index) => {
        return <Menu.Item key={index}>{city}</Menu.Item>;
      })}
    </Menu>
  );
  const activitiesMenu = (
    <Menu>
      {props.activitiesArray.map((activity, index) => {
        return <Menu.Item key={index}>{activity}</Menu.Item>;
      })}
    </Menu>
  );

  function handleSubmit(e) {
    e.preventDefault();
    props.handleSearch(citySearch, activitySearch);
    setCitySearch('');
    setActivitySearch('');
  }
  return (
    <div>
      <form className="search-box" onSubmit={handleSubmit} id="newForm">
        <div className="search-inputs">
          <Dropdown overlay={citiesMenu}>
            <input
              type="text"
              value={citySearch}
              onChange={(e) => setCitySearch(e.target.value)}
              placeholder="Search for a city"
            />
          </Dropdown>
          <Dropdown overlay={activitiesMenu}>
            <input
              type="text"
              value={activitySearch}
              onChange={(e) => setActivitySearch(e.target.value)}
              placeholder="Search for an activity"
            />
          </Dropdown>
        </div>
        <button className="search-btn">
          <SearchOutlined
            style={{ fontSize: '20px', color: 'white' }}
            rotate="90"
          />
        </button>
      </form>
    </div>
  );
}
