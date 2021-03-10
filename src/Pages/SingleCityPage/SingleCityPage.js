import React, { useState, useEffect } from 'react';
import './SingleCityPage.css';
import Map from '../../Components/Map/Map.js';
import { Card, Button } from 'antd';
import CityCarousel from '../../Components/CityCarousel/CityCarousel';
import cities from '../../MockData/cities.json';
import { PageHeader } from 'antd';
import tourGuide from './tourGuide.jpg';
import { useParams, Link, useHistory } from 'react-router-dom';

export default function SingleCityPage() {
  let { id } = useParams();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [city, setCity] = useState();
  const history = useHistory();

  useEffect(() => {
    cities.forEach((c) => {
      if (c.id === parseInt(id)) {
        setCity(c);
      }
    });
  }, [id]);

  const showModal = () => {
    setIsModalVisible(true);
  };
  return (
    <div className="single-city-page">
      {city && (
        <div>
          <PageHeader
            className="site-page-header"
            onBack={() => history.push('/cities')}
            title={<span>Back</span>}
          />
          <h1 className="single-city-title">{city.name}</h1>
          <div className="gallery-container" onClick={showModal}>
            <div className="gallery">
              <div className="gallery__item gallery__item--1">
                <img src={city.images[0]} alt="city pic" class="gallery__img" />
              </div>
              <div className="gallery__item gallery__item--2">
                <img src={city.images[1]} alt="city pic" class="gallery__img" />
              </div>
              <div className="gallery__item gallery__item--3">
                <img src={city.images[2]} alt="city pic" class="gallery__img" />
              </div>
              <div className="gallery__item gallery__item--4">
                <img src={city.images[3]} alt="city pic" class="gallery__img" />
              </div>
              <div className="gallery__item gallery__item--5">
                <img src={city.images[4]} alt="city pic" class="gallery__img" />
              </div>
            </div>
          </div>
          <CityCarousel
            picArray={city.images}
            isModalVisible={isModalVisible}
            setIsModalVisible={setIsModalVisible}
          />
          <div className="single-city-cards">
            <div className="card-col">
              <Card
                style={{ height: 400, borderRadius: 10 }}
                className="card-item"
              >
                <span>
                  <h3>
                    {' '}
                    <b> Activities </b>{' '}
                  </h3>
                  <b>Activities Number : </b>
                </span>
                {city.activityNumber}
                {city.activity &&
                  city.activity.map((act) => <li>{act.type}</li>)}
              </Card>
            </div>
            <div className="card-col">
              <Card
                style={{ height: 400, borderRadius: 10 }}
                className="card-item"
              >
                <div>
                  <h3>
                    {' '}
                    <b>Description </b>{' '}
                  </h3>
                </div>
                {city.description}
              </Card>
            </div>
            <div className="card-col">
              <Card
                style={{ height: 400, borderRadius: 10 }}
                className="card-item"
              >
                <h3>
                  {' '}
                  <b>Location</b>{' '}
                </h3>
                <Map
                  width="100"
                  height="320px"
                  data={cities}
                  long={city.lng}
                  lat={city.lat}
                  zoomNb={12}
                  infoType={0}
                />
              </Card>
            </div>
          </div>
          <div className="hire-box">
            <div className="hire-box-text">
              <h1 className="icon-text">
                Don't got it alone!
                <br />
                Hire an expert to craft your trip.
              </h1>
              <Link to="/tour-guide">
                <Button type="primary" className="seemore-btn">
                  Learn more
                </Button>
              </Link>
            </div>
            <div className="hire-box-img">
              <img src={tourGuide} alt="this pic" className="tourGuide-image" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
