import React, { useState } from 'react';
import FormRow from '../../components/atoms/formRow';
import { Wrapper, FormWrapper } from './styles';
import Button from '../../components/atoms/button';
import { signIn } from '../../services/authService';

const SingIn = () => {
  const [payload, setPayload] = useState({});
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);
    setPayload((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const getToken = localStorage.getItem('protfolioToken');

    if (getToken) {
      localStorage.removeItem('protfolioToken');
    }
    try {
      // Perform PATCH request to update the profile data on the backend
      const response = await signIn(payload);
      if (response.data.message) {
        setMessage(response.data.message);
      }
      const { token } = response.data;

      if (token) {
        localStorage.setItem('protfolioToken', token);
      }
    } catch (error) {
      console.error('Error updating profile data:', error);
    }
  };
  return (
    <>
      {message && <span>{message}</span>}
      <Wrapper>
        <FormWrapper>
          <h3 style={{ textAlign: 'center' }}>SignIn</h3>
          <form onSubmit={handleSubmit}>
            <FormRow
              label="_username:"
              type="text"
              name="username"
              onChange={handleChange}
            />
            <FormRow
              label="_password:"
              type="password"
              name="password"
              onChange={handleChange}
            />
            <Button style={{ float: 'right' }} type="submit">
              signin
            </Button>
          </form>
        </FormWrapper>
      </Wrapper>
    </>
  );
};

export default SingIn;
