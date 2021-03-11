import React, { useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Select } from 'antd';
import './Search.css';
import { useTranslation } from 'react-i18next/';

export default function Search({ citiesArray, activitiesArray, handleSearch }) {
  const { t } = useTranslation();
  const [citySearch, setCitySearch] = useState(undefined);
  const [activitySearch, setActivitySearch] = useState('');
  const [cityVal, setCityVal] = useState(`${t('homePage.searchCity')}`);
  const [activityVal, setActivityVal] = useState(`${t('homePage.searchAct')}`);
  const { Option } = Select;
  let id = 0;
  function handleChangeCity(value) {
    setCitySearch(value);
    setCityVal(value);
  }
  function handleChangeAct(value) {
    setActivitySearch(value);
    setActivityVal(value);
  }
  function onSearch(val) {
    citiesArray.forEach((city) => {
      if (val === city) setCitySearch(val);
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    // handleSearch(citySearch, activitySearch);
    let c = activitiesArray.filter(
      (act) => act.city === citySearch && act.name === activitySearch
    );
    id = c.map((act) => act.id);
    setTimeout(() => {
      window.location = `/activities/${id[0]}`;
    }, 300);
    setCitySearch(undefined);
    setActivitySearch('');
    setCityVal(`${t('homePage.searchCity')}`);
    setActivityVal(`${t('homePage.searchAct')}`);
    e.target.reset();
  }

  return (
    <div>
      <form className="search-box" onSubmit={handleSubmit}>
        <Select
          className="selectBox"
          value={cityVal}
          showSearch
          onSearch={onSearch}
          style={{
            width: '50%',
          }}
          allowClear="true"
          onChange={handleChangeCity}
        >
          {citiesArray.map((city) => {
            return (
              <Option key={city.id} value={city.name}>
                {city.name}
              </Option>
            );
          })}
        </Select>

        <hr className="vertical-hr" />
        <Select
          className="selectBox"
          value={activityVal}
          showSearch
          style={{ width: '50%' }}
          allowClear="true"
          onChange={handleChangeAct}
        >
          {citySearch === undefined
            ? activitiesArray.map((act) => {
                return (
                  <Option key={act.id} value={act.name}>
                    {act.name}
                  </Option>
                );
              })
            : activitiesArray
                .filter((act) => act.city === citySearch)
                .map((act) => {
                  return (
                    <Option key={act.id} value={act.name}>
                      {act.name}
                    </Option>
                  );
                })}
        </Select>
        <button className="search-btn">
          <SearchOutlined
            style={{ fontSize: '18px', color: 'white' }}
            rotate="90"
          />
        </button>
      </form>
    </div>
  );
}
