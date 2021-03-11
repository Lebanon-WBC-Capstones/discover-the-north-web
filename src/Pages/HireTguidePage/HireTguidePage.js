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
      <div className="hire-me-divs">
        <h1 className="pageHead">
          {' '}
          Fill the following form please to reach out the tour guide.{' '}
        </h1>
        <HireMeForm
          citiesArray={citiesData}
          Tguide_email={Tguide_email}
          Tguide_name={name}
        />
      </div>
    </div>
  );
}
