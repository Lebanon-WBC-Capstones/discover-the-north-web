import React from 'react';
import Dropdown from '../Dropdown/Dropdown';
import './DropdownPackage.css';
import activities_data from '../../MockData/activities.json';
import cities from '../../MockData/cities.json';
import Button from '../Button/Button';

export default function DropDownsPackage({ handleFilter }) {
  const prices = [
    { name: 'All' },
    { name: 'FREE' },
    { name: 'Less Than 15$' },
    { name: 'Between 15-30 $' },
  ];
  const [priceResult, setPriceResult] = React.useState([]);
  const [actResult, setActResult] = React.useState([]);
  const [cityResult, setCityResult] = React.useState([]);

  function handleSelectAct(act) {
    const result = activities_data.filter((a) => act === a.genre);
    setActResult(result);
  }
  function handleSelectCity(city) {
    const result = activities_data.filter((a) => city === a.city);
    setCityResult(result);
  }
  function handleSelectPrice(select) {
    if (select === 'All') {
      setPriceResult(activities_data);
    }
    if (select === 'FREE') {
      const result = activities_data.filter((a) => a.price === select);
      setPriceResult(result);
    }
    if (select === 'Less Than 15$') {
      const result = activities_data.filter((a) => a.price <= 15);
      setPriceResult(result);
    }
    if (select === 'Between 15-30 $') {
      const result = activities_data.filter(
        (a) => a.price >= 15 && a.price <= 30
      );
      setPriceResult(result);
    }
  }
  const handleClick = () => {
    handleFilter(priceResult, actResult, cityResult);
    setPriceResult([]);
    setCityResult([]);
    setActResult([]);
  };
  return (
    <div className="dropdown-package">
      <Dropdown
        elementArray={activities_data}
        handleSelect={handleSelectAct}
        dropdownTitle={'Activities'}
        infoType={1}
      />
      <Dropdown
        elementArray={cities}
        handleSelect={handleSelectCity}
        dropdownTitle={'Cities'}
        infoType={0}
      />
      <Dropdown
        elementArray={prices}
        handleSelect={handleSelectPrice}
        dropdownTitle={'Price'}
        infoType={0}
      />
      <Button text="filter" onClick={handleClick} />
    </div>
  );
}
