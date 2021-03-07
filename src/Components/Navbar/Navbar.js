import React from 'react';
import { Layout, Menu, Dropdown } from 'antd';
import { GlobalOutlined } from '@ant-design/icons';
import './Navbar.css';
import ButtonComponont from '../Button/Button';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

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
  const logo =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Bugarach.JPG/1200px-Bugarach.JPG';
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

  return (
    <div>
      <Layout id="navbar-header-style">
        <div className="languages-toggle-lr">
          <img className="logo" alt="discover the north Logo" src={logo}></img>
        </div>

        <Menu className="navbar-header-style-center" mode="horizontal">
          {/* <Menu.Item key="0">
            <Link to="/" className="navbar-items">
              Home {t('navbar.home')}
            </Link>
          </Menu.Item> */}
          <Menu.Item key="1" className="navbar-items">
            <Link to="/about-us">{t('navbar.about')} </Link>
          </Menu.Item>
          <Menu.Item key="2" className="navbar-items">
            <Link to="/cities">{t('navbar.cities')} </Link>
          </Menu.Item>
          <Menu.Item key="3" className="navbar-items">
            <Link to="/activities">{t('navbar.activities')} </Link>
          </Menu.Item>
          <Menu.Item key="4" className="navbar-items">
            <Link to="/tour-guide">{t('navbar.tourGuide')} </Link>
          </Menu.Item>
        </Menu>

        <div className="languages-toggle-lr">
          <Dropdown.Button
            id="langButton"
            overlay={menu}
            placement="bottomCenter"
            icon={<GlobalOutlined />}
          />
          <ButtonComponont text={t('button.text')} type="primary" />
        </div>
      </Layout>
    </div>
  );
}
