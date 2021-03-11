import './CityCard.css';
import { Card } from 'antd';
import { Link } from 'react-router-dom';

const CityCard = ({ city }) => {
  const bodyStyleColor = {
    fontSize: '18px',
    color: '#001c84',
    textAlign: 'center',
    marginTop: '-12px',
  };
  return (
    <Card
      className="home-city-card"
      bordered={true}
      cover={<img alt={city.name} src={city.imgSrc} />}
      bodyStyle={bodyStyleColor}
    >
      <Link to={`/activities/${city.id}`}>{city.name}</Link>
    </Card>
  );
};

export default CityCard;
