import React from 'react';
import { Outlet } from 'react-router-dom';
import TopNavBar from '../../../components/molecules/navbar/TopNavBar';
import SingIn from '../../signIn/SingIn';
import { useAppContext } from '../../../context/appContext';

const EditLayout = () => {
  const { token } = useAppContext();
  if (!token) {
    return <SingIn />;
  } else {
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
  }
};

export default EditLayout;
