import styled from "styled-components";

const Main = styled.main`
  width: 100%;
  min-height: 100vh;
  height: max-content;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;
const MainText = styled.p`
  font-family: var(--montserat);
  font-size: 6.4rem;
  font-weight: 800;
  margin-bottom: 5.6rem;
  color: var(--color-5);
`;
const SubText = styled.p`
  font-family: var(--roboto);
  font-size: 2.4rem;
  margin-bottom: 0.8rem;
  color: var(--color-2);
`;
const RedirectText = styled.p`
  font-family: var(--roboto);
  font-size: 1rem;
  color: var(--color-4);
`;

const AllSetPage = () => {
  return (
    <Main>
      <MainText>Yayyyy!</MainText>
      <SubText>You are set.</SubText>
      <RedirectText>Redirecting...</RedirectText>
    </Main>
  );
};

export default AllSetPage;
