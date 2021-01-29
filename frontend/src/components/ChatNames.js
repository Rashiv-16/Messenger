import styled from "styled-components";

const ChatNamesSection = styled.section`
  width: 100%;
  height: calc(100% - 7rem);
  padding: 5rem 5rem 0 5rem;
  /* border: 1px solid red; */
  overflow-y: scroll;
  scrollbar-width: 0;

  &::-webkit-scrollbar {
    display: none;
    width: none;
  }
`;

const EmptyListMsg = styled.p`
  color: var(--color-5);
  font-family: var(--montserat);
  font-size: 1.6rem;
`;

const NameContainer = styled.div`
  width: 100%;
  height: 8rem;
  background-color: var(--color-2);
  margin-bottom: 2.4rem;
  cursor: pointer;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding: 0 2.4rem;
  border-radius: 1rem;

  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`;

const ProfileContainer = styled.div`
  /* border: 1px solid red; */
  width: 80%;

  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
`;

const ProfilePicture = styled.div`
  width: 5.6rem;
  height: 5.6rem;
  border-radius: 60%;
  background-color: whitesmoke;
  margin-right: 2rem;
`;

const ProfileName = styled.h5`
  color: var(--color-5);
  font-family: var(--montserat);
  font-size: 1.6rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 50%;
`;
const ProfileStatus = styled.h5`
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
  background-color: var(--unavailable-color);
  /* border: 1px solid green; */
`;

const statusColor = {
  available: "var(--success-color)",
  busy: "var(--error-color)",
  unavailable: "var(--unavailable-color)",
};

const ChatNames = ({ chatnames, setToggleChatHandler }) => {
  if (chatnames.length === 0)
    return (
      <ChatNamesSection
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <EmptyListMsg>Your conversation list appears here.</EmptyListMsg>
      </ChatNamesSection>
    );
  const names = chatnames.map((chatname, index) => {
    return (
      <NameContainer key={index} onClick={() => setToggleChatHandler(true)}>
        <ProfileContainer>
          <ProfilePicture />
          <ProfileName>{chatname.title}</ProfileName>
        </ProfileContainer>
        <ProfileStatus
          style={{ backgroundColor: `${statusColor[chatname.status]}` }}
        />
      </NameContainer>
    );
  });

  return <ChatNamesSection>{names}</ChatNamesSection>;
};

export default ChatNames;
