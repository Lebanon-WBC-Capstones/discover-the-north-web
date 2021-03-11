import * as React from 'react';
import { useContext } from 'react';
import { Marker } from 'react-map-gl';
import './Markers.css';
import { TooltipColor, ID } from '../../../Pages/ActivitiesPage/ActivitiesPage';
import marker from './marker.png';
import { Link } from 'react-router-dom';

function MarkerComponent(props) {
  const { data, onHover, onMouseLeave, type } = props;

  const TooltipColorContext = useContext(TooltipColor);
  const IDcontent = useContext(ID);

  return data.map((item, index) => (
    <Marker
      key={item.id}
      latitude={item.address_coordinates[0]}
      longitude={item.address_coordinates[1]}
    >
      {type === 1 ? (
        <Link to={`/activities/${item.id}`}>
          <span
            className={
              TooltipColorContext && item.id === IDcontent
                ? 'tooltiptext tooltiptextYellow'
                : 'tooltiptext tooltiptextBlue'
            }
            onMouseOver={() => setTimeout(onHover(item), 5000)}
            onMouseLeave={() => onMouseLeave(item)}
          >
            {item.price === 'FREE' ? item.price : item.price + '$'}
          </span>
        </Link>
      ) : (
        <img src={marker} className="cityMarker" alt="marker" />
      )}
    </Marker>
  ));
}

export default React.memo(MarkerComponent);
