import { ContactQueryModel } from '../models/contactsQuery.js';

const updateContact = async (data) => {
  try {
    // console.log({ data });
    const res = await ContactQueryModel.create(data);
    // console.log({ res });
    return res;
  } catch (err) {
    // console.log('=========', err);
    return err;
  }
};

export default updateContact;
