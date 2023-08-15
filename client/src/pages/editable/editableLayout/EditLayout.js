import React from 'react';
import { Outlet } from 'react-router-dom';
import TopNavBar from '../../../components/molecules/navbar/TopNavBar';

const EditLayout = () => {
  return (
    <>
      <nav>
        <TopNavBar />
      </nav>
      <div style={{ marginTop: '1rem' }}>
        <Outlet />
      </div>
    </>
  );
};

export default EditLayout;
