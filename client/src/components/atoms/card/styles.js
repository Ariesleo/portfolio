import styled from 'styled-components';

const CardContainer = styled.div`
  border-radius: 15px;
  border: 1px solid var(--grey);
  background: #011221;
  margin: 10px 20px;
  width: 290px; /* Default width for mobile */
  @media (min-width: 768px) {
    /* Tablet and above */
    width: 370px;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 220px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;

  @media (max-width: 768px) {
    /* Tablet and below */
    height: 190px;
  }
`;

const CardWrapper = styled.div`
  padding: 5px 20px;
`;

const CardTitle = styled.h2`
  font-size: 1.5rem;
  color: #607b96;
  font-family: var(--bodyFont);
  font-weight: 450;
  margin-bottom: 0px;
`;

const CardDescription = styled.p`
  color: #607b96;
  font-family: var(--bodyFont);
  font-size: 16px;
  font-weight: 450;
  text-align: justify;
`;

const TechStack = styled.h6`
  color: #e5e9f0ed;
  margin: 10px;
`;

const TechStackItems = styled.span`
  padding-left: 10px;
  color: #607b96;
`;

const CardButtons = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  padding: 8px 16px;
  border: none;
  background-color: #4d5bce;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #e5e9f0;
  }
`;

export {
  CardContainer,
  CardImage,
  CardTitle,
  CardDescription,
  CardButtons,
  Button,
  CardWrapper,
  TechStackItems,
  TechStack,
};
