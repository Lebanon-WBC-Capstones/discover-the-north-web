import './CityCard.css';
import { Card } from 'antd';
import { Link } from 'react-router-dom';

const CityCard = ({ city }) => {
  const bodyStyleColor = {
    fontSize: '18px',
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
      <Link to={`/activities/${city.id}`}>
        <span className="card-font-c">{city.name}</span>
      </Link>
    </Card>
  );
};

export default CityCard;
