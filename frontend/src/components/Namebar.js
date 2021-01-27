import styled from "styled-components";

import hamburgerIcon from "../img/hamburger.svg";

const NameSection = styled.section`
  width: 100%;
  height: 7rem;
  background-color: var(--color-4);
  padding: 0 1.6rem;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`;

const PictureContainer = styled.div`
  border-radius: 1rem;
  height: 4.8rem;
  width: 10.4rem;
  background-color: whitesmoke;
`;

const Hamburger = styled.img``;

const Namebar = () => {
  return (
    <NameSection>
      <PictureContainer></PictureContainer>
      <Hamburger src={hamburgerIcon} />
    </NameSection>
  );
};

export default Namebar;
