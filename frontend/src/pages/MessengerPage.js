import { useState } from "react";

import styled from "styled-components";

import ChatPage from "./ChatPage";
import ChatNames from "../components/ChatNames";
import Namebar from "../components/Namebar";

const Main = styled.main`
  width: 100%;
  min-height: 100vh;
  height: max-content;
  /* border: 1px solid blue; */
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-content: center;
  align-items: center;
  /* padding: 2rem; */
`;

const ChatList = styled.section`
  max-width: 50rem;
  width: 100%;
  align-self: stretch;
  height: 100vh;
  max-height: 100vh;
  /* border: 1px solid blue; */
  background-color: var(--background-color-4);
  position: relative;
`;

const Chat = styled.section`
  max-width: calc(192rem - 50rem);
  width: 100%;
  align-self: stretch;
  height: 100vh;
  max-height: 100vh;
  /* border: 1px solid blue; */
  background-color: var(--background-color-5);
`;

const AddButton = styled.button`
  width: 5.4rem;
  height: 5.4rem;
  z-index: 2;
  border-radius: 50%;
  background-color: var(--color-4);
  color: var(--color-2);
  position: absolute;
  right: 3.2rem;
  bottom: 3.2rem;
  /* border: 1px solid var(--color-4); */
  border: none;
  font-size: 4rem;
  font-family: var(--montserat);
  font-weight: 100;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MessengerPage = ({ chatnames }) => {
  const [toggleChat, setToggleChat] = useState(false);

  const setToggleChatHandler = (toggle) => {
    toggle ? setToggleChat(true) : setToggleChat(false);
  };

  return (
    <Main>
      <ChatList className="chat-list">
        <Namebar />
        <ChatNames
          chatnames={chatnames}
          setToggleChatHandler={setToggleChatHandler}
        />
        <AddButton title="Start a new conversation">+</AddButton>
      </ChatList>
      <Chat className="chat">
        <ChatPage
          toggleChat={toggleChat}
          setToggleChatHandler={setToggleChatHandler}
        />
      </Chat>
    </Main>
  );
};

export default MessengerPage;
