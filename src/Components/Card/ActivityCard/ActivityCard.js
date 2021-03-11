import './ActivityCard.css';
import { Card } from 'antd';

const ActivityCard = ({ activity, col }) => {
  const imageHeight = parseInt(activity.height);
  const style = {
    objectFit: 'cover',
  };
  const bodyStyleColor = {
    fontSize: '18px',
    color: '#001c84',
    textAlign: 'center',
    marginTop: '-12px',
  };
  return (
    <Card
      bodyStyle={bodyStyleColor}
      className={`activityCard col${col}`}
      hoverable
      bordered
      style={{
        width: activity.width,
        height: activity.height,
      }}
      cover={
        <img
          alt={activity.name}
          src={activity.image}
          width={activity.width}
          style={style}
          height={imageHeight < 500 ? imageHeight / 1.2 : imageHeight / 1.1}
        />
      }
    >
      {activity.name}
    </Card>
  );
};

export default ActivityCard;
