import statusCodes from '../../constants/statusCodes.js';
import { contactQuerySchema } from './validation.js';
import * as contactService from '../../services/contactQuery/contactsQuery.js';
import { createError } from '../../lib/api/error/errorFactory.js';

// validate contact request body query
const validateContactQuery = async (req, res, next) => {
  try {
    await contactQuerySchema().validate(req.body, { abortEarly: false });
  } catch (e) {
    return next(createError(e));
  }
  next();
};

// add contact Query
const addContactQuery = async (req, res, next) => {
  const bodyData = req.body;

  try {
    const addContact = await contactService.postContactQuery(bodyData);
    res.status(statusCodes.CREATED).send({
      success: 'true',
      message: 'contact query added',
      data: addContact,
    });
  } catch (err) {
    next(err);
  }
};

export { addContactQuery, validateContactQuery };
