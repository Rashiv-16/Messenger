import styled from "styled-components";

const ChatScreen = styled.section`
  width: 100%;
  height: calc(100% - 9rem);
  /* border: 1px solid red; */
`;
const MessagesContainer = styled.div`
  /* border: 1px solid yellow; */
  height: calc(100% - 9.5rem);
  padding: 2rem 2rem 0 2rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  overflow-y: scroll;
  scrollbar-width: 0;

  &::-webkit-scrollbar {
    display: none;
    width: none;
  }
`;

const ReceivedText = styled.p`
  font-size: 1.4rem;
  padding: 1rem;
  background-color: var(--background-color-4);
  font-family: var(--roboto);
  margin-bottom: 1rem;
  user-select: none;
`;
const SentText = styled.p`
  font-size: 1.4rem;
  padding: 1rem;
  background-color: var(--color-2);
  /* color: var(--color-5); */
  font-family: var(--roboto);
  margin-bottom: 1rem;
  user-select: none;
  align-self: flex-end;
  max-width: 80%;
  white-space: pre-wrap;
  white-space: break-spaces;
  word-wrap: break-word;
`;

const MessageInputContainer = styled.div`
  /* border: 1px solid blue; */
  padding: 2rem;
`;

const MessageForm = styled.form`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`;

const TextInput = styled.textarea`
  background-color: rgba(255, 255, 255, 0.3);
  border: none;
  outline: none;
  font-size: 1.4rem;
  padding: 1.6rem;
  font-family: var(--roboto);
  border-radius: 0.5rem;
  border: 2px solid var(--color-4);
  width: calc(100% - 10rem);
  height: 5.31rem;
  overflow-y: scroll;
  scrollbar-width: 0;

  &::-webkit-scrollbar {
    display: none;
    width: none;
  }

  &:target {
    border: none;
    outline: none;
  }
`;
const SubmitInput = styled.input`
  background-color: var(--color-4);
  border: none;
  outline: none;
  font-size: 1.4rem;
  padding: 1.6rem;
  font-family: var(--roboto);
  border-radius: 0.5rem;
  cursor: pointer;
  color: var(--color-2);
  border: 2px solid var(--color-4);
  letter-spacing: 1px;

  &:target {
    border: none;
    outline: none;
  }
`;

const ChatScreenMessaging = () => {
  return (
    <ChatScreen>
      <MessagesContainer>
        <ReceivedText>Yo</ReceivedText>
        <SentText>Dayuuummmmmmmmmmmmmmmmmmmmmmmmmmm</SentText>
        <ReceivedText>Boiiiiii</ReceivedText>
        <SentText>You thicccc</SentText>
        <ReceivedText>Yo</ReceivedText>
        <SentText>Dayuuummmmmmmmmmmmmmmmmmmmmmmmmmm</SentText>
        <ReceivedText>Boiiiiii</ReceivedText>
        <SentText>You thicccc</SentText>
        <ReceivedText>Yo</ReceivedText>
        <SentText>Dayuuummmmmmmmmmmmmmmmmmmmmmmmmmm</SentText>
        <ReceivedText>Boiiiiii</ReceivedText>
        <SentText>You thicccc</SentText>
        <ReceivedText>Yo</ReceivedText>
        <SentText>Dayuuummmmmmmmmmmmmmmmmmmmmmmmmmm</SentText>
        <ReceivedText>Boiiiiii</ReceivedText>
        <SentText>You thicccc</SentText>
        <ReceivedText>Yo</ReceivedText>
        <SentText>Dayuuummmmmmmmmmmmmmmmmmmmmmmmmmm</SentText>
        <ReceivedText>Boiiiiii</ReceivedText>
        <SentText>You thicccc</SentText>
        <ReceivedText>Yo</ReceivedText>
        <SentText>Dayuuummmmmmmmmmmmmmmmmmmmmmmmmmm</SentText>
        <ReceivedText>Boiiiiii</ReceivedText>
        <SentText>You thicccc</SentText>
        <ReceivedText>Yo</ReceivedText>
        <SentText>Dayuuummmmmmmmmmmmmmmmmmmmmmmmmmm</SentText>
        <ReceivedText>Boiiiiii</ReceivedText>
        <SentText>You thicccc</SentText>
      </MessagesContainer>
      <MessageInputContainer>
        <MessageForm
          onSubmit={(e) => {
            e.preventDefault();
            console.log(e.target.submit.value);
          }}
        >
          <TextInput type="text" name="text" id="" />
          <SubmitInput type="submit" name="submit" value="Send" />
        </MessageForm>
      </MessageInputContainer>
    </ChatScreen>
  );
};

export default ChatScreenMessaging;
