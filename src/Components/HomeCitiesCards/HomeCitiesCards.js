import React from 'react';
import { Link } from 'react-router-dom';
import ActivityCard from '../../Components/Card/ActivityCard/ActivityCard';
import cities from '../../MockData/cities.json';
import { responsive_data } from '../../MockData/data';
import { useTranslation } from 'react-i18next/';

export default function HomeCitiesCards() {
  const { t } = useTranslation();

  return (
    <div>
      <div className="cities" style={{ paddingTop: '30px' }}>
        <div className="cityHeader">
          <h1 className="home-header-size">{t('homePage.city')}</h1>
          <Link to="/cities">
            <span className="seemore">{t('homePage.seeMoreCity')}</span>
          </Link>
        </div>
        <div className="citysCard">
          {cities.map((city, index) => {
            return index < 4 ? (
              <ActivityCard activity={city} paths="cities" spec={city.id} />
            ) : null;
          })}
        </div>
      </div>
      <div className="citysCard-responsive-600">
        <ActivityCard activity={responsive_data[2]} />
        <button className="see-more-btn-resp ">See more</button>
      </div>
    </div>
  );
}
