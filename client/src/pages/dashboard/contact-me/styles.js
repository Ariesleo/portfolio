import styled from 'styled-components';

const Wrapper = styled.div`
  width: 600px;
  @media (max-width: 900px) {
    /* Tablet and above */
    width: 80%;
  }
`;

const ThankyouBlock = styled.div`
  color: var(--grey);
  width: 400px;
  text-align: center;
  @media (max-width: 900px) {
    /* Tablet and above */
    width: 60%;
  }
`;

export { Wrapper, ThankyouBlock };
