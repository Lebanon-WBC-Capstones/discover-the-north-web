import React, { useState } from 'react';
import { Layout, Menu, Dropdown, Affix } from 'antd';
import { GlobalOutlined } from '@ant-design/icons';
import './Navbar.css';
import ButtonComponont from '../Button/Button';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import logo from './proj_logo.png';

const LANG_SPECS = [
  {
    code: 'en',
    name: 'English',
  },
  {
    code: 'ar',
    name: 'العربية',
  },
];

export default function Navbar() {
  const [t, i18n] = useTranslation();

  const menu = (
    <Menu>
      {LANG_SPECS.map((lang) => {
        return (
          <Menu.Item
            key={lang.code}
            icon={<GlobalOutlined />}
            onClick={() => {
              i18n.changeLanguage(lang.code);
              console.log(
                'language code iss =>>' +
                  lang.code +
                  '\n language name is =>>' +
                  lang.name
              );
            }}
          >
            {lang.name}
          </Menu.Item>
        );
      })}
    </Menu>
  );
  const [top] = useState(0);
  return (
    <Affix offsetTop={top}>
      <div>
        <Layout id="navbar-header-style">
          <div className="languages-toggle-lr">
            <img
              className="logo"
              alt="discover the north Logo"
              src={logo}
            ></img>
          </div>
          <Menu className="headerStyleCenter" mode="horizontal">
            <Menu.Item key="1">
              <Link to="/">
                <span className="navbar-items">{t('navbar.home')}</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/activities">
                <span className="navbar-items">{t('navbar.activities')}</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/cities">
                <span className="navbar-items">{t('navbar.cities')} </span>
              </Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link to="/tour-guide">
                <span className="navbar-items">{t('navbar.tourGuide')} </span>
              </Link>
            </Menu.Item>
            <Menu.Item key="5">
              <Link to="/about-us">
                <span className="navbar-items">{t('navbar.about')} </span>
              </Link>
            </Menu.Item>
          </Menu>
          <div className="languages-toggle-lr">
            <Dropdown.Button
              id="langButton"
              overlay={menu}
              placement="bottomCenter"
              icon={<GlobalOutlined />}
            />
            <ButtonComponont text={t('navbar.signInButton')} type="primary" />
          </div>
        </Layout>
      </div>
    </Affix>
  );
}
