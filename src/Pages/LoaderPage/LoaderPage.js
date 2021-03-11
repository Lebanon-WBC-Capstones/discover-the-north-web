import React from 'react';
import Loader from '../../Components/Loader/Loader';

export default function LoaderPage() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Loader />
    </div>
  );
}
