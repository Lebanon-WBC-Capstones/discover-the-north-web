import React, { useState } from 'react';
import './activityItem.css';
import { Card, Row, Col, Typography, Rate, Badge } from 'antd';
import { Link } from 'react-router-dom';
import Like from '../Like/Like';
import { DoubleArrow } from '@material-ui/icons';

const { Title } = Typography;
export default function ActivitiesItem(props) {
  const {
    index,
    imgsrc,
    name,
    cityName,
    rating,
    price,
    tags,
    handleMouseOver,
    handleMouseLeave,
  } = props;
  const [activeActivityItem, setActiveActivityItem] = useState(null);
  const activate = () => {
    setActiveActivityItem(activeActivityItem);
  };
  return (
    <Card
      className="activity-item-card"
      hoverable
      key={index}
      onMouseOver={(elem) => handleMouseOver(index)}
      onMouseLeave={(elem) => handleMouseLeave(index)}
      onClick={activate}
    >
      <Row>
        <Col span={9}>
          <img
            className="activity-card-image"
            src={imgsrc}
            width={210}
            height={150}
            alt="activity"
          />
        </Col>
        <Col span={15}>
          <Row>
            <Col span={21}>
              <Title style={{ color: '#021b77' }} level={3}>
                {name}
              </Title>
            </Col>
            <Col span={3}>
              <Like />
            </Col>
          </Row>
          <Row className="middle-row-height">
            <Col span={20} className="cityName">
              {cityName}
              <br />
              <Rate
                disabled
                allowHalf
                defaultValue={rating}
                className="rating-act-size"
              />
            </Col>
            <Col span={4}>
              <Title
                style={{ textAlign: 'center', color: '#021b77' }}
                level={3}
              >
                {price === 'FREE' ? price : price + '$'}
              </Title>
            </Col>
          </Row>
          <hr style={{ borderTop: 'lightgray' }} />
          <Row justify="space-between">
            {tags.length < 3
              ? tags.map((tag) => <span className="tagsFontColor">{tag}</span>)
              : tags
                  .slice(0, 2)
                  .map((tag) => <span className="tagsFontColor">{tag}</span>)}
            {tags.length > 2 && (
              <Badge
                overflowCount={10}
                style={{ backgroundColor: '#108EE9' }}
                count={tags.length - 2}
              />
            )}
            <Link to={`/activities/${index}`}>
              <span className="learnMore">
                learn more <DoubleArrow className="double-ar-right" />
              </span>
            </Link>
          </Row>
        </Col>
      </Row>
    </Card>
  );
}
