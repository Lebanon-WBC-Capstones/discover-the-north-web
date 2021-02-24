import './HomePage.css';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import ActivitiesNorthLebanon from '../../Components/ActivitiesNorthLebanon/ActivitiesNorthLebanon';
import Search from '../../Components/Search/Search';
import NeedATourGuide from '../../Components/NeedATourGuide/NeedATourGuide';
import CityCard from '../../Components/Card/CityCard/CityCard';
import JoinOurTeam from '../../Components/Card/JoinOurTeam/JoinOurTeam.js';
import ActivityCard from '../../Components/Card/ActivityCard/ActivityCard';
import { Suspense } from 'react';
import { Carousel } from 'antd';
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons';

const HomePage = () => {
  const guides = [
    {
      name: 'Bakhos',
      imgSrc:
        'https://i.pinimg.com/originals/32/16/1c/32161c354ff2251a9cb97382f2c81d37.jpg',
      job: 'Hiking Guide',
      desc:
        'lorem ipsonma jakf kas  kasdb b aksbd lorem ipsonma jakf kas  kasdb b aksbd lorem ipsonma jakf kas  kasdb b aksbd',
    },
    {
      name: 'Tony',
      imgSrc:
        'https://i.pinimg.com/originals/32/16/1c/32161c354ff2251a9cb97382f2c81d37.jpg',
      job: 'Biking Guide',
      desc:
        'lorem ipsonma jakf kas  kasdb b aksbd lorem ipsonma jakf kas  kasdb b aksbd lorem ipsonma jakf kas  kasdb b aksbd',
    },
    {
      name: 'Samer',
      imgSrc:
        'https://i.pinimg.com/originals/32/16/1c/32161c354ff2251a9cb97382f2c81d37.jpg',
      job: 'Divig Guide',
      desc:
        'lorem ipsonma jakf kas  kasdb b aksbd lorem ipsonma jakf kas  kasdb b aksbd lorem ipsonma jakf kas  kasdb b aksbd',
    },
  ];
  const gems = [
    {
      name: 'Tripoli',
      imgSrc:
        'https://i.pinimg.com/originals/32/16/1c/32161c354ff2251a9cb97382f2c81d37.jpg',
      id: '1',
    },
    {
      name: 'Batroun',
      imgSrc:
        'https://i.pinimg.com/originals/32/16/1c/32161c354ff2251a9cb97382f2c81d37.jpg',
      id: '2',
    },
    {
      name: 'Zgharta',
      imgSrc:
        'https://i.pinimg.com/originals/32/16/1c/32161c354ff2251a9cb97382f2c81d37.jpg',
      id: '3',
    },
    {
      name: 'Mina',
      imgSrc:
        'https://i.pinimg.com/originals/32/16/1c/32161c354ff2251a9cb97382f2c81d37.jpg',
      id: '4',
    },
    {
      name: 'Tripoli',
      imgSrc:
        'https://i.pinimg.com/originals/32/16/1c/32161c354ff2251a9cb97382f2c81d37.jpg',
      id: '5',
    },
  ];
  const cities = [
    {
      name: 'Tripoli',
      imgSrc:
        'https://i.pinimg.com/originals/32/16/1c/32161c354ff2251a9cb97382f2c81d37.jpg',
      width: '291px',
      height: '270px',
    },
    {
      name: 'Tripoli',
      imgSrc:
        'https://i.pinimg.com/originals/32/16/1c/32161c354ff2251a9cb97382f2c81d37.jpg',
      width: '291px',
      height: '270px',
    },
    {
      name: 'Tripoli',
      imgSrc:
        'https://i.pinimg.com/originals/32/16/1c/32161c354ff2251a9cb97382f2c81d37.jpg',
      width: '291px',
      height: '270px',
    },
    {
      name: 'Tripoli',
      imgSrc:
        'https://i.pinimg.com/originals/32/16/1c/32161c354ff2251a9cb97382f2c81d37.jpg',
      width: '291px',
      height: '270px',
    },
  ];
  const settings = {
    dotPosition: 'bottom',
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <RightCircleOutlined />,
    prevArrow: <LeftCircleOutlined />,
  };

  return (
    <div className="homePage">
      <Suspense fallback="loading">
        <Navbar />
      </Suspense>
      <div className="homeHeader">
        <div className="searchBar">
          <h1 className="title">Discover North of Lebanon</h1>
          <Search citiesArray={gems} activitiesArray={gems} />
        </div>
      </div>

      <div className="hiddenGems">
        <h1>Hidden Gems in North Lebanon</h1>
      </div>

      <div className="carousel">
        <Carousel {...settings}>
          {gems.map((gem) => (
            <div className="gemCards">
              <CityCard city={gem} />
            </div>
          ))}
        </Carousel>
      </div>

      <ActivitiesNorthLebanon />

      <NeedATourGuide />

      <div className="cities">
        <div className="cityHeader">
          <h1>Cities in North Lebanon</h1>
          <a>See more cities</a>
        </div>
        <div className="citysCard">
          {cities.map((city) => (
            <ActivityCard activity={city} />
          ))}
        </div>
      </div>

      <div className="carousell">
        <Carousel autoplay effect="fade" dotPosition="bottom">
          {guides.map((guide) => (
            <JoinOurTeam guide={guide} />
          ))}
        </Carousel>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
