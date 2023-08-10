import * as Yup from 'yup';

// contact query schema
const contactQuerySchema = () => {
  return Yup.object().shape({
    name: Yup.string()
      .min(2, 'Name must be at least 2 characters')
      .max(50, 'Name can be at most 50 characters')
      .required('Name is required'),
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
    message: Yup.string()
      .min(10, 'Message must be at least 10 characters')
      .max(1000, 'Message can be at most 1000 characters')
      .required('Message is required'),
  });
};

export { contactQuerySchema };
