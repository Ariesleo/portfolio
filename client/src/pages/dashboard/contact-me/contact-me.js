import React, { useState } from 'react';
import FormRow from '../../../components/atoms/formRow';
import Button from '../../../components/atoms/button';
import { Wrapper, ThankyouBlock } from './styles.js';
import { postQuery } from '../../../services/contactMeService';

const ContactMe = () => {
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a new FormData object to collect form data
    const formData = new FormData(e.target);

    // Get the values from the formData object
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    const payload = {
      name,
      email,
      message,
    };

    try {
      const res = await postQuery(payload);
      if (res) {
        setSuccessMessage(res.data.message);
      }
    } catch (err) {
      const errArr = [];
      const errors = err.response.data.error.errors;
      errors.forEach((error) => errArr.push(`${error.message}. `));
      if (errArr.length > 0) {
        setMessage([...errArr]);
      }
    }
  };

  const handleInputChange = () => {
    // Reset the message when input changes
    setMessage('');
    setSuccessMessage('');
  };

  // handled the re submission of the form
  const handleNewMessage = () => {
    setSuccessMessage(null);
  };

  return (
    <Wrapper>
      {successMessage ? (
        <ThankyouBlock style={{ display: successMessage ? 'block' : 'none' }}>
          <h3>Thank you!🤘</h3>
          <p>
            Your message has been accepted. You will recieve answer really soon!
          </p>
          <Button onClick={handleNewMessage}>send-new-message</Button>
        </ThankyouBlock>
      ) : (
        <>
          {message && <p style={{ color: 'red' }}>{message}</p>}
          <form onSubmit={handleSubmit}>
            <FormRow
              name="name"
              type="text"
              label="_name"
              placeholder="Enter your name"
              onClick={handleInputChange}
            />
            <FormRow
              name="email"
              type="email"
              label="_email"
              placeholder="Enter your email"
              onClick={handleInputChange}
            />
            <FormRow
              name="message"
              label="_message:"
              isTextarea
              height={150}
              type="text"
              placeholder="Enter your message"
              onClick={handleInputChange}
            />
            <Button type="submit">submit-message</Button>
          </form>
        </>
      )}
    </Wrapper>
  );
};

export default ContactMe;
