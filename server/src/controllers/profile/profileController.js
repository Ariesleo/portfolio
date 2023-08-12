import { profileSchema } from './validation.js';
import statusCodes from '../../constants/statusCodes.js';
import { CommonError } from '../../lib/api/error/commonError.js';
import { createError } from '../../lib/api/error/errorFactory.js';
import * as profileService from '../../services/profile/profileService.js';
import { ApplicationError } from '../../lib/api/error/applicationError.js';

// validate the profile request body
const validateProfile = async (req, res, next) => {
  try {
    await profileSchema().validate(req.body, {
      abortEarly: false,
    });
  } catch (e) {
    return next(createError(e));
  }
  next();
};

// update the profile
const patchProfile = async (req, res, next) => {
  const payload = req.body;
  try {
    const profileData = await profileService.updateProfile(payload);
    if (!profileData) {
      throw new ApplicationError(CommonError.RESOURCE_NOT_FOUND);
    } else {
      res.status(statusCodes.OK).send({
        success: 'true',
        message: `Profile was updated sucessfully`,
        data: profileData,
      });
    }
  } catch (err) {
    next(err);
  }
};

// fetch the profile data
const getProfile = async (req, res, next) => {
  try {
    const profileData = await profileService.fetchProfile();
    if (!profileData) {
      throw new ApplicationError(CommonError.RESOURCE_NOT_FOUND);
    } else {
      res.status(statusCodes.OK).send({
        success: 'true',
        message: `Profile was fetched sucessfully`,
        data: profileData,
      });
    }
  } catch (err) {
    next(err);
  }
};

export { validateProfile, patchProfile, getProfile };
