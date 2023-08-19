import React, { createContext, useContext, useEffect, useState } from 'react';
import { fetchProfile } from '../services/profileService';

// created AppContext using createContext hook
const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [profileData, setProfileData] = useState({});
  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const resp = await fetchProfile();
        setProfileData(resp.data.data);
      } catch (err) {
        console.log(err.code, err.response.data);
      }
    };
    fetchProfileData();
  }, []);

  return (
    <AppContext.Provider value={profileData}>{children}</AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useAppContext };
