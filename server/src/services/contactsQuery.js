import updateContact from '../dao/contactsQueryDao.js';
import { CustomHttpError } from '../errors/CustomError.js';

const postContactQuery = async (dataQuery) => {
  const { name, email, message } = dataQuery;

  try {
    const createContactQuery = await updateContact(dataQuery);
    return createContactQuery;
  } catch (err) {
    throw new CustomHttpError(err.httpStatusCode, err.message);
  }
};

export { postContactQuery };
