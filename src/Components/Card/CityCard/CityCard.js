import './CityCard.css';
import { Card } from 'antd';
import { Link } from 'react-router-dom';
const { Meta } = Card;

const CityCard = ({ city }) => {
  return (
    <Card
      className="cityCard"
      hoverable
      cover={<img alt={city.name} src={city.imgSrc} />}
    >
      <Link to={`/activities/${city.id}`}>
        <Meta className="meta" title={city.name} />
      </Link>
    </Card>
  );
};

export default CityCard;
