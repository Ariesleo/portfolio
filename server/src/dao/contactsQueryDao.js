import statusCodes from '../constants/statusCodes.js';
import { CustomHttpError } from '../errors/CustomError.js';
import { ContactQueryModel } from '../models/contactsQuery.js';

const updateContact = async (data) => {
  try {
    const res = await ContactQueryModel.create(data);
    return res;
  } catch (err) {
    throw new CustomHttpError(statusCodes.INTERNAL_SERVER_ERROR, err.message);
  }
};

export default updateContact;
