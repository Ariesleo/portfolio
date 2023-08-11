import sendMail from './sendEmail.js';
import updateContact from '../../dao/contactQuery/contactsQueryDao.js';
import { ApplicationError } from '../../lib/api/error/applicationError.js';

const postContactQuery = async (dataQuery) => {
  try {
    const createContactQuery = await updateContact(dataQuery);
    if (createContactQuery) {
      // once response is received send email here
      const { name, email, message } = createContactQuery;
      await sendMail(name, email, message);
    }
    return createContactQuery;

    // throw new ApplicationError(CommonError.BAD_REQUEST);
  } catch (err) {
    throw new ApplicationError(err);
  }
};

export { postContactQuery };
