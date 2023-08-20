import React, { createContext, useContext, useEffect, useState } from 'react';
import { fetchProfile } from '../services/profileService';

// created AppContext using createContext hook
const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [profileData, setProfileData] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const resp = await fetchProfile();
        setProfileData(resp.data.data);
      } catch (err) {
        if (err.code === 'ERR_BAD_RESPONSE') {
          setErrorMessage('Server is Down. Try again later........');
        } else {
          setErrorMessage(err.response.data);
        }
      }
    };
    fetchProfileData();
  }, []);

  return (
    <AppContext.Provider value={profileData}>
      {!errorMessage ? children : errorMessage}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useAppContext };
