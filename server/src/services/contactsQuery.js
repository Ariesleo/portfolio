import updateContact from '../dao/contactsQueryDao.js';

const postContactQuery = async (dataQuery) => {
  const { name, email, message } = dataQuery;

  //   console.log(name, email, message);

  const createContactQuery = await updateContact(dataQuery);
  // console.log({ createContactQuery });
  return createContactQuery;
};

export { postContactQuery };
