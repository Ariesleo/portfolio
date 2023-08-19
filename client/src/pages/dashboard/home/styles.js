import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  font-family: Fira Code;
  justify-content: center;
  align-items: center;
`;
const Name = styled.div`
  color: #e5e9f0;
  font-size: 55px;
  font-weight: 400;
  letter-spacing: 2px;
`;
const Designation = styled.div`
  color: #4d5bce;
  font-size: 25px;
  font-weight: 450;
`;

const GithubInfo = styled.div`
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 25%;

  @media (max-width: 900px) {
    /* Tablet and below */
    display: none;
  }
`;
const GithubInfoMobile = styled.div`
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 100px;

  @media (min-width: 899px) {
    /* Tablet and above */
    display: none;
  }
`;

const GameWrapper = styled.div`
  margin: 0 100px;
  /* width: 510px;
  height: 475px; */
  padding: 35px 30px;
  border-radius: 8px;
  border: 1px solid #0c1616;
  background: linear-gradient(
    154deg,
    rgba(23, 85, 83, 0.7) 0%,
    rgba(67, 217, 173, 0.09) 100%
  );
  box-shadow: 0px 2px 0px 0px rgba(255, 255, 255, 0.3) inset;
  backdrop-filter: blur(32px);

  display: flex;
  justify-content: space-between;
  align-items: center;

  /* mobile */
  @media (max-width: 900px) {
    /* Tablet and below */
    display: none;
  }
`;

const GamePlayGround = styled.div`
  /* width: 238px;
  height: 405px; */
  margin-right: 30px;
  border-radius: 8px;
  background: rgba(1, 22, 39, 0.84);
  box-shadow: 1px 5px 11px 0px rgba(2, 18, 27, 0.71) inset;

  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  padding: 55px 60px;
`;

const KeyInstructions = styled.div`
  height: 405px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const KeyArrows = styled.div`
  /* width: 100px;
  height: 100px; */
  padding: 12px 14px;
  border-radius: 8px;
  background: rgba(1, 20, 35, 0.19);
`;

export {
  Wrapper,
  Designation,
  Name,
  GameWrapper,
  GithubInfo,
  GithubInfoMobile,
  GamePlayGround,
  KeyInstructions,
  KeyArrows,
};
