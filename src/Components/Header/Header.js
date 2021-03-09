import './Header.css';
import Search from '../Search/Search';
import videomp4 from './headerGiffy.mp4';
import { gems } from '../../MockData/data';

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
      <Search citiesArray={gems} activitiesArray={gems} />
    </div>
  );
};

export default Header;
