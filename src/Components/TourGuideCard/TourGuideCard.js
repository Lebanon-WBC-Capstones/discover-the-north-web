import React from 'react';
import './tourGuideCard.css';
import Button from '../Button/Button';
import { Card, Row, Col, Tooltip, Tag, Skeleton } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

function TourGuideCard(tourGuide) {
  return (
    <Card
      className="tour-guide-card"
      cover={<img className="imgProp" src={tourGuide.imgsrc} alt="Guider" />}
    >
      <Row className="rowheight">
        <Col span={20}>
          <Row>
            <h1>{tourGuide.name}</h1>
          </Row>
          <div>
            Speciality : &nbsp;
            {tourGuide.tags &&
              tourGuide.tags.map((tag) => <Tag color="magenta">{tag}</Tag>)}
          </div>

          <Row justify="center" className="description">
            {!tourGuide.description ? (
              <div className="skeleton-container">
                <Skeleton.Input active size="small" className="skeleton" />
                <Skeleton.Input
                  active
                  size="small"
                  className="skeleton-small"
                />
              </div>
            ) : tourGuide.description.split(' ').length < 55 ? (
              tourGuide.description
            ) : (
              <span>
                {tourGuide.description.split(' ').slice(0, 55).join(' ')}
                <span className="see-more"> See more ..</span>
              </span>
            )}
          </Row>
        </Col>
        <Col span={4} className="col-align">
          <Row justify="end">
            <Tooltip placement="top" title="See more" arrowPointAtCenter>
              <EllipsisOutlined className="icon-size" />
            </Tooltip>
          </Row>
          <Row justify="end">
            <Link to="/hireme">
              <Button text="Hire me" type="primary">
                Hire me
              </Button>
            </Link>
          </Row>
        </Col>
      </Row>
    </Card>
  );
}
export default TourGuideCard;
