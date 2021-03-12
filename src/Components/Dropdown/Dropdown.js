import React, { useState } from 'react';
import { Menu, Dropdown, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import './Dropdown.css';

export default function DropdownButton({
  elementArray,
  handleSelect,
  dropdownTitle,
  infoType,
}) {
  const [elementChecked, setElementChecked] = useState(dropdownTitle);
  const handleClick = (element) => {
    let value = element.item.props.value;
    setElementChecked(value);
    handleSelect(value);
  };

  const genres = [];
  elementArray.map((item) => genres.push(item.genre));

  const menu = (
    <Menu className="itemsContainer">
      {infoType === 0
        ? elementArray.map((item, index) => (
            <Menu.Item
              className="items"
              value={infoType === 0 ? item.name : item.genre}
              key={index}
              onClick={(element) => handleClick(element)}
            >
              {item.name}
            </Menu.Item>
          ))
        : genres &&
          [...new Set(genres)].map((item, index) => (
            <Menu.Item
              className="items"
              value={infoType === 0 ? item.name : item.genre}
              key={index}
              onClick={(element) => handleClick(element)}
            >
              {item}
            </Menu.Item>
          ))}
    </Menu>
  );
  return (
    <div>
      <Dropdown overlay={menu}>
        <Button className="dropButton" shape="round">
          {elementChecked} <DownOutlined />
        </Button>
      </Dropdown>
    </div>
  );
}
