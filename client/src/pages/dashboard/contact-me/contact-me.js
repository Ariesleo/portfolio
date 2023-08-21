import React, { useState } from 'react';
import FormRow from '../../../components/atoms/formRow';
import Button from '../../../components/atoms/button';
import { postQuery } from '../../../services/contactMeService';
import {
  Wrapper,
  Heading,
  ThankyouBlock,
  ContactForm,
  ContactProfile,
  BodyWrapper,
  Message,
  Contact,
  NameAndLogo,
  ImageLogo,
} from './styles.js';

import email from '../../../images/svg/email.svg';
import discord from '../../../images/svg/discord.svg';
import { useAppContext } from '../../../context/appContext';

const ContactMe = () => {
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const profileData = useAppContext();

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
      <Heading>#Contacts----------</Heading>
      <BodyWrapper>
        <ContactForm>
          {successMessage ? (
            <ThankyouBlock
              style={{ display: successMessage ? 'block' : 'none' }}
            >
              <h3>Thank you!🤘</h3>
              <p>
                Your message has been accepted. You will recieve answer really
                soon!
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
        </ContactForm>
        <ContactProfile>
          <Message>
            <span>
              I'm interested in freelance opportunities. However, if you have
              other request or question, don't hesitate to contact me.
            </span>
          </Message>
          <Contact>
            <span>Message me here</span>
            <div>
              <NameAndLogo>
                <ImageLogo src={email} alt="email" />
                <span>
                  {profileData && profileData.contact
                    ? profileData.contact.email
                    : ''}
                </span>
              </NameAndLogo>
              <NameAndLogo>
                <ImageLogo src={discord} alt="discord" />
                <span>
                  {profileData && profileData.contact
                    ? profileData.contact.discordId
                    : ''}
                </span>
              </NameAndLogo>
            </div>
          </Contact>
        </ContactProfile>
      </BodyWrapper>
    </Wrapper>
  );
};

export default ContactMe;
