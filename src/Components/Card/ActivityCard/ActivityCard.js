import './ActivityCard.css';
import { Card } from 'antd';
const { Meta } = Card;

const ActivityCard = ({ activity, col }) => {
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
      <Meta className="card-body" title={activity.name} />
    </Card>
  );
};

export default ActivityCard;
