import './HomePage.css';
import ActivitiesNorthLebanon from '../../Components/ActivitiesNorthLebanon/ActivitiesNorthLebanon';
import Header from '../../Components/Header/Header';
import NeedATourGuide from '../../Components/NeedATourGuide/NeedATourGuide';
import WhatWeDo from '../../Components/WhatWeDo/WhatWeDo';
import CityCard from '../../Components/Card/CityCard/CityCard';
import JoinOurTeam from '../../Components/Card/JoinOurTeam/JoinOurTeam.js';
import { gems, TourGuideData } from '../../MockData/data';
import { Carousel } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next/';
import HomeCitiesCards from '../../Components/HomeCitiesCards/HomeCitiesCards';

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

  const { t } = useTranslation();
  return (
    <div className="homePage">
      <Header />

      <div className="under">
        <WhatWeDo activityNumber={TourGuideData.length} />

        <h1
          className="home-header-size hiddenGems"
          style={{ paddingTop: '30px' }}
        >
          {t('homePage.gems')}
        </h1>

        <div className="cityCarousel">
          <div data-aos="fade-up">
            <Carousel {...settings}>
              {gems.map((gem) => (
                <div className="gemCards">
                  <CityCard city={gem} />
                </div>
              ))}
            </Carousel>
          </div>
        </div>

        <div className="act" style={{ padding: '40px 0' }}>
          <div data-aos="fade-up">
            <ActivitiesNorthLebanon />
          </div>
        </div>
        <div data-aos="fade-up">
          <NeedATourGuide />
        </div>

        <div data-aos="fade-up">
          <HomeCitiesCards />
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
