import statusCodes from '../../constants/statusCodes.js';
import { CommonError } from '../../lib/api/error/commonError.js';
import { ContactQueryModel } from '../../models/contactsQuery.js';
import { ApplicationError } from '../../lib/api/error/applicationError.js';

const updateContact = async (data) => {
  try {
    const res = await ContactQueryModel.create(data);
    return res;
  } catch (err) {
    throw new ApplicationError(CommonError.INTERNAL_SERVER_ERROR);
  }
};

export default updateContact;
