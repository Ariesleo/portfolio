import statusCodes from '../constants/statusCodes.js';
import * as contactService from '../services/contactsQuery.js';

// add contact Query
const addContactQuery = async (req, res, next) => {
  const bodyData = req.body;

  try {
    const addContact = await contactService.postContactQuery(bodyData);
    res.send(addContact);
  } catch (err) {
    next(err);
  }
};

export { addContactQuery };
