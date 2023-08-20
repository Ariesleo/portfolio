import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 2% 4%;
  width: 100%;
`;
const BodyWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* align-items: center; */
  justify-content: space-between;
`;

const Heading = styled.h4`
  color: var(--grey);
`;

const ContactForm = styled.div`
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
  @media (min-width: 900px) {
    /* Tablet and below */
    width: 60%;
  }
`;

const ContactProfile = styled.div`
  /* background-color: green; */
  /* border: 1px solid var(--grey); */
  padding: 20px 50px;
`;
const Message = styled.div`
  width: 430px;
  text-align: inherit;
  padding: 20px 20px;
  color: var(--grey);
  border: 1px solid #c778dd;
  border-radius: 8px;
`;
const Contact = styled.div`
  margin-top: 50px;
  padding: 20px 20px;
  color: var(--grey);
  border: 1px solid #c778dd;
  border-radius: 8px;
  span {
    color: var(--light-white);
  }
  div {
    span {
      color: var(--grey);
    }
  }
`;

const NameAndLogo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;
const ImageLogo = styled.img`
  padding: 0px 5px;
`;

export {
  Wrapper,
  Heading,
  ContactForm,
  ThankyouBlock,
  ContactProfile,
  BodyWrapper,
  Message,
  Contact,
  NameAndLogo,
  ImageLogo,
};
