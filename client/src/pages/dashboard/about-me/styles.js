import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 2% 4%;
  color: var(--grey);

  @media (max-width: 700px) {
    margin: 0px 40px;
  }
`;

const DescriptionAndImage = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
`;
const Description = styled.div`
  width: 50%;
  color: var(--grey);
  text-align: justify;

  @media (max-width: 900px) {
    /* Tablet and below */
    width: auto;
  }
`;
const Image = styled.img`
  /* width: 50%; */
  /* background-color: green; */
  @media (max-width: 700px) {
    width: 300px;
    height: 280px;
  }
`;

const CurrentProjectStatus = styled.div`
  border: 1px solid #c778dd;
  padding: 5px 10px;
  border-radius: 3px;

  display: flex;
  align-items: center;
  gap: 10px;

  div {
    width: 15px;
    height: 15px;
    background-color: #c778dd;
  }
  a {
    color: var(--light-white);
    text-decoration: none;
  }
`;

const Quotation = styled.div`
  text-align: center;
  color: var(--grey);
  margin: 5% 0px;

  @media (max-width: 900px) {
    /* Tablet and below */
    margin: 15% 0px;
  }

  q {
    padding: 10px 10px;
    span {
      font-size: 18px;
      color: var(--yellow);
    }
  }
`;

const Skills = styled.div`
  display: flex;
  flex-wrap: wrap;
  color: var(--grey);
  /* align-items: center; */
  justify-content: space-around;
  gap: 20px;
`;

const SkillWrapper = styled.div`
  /* width: 300px; */
  border: 1px solid var(--grey);
  border-radius: 8px;
  text-align: center;

  h5 {
    padding: 15px 15px;
    font-size: 16px;
    font-weight: 400;
    color: var(--light-white);
    border-bottom: 1px solid var(--grey);
  }
  p {
    padding: 0px 15px;
  }
`;

export {
  DescriptionAndImage,
  Description,
  Image,
  Wrapper,
  Quotation,
  Skills,
  SkillWrapper,
  CurrentProjectStatus,
};
