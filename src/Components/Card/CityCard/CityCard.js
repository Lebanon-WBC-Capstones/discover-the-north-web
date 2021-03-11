import './CityCard.css';
import { Card } from 'antd';

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
      {city.name}
    </Card>
  );
};

export default CityCard;
