import React, { useState } from 'react';
import './tourGuideCard.css';
import { Card, Row, Col, Tooltip, Tag, Skeleton } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import TourGuideModal from '../TourGuideModal/TourGuideModal';

function TourGuideCard(tourGuide) {
  const [modal, setModal] = useState(false);
  const handleCancel = () => setModal(false);

  const imgstyle = {
    borderRadius: '10px',
  };
  return (
    <Card
      className="tour-guide-card"
      cover={
        <img
          className="imgProp"
          style={imgstyle}
          src={tourGuide.imgsrc}
          alt="Guider"
        />
      }
    >
      <Row className="rowheight">
        <Col span={20}>
          <Row>
            <h1>{tourGuide.name}</h1>
          </Row>
          <div>
            Speciality : &nbsp;
            {tourGuide.tags &&
              tourGuide.tags.map((tag) => <Tag color="blue">{tag}</Tag>)}
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
            ) : tourGuide.description.split(' ').length < 30 ? (
              tourGuide.description
            ) : (
              <span className="tour-guider-desc">
                {tourGuide.description.split(' ').slice(0, 30).join(' ')}
                &nbsp;<span className="tour-see-more"> See more ..</span>
              </span>
            )}
          </Row>
        </Col>
        <Col span={4} className="col-align">
          <Row justify="end">
            <Tooltip
              placement="top"
              title="See more"
              arrowPointAtCenter
              onClick={() => null}
            >
              <EllipsisOutlined
                className="icon-size"
                onClick={() => setModal(true)}
              />
              <TourGuideModal
                visible={modal}
                guide={tourGuide.guide}
                handleCancel={handleCancel}
              />
            </Tooltip>
          </Row>
          <Row justify="end">
            <Link to={`/hire-me/${tourGuide.name}`}>
              <button
                className="hire-me-card-btn"
                text="Hire me"
                type="primary"
              >
                Hire me
              </button>
            </Link>
          </Row>
        </Col>
      </Row>
    </Card>
  );
}
export default TourGuideCard;
