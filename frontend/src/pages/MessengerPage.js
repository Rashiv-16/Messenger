import { useState, useEffect, useContext } from "react";

import styled from "styled-components";

import ChatPage from "./ChatPage";
import ChatNames from "../components/ChatNames";
import Namebar from "../components/Namebar";

//Contexts
import { SocketContext } from "../context/socket";

// import axios from "axios";
import { connect } from "react-redux";

import { useDispatch } from "react-redux";

import { currentLoggedInUser } from "../Actions";

import isLoggedin from "../utils/isLoggedIn";

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

const MessengerPage = ({ chatnames }, props) => {
  const [toggleChat, setToggleChat] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [loginStatus, setLoginStatus] = useState(null);
  const socket = useContext(SocketContext);

  const setToggleChatHandler = (toggle) => {
    toggle ? setToggleChat(true) : setToggleChat(false);
  };
  const setToggleMenuHandler = (toggle) => {
    toggle ? setToggleMenu(true) : setToggleMenu(false);
  };
  const dispatch = useDispatch();

  const loginStatusHandler = async () => {
    const data = await isLoggedin();
    if (data) setLoginStatus(true);
    else setLoginStatus(false);
  };
  useEffect(() => {
    loginStatusHandler();
    dispatch(currentLoggedInUser());
    if (loginStatus) socket.connect();
  }, [loginStatus]);

  // design components for loginFalse
  // dsign loading page for loginNull
  const loginFalse = <h3>You need to login first!</h3>;
  const loginNull = <h3>Loading...</h3>;
  const loginTrue = (
    <Main>
      <ChatList className="chat-list">
        <Namebar
          toggleMenu={toggleMenu}
          setToggleMenuHandler={setToggleMenuHandler}
        />
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

  if (loginStatus === null) return loginNull;
  if (loginStatus) return loginTrue;
  return loginFalse;
};

const mapStateToProps = (state) => {
  return {
    loggedInUser: state.loggedInUser,
    friendList: state.friendList,
  };
};

export default connect(mapStateToProps, { currentLoggedInUser })(MessengerPage);
