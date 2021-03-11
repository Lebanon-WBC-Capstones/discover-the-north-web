import './HomePage.css';
import ActivitiesNorthLebanon from '../../Components/ActivitiesNorthLebanon/ActivitiesNorthLebanon';
import Header from '../../Components/Header/Header';
import NeedATourGuide from '../../Components/NeedATourGuide/NeedATourGuide';
import WhatWeDo from '../../Components/WhatWeDo/WhatWeDo';
import CityCard from '../../Components/Card/CityCard/CityCard';
import JoinOurTeam from '../../Components/Card/JoinOurTeam/JoinOurTeam.js';
import ActivityCard from '../../Components/Card/ActivityCard/ActivityCard';
import { gems, TourGuideData, responsive_data } from '../../MockData/data';
import cities from '../../MockData/cities.json';
import { Carousel } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const settings = {
    dotPosition: 'bottom',
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <RightOutlined />,
    prevArrow: <LeftOutlined />,
  };

  return (
    <div className="homePage">
      <Header />

      <div className="under">
        <WhatWeDo activityNumber={TourGuideData.length} />

        <h1
          className="home-header-size hiddenGems"
          style={{ paddingTop: '30px' }}
        >
          Hidden Gems in North Lebanon
        </h1>
        <div className="cityCarousel">
          <Carousel {...settings}>
            {gems.map((gem) => (
              <div className="gemCards">
                <CityCard city={gem} />
              </div>
            ))}
          </Carousel>
        </div>

        <div className="act" style={{ padding: '40px 0' }}>
          <ActivitiesNorthLebanon />
        </div>

        <NeedATourGuide />

        <div className="cities" style={{ paddingTop: '30px' }}>
          <div className="cityHeader">
            <h1 className="home-header-size">Cities in North Lebanon</h1>
            <Link to="/cities">
              <span className="seemore">See more cities</span>
            </Link>
          </div>
          <div className="citysCard">
            {cities.map((city, index) => {
              return index < 4 ? (
                <ActivityCard activity={city} paths="cities" spec={city.id} />
              ) : null;
            })}
          </div>

          <div className="citysCard-responsive-600">
            <ActivityCard activity={responsive_data[2]} />
            <button className="see-more-btn-resp ">See more</button>
          </div>
        </div>

        <div className="teamCarousel" style={{ padding: '5% 0 5% 0' }}>
          <Carousel autoplay effect="fade" dots={false} infinite>
            {TourGuideData.map((item, index) => {
              return index < 6
                ? item.tour_guides.map((guide) => <JoinOurTeam guide={guide} />)
                : null;
            })}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
