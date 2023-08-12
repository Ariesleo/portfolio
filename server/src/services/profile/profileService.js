import * as profileDAO from '../../dao/profileDAO/profileDao.js';
import { ApplicationError } from '../../lib/api/error/applicationError.js';

const updateProfile = async (payload) => {
  try {
    return await profileDAO.updateOrCreateProfile(payload);
  } catch (err) {
    throw new ApplicationError(err);
  }
};

const fetchProfile = async () => {
  try {
    return await profileDAO.findProfile();
  } catch (err) {
    throw new ApplicationError(err);
  }
};

export { updateProfile, fetchProfile };
