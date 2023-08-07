import statusCodes from '../constants/statusCodes.js';
import * as contactService from '../services/contactsQuery.js';

// add contact Query
const addContactQuery = async (req, res) => {
  const bodyData = req.body;
  const addContact = await contactService.postContactQuery(bodyData);
  console.log({ addContact });
  res.send(addContact);
};

export { addContactQuery };
