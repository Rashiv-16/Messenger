import styled from "styled-components";

import defaultIllustration from "../img/empty-chat-illustration.svg";

const DefaultScreen = styled.section`
  width: 100%;
  height: 100%;

  display: flex;
  flex-flow: column nowrap;

  justify-content: center;
  align-items: center;

  overflow-y: scroll;
  scrollbar-width: 0;

  &::-webkit-scrollbar {
    display: none;
    width: none;
  }
`;

const DefaultIllustrationContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 5.6rem;
  min-width: 32.8rem;
  padding: 5rem;
  /* border: 1px solid red; */
`;

const DefaultIllustration = styled.img`
  width: 100%;
  height: 100%;
  opacity: 0.4;
  /* border: 1px solid green; */
`;

const DefaultTextContainer = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

const DefaultTextInnerContainer = styled.div`
  /* border: 1px solid red; */
  width: 30rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

const DefaultText = styled.p`
  color: var(--color-2);
  font-size: 1.8rem;
  font-family: var(--roboto);
`;

const DefaultTextGroup = styled.div`
  display: flex;
  width: 100%;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  /* border: 1px solid red; */
  padding: 0 1.6rem;

  & > p {
    padding: 0 1.6rem;
  }
`;

const Line = styled.span`
  height: 1px;
  background-color: var(--color-4);
  flex-grow: 2;
`;

const ChatPage = ({ toggleChat, setToggleChatHandler }) => {
  if (!toggleChat) {
    return (
      <DefaultScreen>
        <DefaultIllustrationContainer>
          <DefaultIllustration src={defaultIllustration} />
        </DefaultIllustrationContainer>
        <DefaultTextContainer>
          <DefaultTextInnerContainer>
            <DefaultText>Click on name to open up a chat</DefaultText>
            <DefaultTextGroup>
              <Line />
              <DefaultText>or</DefaultText>
              <Line />
            </DefaultTextGroup>
            <DefaultText>Send an invitation to add people</DefaultText>
          </DefaultTextInnerContainer>
        </DefaultTextContainer>
      </DefaultScreen>
    );
  }
  return <h1 onClick={() => setToggleChatHandler(false)}>Chat</h1>;
};

export default ChatPage;
