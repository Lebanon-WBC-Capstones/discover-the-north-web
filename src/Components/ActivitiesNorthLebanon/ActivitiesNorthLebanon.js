import './ActivitiesNorthLebanon.css';
import ActivityCard from '../Card/ActivityCard/ActivityCard';
import { activities } from '../../MockData/data';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next/';

const ActivitiesNorthLebanon = () => {
  const { t } = useTranslation();
  return (
    <div className="containers">
      <div className="headers">
        <h1>{t('homePage.activity')}</h1>
        <Link to="activities">{t('homePage.seeMoreAct')}</Link>
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
    </div>
  );
};

export default ActivitiesNorthLebanon;
