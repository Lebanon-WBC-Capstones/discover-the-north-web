import './ActivityCard.css';
import { Card } from 'antd';
import { Link } from 'react-router-dom';

const ActivityCard = ({ activity, col, paths, spec }) => {
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
      <Link to={`/${paths}/${spec}`}>
        <span className="card-font-c">{activity.name}</span>
      </Link>
    </Card>
  );
};

export default ActivityCard;
