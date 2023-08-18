import React from 'react';
import { Outlet } from 'react-router-dom';
import TopNav from '../../../components/molecules/navbar/TopNav';
import BottomNav from '../../../components/molecules/navbar/BottomNav';
import './SharedLayout.css'; // Import your CSS file for styling

const SharedLayout = () => {
  return (
    <div className="shared-layout-container">
      {/* top nav */}
      <nav className="sticky-top">
        <TopNav />
      </nav>

      {/* body content */}
      <div className="content">
        <div className="scrollable-content">
          <Outlet />
        </div>
      </div>

      {/* footer */}
      <div className="sticky-bottom">
        <BottomNav />
      </div>
    </div>
  );
};

export default SharedLayout;
