import './ActivitiesNorthLebanon.css';
import ActivityCard from '../Card/ActivityCard/ActivityCard';
import { activities, responsive_data } from '../../MockData/data';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next/';

const ActivitiesNorthLebanon = () => {
  const { t } = useTranslation();
  return (
    <div className="containers">
      <div className="act-north-leb-headers">
        <h1 className="home-header-size">{t('homePage.activity')}</h1>
        <Link to="activities">
          <span className="seemore">{t('homePage.seeMoreAct')}</span>
        </Link>
      </div>
      <div className="grid">
        {activities.map((activity, index) => (
          <ActivityCard
            activity={activity}
            col={index}
            paths="activities"
            spec={activity.id}
          />
        ))}
      </div>

      <div className="responsive-mobile-600-style">
        <div className="responsive-mobile-600-style-flex-cont">
          <div className="responsive-mobile-600-act">
            <ActivityCard activity={responsive_data[0]} />
            <ActivityCard activity={responsive_data[1]} />
          </div>
          <Link to="/activities">
            <button className="see-more-btn-resp">See more</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ActivitiesNorthLebanon;
