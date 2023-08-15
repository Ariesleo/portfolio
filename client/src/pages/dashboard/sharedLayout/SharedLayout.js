import React from 'react';
import { Outlet } from 'react-router-dom';
import TopNav from '../../../components/molecules/navbar/TopNav';

const SharedLayout = () => {
  return (
    <>
      <nav>
        <TopNav />
      </nav>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default SharedLayout;
