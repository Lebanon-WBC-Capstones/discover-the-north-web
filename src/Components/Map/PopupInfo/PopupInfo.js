import * as React from 'react';
import { Rate } from 'antd';
import './PopupInfo.css';

function PopUpInfo(props) {
  const { info } = props;
  const displayName = `${info.name} `;

  return (
    <div>
      <img
        width={185}
        height={130}
        src={info.image}
        className="img-padding-popup"
        alt="popup"
      />
      <div className="container-popup-info">
        <div className="popup-info-style">
          <div className="city-act-name-popup-cont">
            <h3 className="city-name-popup">{displayName}</h3>
            <span className="city-name-popup-span">{info.city}</span>
          </div>

          <span>
            {info.rating}{' '}
            <Rate
              style={{ fontSize: '13px' }}
              allowHalf
              disabled
              defaultValue={info.rating}
            />
          </span>
        </div>
      </div>
    </div>
  );
}

export default React.memo(PopUpInfo);
