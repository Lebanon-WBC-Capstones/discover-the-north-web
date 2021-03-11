import './ActivityCard.css';
import { Card } from 'antd';
import { Link } from 'react-router-dom';
const { Meta } = Card;

const ActivityCard = ({ activity, col, paths, spec }) => {
  const imageHeight = parseInt(activity.height);
  return (
    <Card
      className={`activityCard col${col}`}
      hoverable
      style={{
        width: activity.width,
        height: activity.height,
      }}
      cover={
        <img
          alt={activity.name}
          src={activity.image}
          width={activity.width}
          height={imageHeight < 500 ? imageHeight / 1.27 : imageHeight / 1.1}
        />
      }
    >
      <Link to={`/${paths}/${spec}`}>
        <Meta className="card-body" title={activity.name} />
      </Link>
    </Card>
  );
};

export default ActivityCard;
