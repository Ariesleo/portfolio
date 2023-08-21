import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 0px 5%;
  /* background-color: green; */
`;

const BodyWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 900px) {
    /* Tablet and above */
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
`;

const ContactForm = styled.div`
  width: 45%;
  padding: 10px 50px;
  @media (max-width: 900px) {
    /* Tablet and above */
    width: 80%;
  }
`;

const Heading = styled.h4`
  color: var(--grey);
  margin: 0px 50px;
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
  width: 45%;
  padding: 20px 50px;
  display: flex;
  text-align: center;
  flex-wrap: wrap;
  /* justify-content: ; */
  @media (max-width: 900px) {
    /* Tablet and above */
    width: 80%;
    display: flex;
    text-align: center;
  }
`;

const Message = styled.div`
  /* width: 430px; */
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
