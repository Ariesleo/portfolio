import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 1rem;
  color: var(--grey);
  background-color: var(--dark);
  border-top: 1px solid var(--fade-dark);
`;

const NavList = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background-color: lightgreen; */
`;

const FindMe = styled.div`
  width: 150px;
  text-align: end;
  padding-right: 2%;
`;

const NameAndLogo = styled.div`
  display: flex;
`;

const Logos = styled.div`
  display: flex;
`;

const ImageLogo = styled.img`
  padding: 0px 5px;
`;

export { Wrapper, NavList, FindMe, NameAndLogo, Logos, ImageLogo };
