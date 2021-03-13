import { useState } from 'react';
import { Timeline } from 'antd';
import { Link } from 'react-router-dom';

function Timeline2({ i, id, name1, name2 }) {
  const [mode] = useState('left');
  return (
    <>
      <Timeline mode={mode}>
        <Link to={`/activities/${id}`}>
          <Timeline.Item color={i % 2 === 0 ? 'red' : 'green'} label={name1}>
            {name2}
          </Timeline.Item>
        </Link>
      </Timeline>
    </>
  );
}

export default Timeline2;
