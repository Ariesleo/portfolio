import profileData from './data.js';
import { ProfileModel } from '../../models/profileSchema.js';
import { CommonError } from '../../lib/api/error/commonError.js';
import { ApplicationError } from '../../lib/api/error/applicationError.js';

const updateOrCreateProfile = async (payload) => {
  try {
    // Try to find an existing document
    let existingProfile = await ProfileModel.findOne();

    // If no existing document is found, create a new one
    if (!existingProfile) {
      existingProfile = new ProfileModel(profileData);
    }

    // Update the document with the provided payload
    Object.assign(existingProfile, payload);

    // Save the document
    const updatedProfile = await existingProfile.save();

    return updatedProfile;
  } catch (error) {
    console.log(error);
    throw new ApplicationError(CommonError.INTERNAL_SERVER_ERROR);
  }
};

export { updateOrCreateProfile };
