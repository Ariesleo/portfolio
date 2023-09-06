import React from 'react';
import { Wrapper } from './styles.js';
import notFound from '../../images/svg/page-not-found.svg';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/atoms/button';

const NotFound = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };
  return (
    <Wrapper>
      <img src={notFound} alt="Not Found" width={300} height={300} />
      <span>
        Return back to home page{' '}
        {/* <Link style={{ color: '#fff', fontSize: '30px' }} to="/">
          _Return
        </Link> */}
        <Button onClick={handleClick}> &#x2190; Home</Button>
      </span>
    </Wrapper>
  );
};

export default NotFound;
