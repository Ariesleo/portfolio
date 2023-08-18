import React from 'react';
import { Outlet } from 'react-router-dom';
import TopNav from '../../../components/molecules/navbar/TopNav';
import BottomNav from '../../../components/molecules/navbar/BottomNav';
import './SharedLayout.css'; // Import your CSS file for styling

const SharedLayout = () => {
  return (
    <div className="shared-layout">
      <nav>
        <TopNav />
      </nav>
      <div className="content">
        <Outlet />
      </div>
      <div className="footer">
        <BottomNav />
      </div>
    </div>
  );
};

export default SharedLayout;
