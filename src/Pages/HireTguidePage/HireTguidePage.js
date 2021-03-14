import React from 'react';
import './HireTguidePage.css';
import HireMeForm from '../../Components/HireMeForm/HireMeForm.js';
import citiesData from '../../MockData/cities.json';
import { PageHeader } from 'antd';
import { useParams } from 'react-router-dom';

export default function HireTguidePage({
  Tguide_email = 'gtour180@gmail.com',
}) {
  let { name } = useParams();
  return (
    <div className="hire-me-cont">
      <PageHeader
        className="site-page-header"
        onBack={() => window.history.back()}
        title="Back"
      />
      <div
        data-aos="fade-down"
        className="info"
        data-aos-offset="500"
        data-aos-duration="500"
      >
        <div className="hire-me-divs">
          <div className="hire-me-divs-child">
            <HireMeForm
              citiesArray={citiesData}
              Tguide_email={Tguide_email}
              Tguide_name={name}
              name={name}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
