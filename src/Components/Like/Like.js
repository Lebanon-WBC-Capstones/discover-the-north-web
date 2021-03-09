import React, { useState } from 'react';
import { FavoriteBorder, Favorite } from '@material-ui/icons';
import { Tooltip } from 'antd';
import './Like.css';

export default function Like() {
  const [like, setLike] = useState(true);
  const toggleLike = () => {
    setLike(!like);
  };
  return (
    <div className="like-icn-12">
      <Tooltip
        placement="top"
        title={like ? 'add to favorite' : 'remove from favorite'}
      >
        {like ? (
          <FavoriteBorder
            style={{ fontSize: '40px' }}
            className="heartOutlined"
            onClick={toggleLike}
          />
        ) : (
          <Favorite
            style={{ fontSize: '40px' }}
            className="heartFilled"
            onClick={toggleLike}
          />
        )}
      </Tooltip>
    </div>
  );
}
