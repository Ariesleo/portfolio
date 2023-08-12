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

const postProfile = async (req, res, next) => {
  const payload = req.body;
  try {
    const projectData = await profileService.updateProfile(payload);
    if (!projectData) {
      throw new ApplicationError(CommonError.RESOURCE_NOT_FOUND);
    } else {
      res.status(statusCodes.OK).send({
        success: 'true',
        message: `Profile was updated sucessfully`,
        data: projectData,
      });
    }
  } catch (err) {
    console.log('error', err);
    next(err);
  }
};

export { validateProfile, postProfile };
