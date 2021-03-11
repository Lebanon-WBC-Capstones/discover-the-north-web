import './Header.css';
import Search from '../Search/Search';
import videomp4 from './headerGiffy.mp4';
import activities from '../../MockData/activities.json';
import cities from '../../MockData/cities.json';
import { useTranslation } from 'react-i18next/';

const Header = () => {
  const { t } = useTranslation();
  return (
    <div className="header">
      <video autoPlay muted>
        <source src={videomp4} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="titleContainer">
        <h1>{t('homePage.title')}</h1>
        <h2>{t('homePage.titleDesc')}</h2>
      </div>
      <Search citiesArray={cities} activitiesArray={activities} />
    </div>
  );
};

export default Header;
