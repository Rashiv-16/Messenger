import styled from "styled-components";

const SentRequestContainer = styled.div`
  position: absolute;
  left: 0;
  top: 12.5rem;
  background-color: var(--color-subMenu);
  width: 100%;
`;

const Ul = styled.ul`
  padding: 0.5rem 0 0.5rem 0;
`;

const Li = styled.li`
  font-family: var(--roboto);
  color: var(--color-2);
  font-size: 1.4rem;
  text-align: center;
  padding: 1rem 0 1rem 0;
  cursor: pointer;
`;

const SentRequest = ({ toggleSentRequest }) => {
  return (
    <SentRequestContainer
      style={{ display: toggleSentRequest ? "block" : "none" }}
    >
      <Ul>
        <Li>Sent Requestssss</Li>
        <Li>Received Requests</Li>
        <Li>Settings</Li>
      </Ul>
    </SentRequestContainer>
  );
};

export default SentRequest;
