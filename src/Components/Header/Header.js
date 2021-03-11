import './Header.css';
import Search from '../Search/Search';
import videomp4 from './headerGiffy.mp4';
import activities from '../../MockData/activities.json';
import cities from '../../MockData/cities.json';

const Header = () => {
  return (
    <div className="header">
      <video autoPlay muted>
        <source src={videomp4} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="titleContainer">
        <h1>Discover North Lebanon</h1>
        <h2>Every City has its own stuff, get to know them more with us</h2>
      </div>
      <Search citiesArray={cities} activitiesArray={activities} />
    </div>
  );
};

export default Header;
