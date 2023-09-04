import React, { useState } from 'react';
import FormRow from '../../components/atoms/formRow';
import { Wrapper, FormWrapper } from './styles';
import Button from '../../components/atoms/button';
import { signIn } from '../../services/authService';
import { useNavigate } from 'react-router-dom';

const SingIn = () => {
  const [payload, setPayload] = useState({});
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Initialize useHistory
  const navigate = useNavigate();

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
        // Redirect to the profile page
        navigate('/admin/profile');
      }
    } catch (error) {
      const message = error.response.data.error.message;
      setErrorMessage(message);
    }
  };
  return (
    <>
      <Wrapper>
        <FormWrapper>
          {message && <span>{message}</span>}
          {errorMessage && (
            <p style={{ color: 'red', textAlign: 'center' }}>{errorMessage}</p>
          )}
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
