import React from 'react';
import Map from '../../Components/Map/Map';
import activities_data from '../../MockData/activities.json';

export default function ActivitiesMap() {
  return (
    <div>
      <Map
        long={36.01043}
        lat={34.24815}
        zoomNb={8.9}
        infoType={1}
        width="106"
        height="98ch"
        data={activities_data}
      />
    </div>
  );
}
