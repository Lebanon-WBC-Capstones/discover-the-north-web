import React from 'react';
import { Empty } from 'antd';
import { HeartOutlined } from '@ant-design/icons';
import Button from '../Button/Button';
import './NoFavoriteItem.css';

export default function NoFavoriteItem({ onclick }) {
  return (
    <div>
      <Empty
        image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
        imageStyle={{
          height: 300,
        }}
        description={
          <>
            <h1>You have no favorite activity </h1>
            <span className="nofav-description ">
              When browsing, just hover over a shot and click the{' '}
              <HeartOutlined /> button.
            </span>
          </>
        }
      >
        <Button
          type="primary"
          text="Browse activities"
          buttonWidth={'180px'}
          onClick={onclick}
        ></Button>
      </Empty>
    </div>
  );
}
