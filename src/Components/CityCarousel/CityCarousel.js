import React, { useState } from 'react';
import { Modal } from 'antd';
import './CityCarousel.css';
import { LeftOutlined, RightOutlined, CloseOutlined } from '@ant-design/icons';

export default function CityCarousel({
  picArray,
  isModalVisible,
  setIsModalVisible,
}) {
  const [imgSrc, setImgSrc] = useState(picArray[0]);

  function currentSlide(n) {
    setImgSrc(picArray[n]);
  }
  function plusSlides(n) {
    picArray.forEach((pic, index) => {
      if (pic === imgSrc) {
        if (index + n >= picArray.length) {
          setImgSrc(picArray[0]);
        } else if (index + n < 0) {
          setImgSrc(picArray[picArray.length - 1]);
        } else {
          setImgSrc(picArray[index + n]);
        }
      }
    });
  }

  return (
    <div className="cities-carousel">
      <Modal
        visible={isModalVisible}
        footer={null}
        width={848}
        height={700}
        onCancel={() => setIsModalVisible(false)}
        closeIcon={
          <CloseOutlined style={{ color: 'white' }} className="close-icon" />
        }
      >
        <div className="city-car-container">
          <div className="big-pic-row">
            <img src={imgSrc} className="big-image city-car-img" alt="pic" />
          </div>
          <div className="prev" onClick={() => plusSlides(-1)}>
            <LeftOutlined />
          </div>
          <div className="next" onClick={() => plusSlides(1)}>
            <RightOutlined />
          </div>
          <div className="row">
            {picArray.map((pic, index) => (
              <div className="column">
                <img
                  className="demo cursor small-pic city-car-img"
                  src={pic}
                  onClick={() => currentSlide(index)}
                  alt="pic"
                />
              </div>
            ))}
          </div>
        </div>
      </Modal>
    </div>
  );
}
