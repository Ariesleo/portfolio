import { CommonError } from '../../lib/api/error/commonError.js';
import updateContact from '../../dao/contactQuery/contactsQueryDao.js';
import { ApplicationError } from '../../lib/api/error/applicationError.js';

const postContactQuery = async (dataQuery) => {
  const { name, email, message } = dataQuery;

  try {
    const createContactQuery = await updateContact(dataQuery);
    return createContactQuery;
    // throw new ApplicationError(CommonError.BAD_REQUEST);
  } catch (err) {
    throw new ApplicationError(err);
  }
};

export { postContactQuery };
