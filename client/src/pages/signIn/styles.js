import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  /* Add some additional styles if needed */
  min-height: 100vh;
`;
const FormWrapper = styled.div`
  padding: 35px 30px;
  color: var(--grey);
  border: 1px solid #c778dd;
  border-radius: 8px;
`;

export { Wrapper, FormWrapper };
