import React from 'react';
import { Link } from 'react-router-dom';
import { Timeline } from 'antd';

export default function Timeline1({ i, id, name }) {
  return (
    <div>
      <Timeline>
        <Timeline.Item color={i % 2 === 0 ? 'red' : 'green'}>
          <Link to={`/activities/${id}`}>
            <span className="a-name-c">{name}</span>
          </Link>
        </Timeline.Item>
      </Timeline>
    </div>
  );
}
