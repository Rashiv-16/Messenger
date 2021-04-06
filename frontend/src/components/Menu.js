import styled from "styled-components";

import ReceivedRequest from "./ReceivedRequest";
import SentRequest from "./SentRequest";
import Settings from "./Settings";

const MenuContainer = styled.div`
  position: absolute;
  left: 0;
  top: 9rem;
  background-color: var(--color-menu);
  width: 100%;
  height: 12.5rem;
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

const Menu = ({
  toggleMenu,
  toggleReceivedRequest,
  setToggleReceivedRequestHandler,
  toggleSettings,
  setToggleSettingsHandler,
  toggleSentRequest,
  setToggleSentRequestHandler,
}) => {
  return (
    <MenuContainer style={{ display: toggleMenu ? "block" : "none" }}>
      <Ul>
        <Li
          onClick={() => {
            let open = !toggleSentRequest;
            setToggleSentRequestHandler(open);
            setToggleReceivedRequestHandler(false);
            setToggleSettingsHandler(false);
          }}
        >
          Sent Requests
        </Li>
        <Li
          onClick={() => {
            let open = !toggleReceivedRequest;
            setToggleSentRequestHandler(false);
            setToggleReceivedRequestHandler(open);
            setToggleSettingsHandler(false);
          }}
        >
          Received Requests
        </Li>
        <Li
          onClick={() => {
            let open = !toggleSettings;
            setToggleSentRequestHandler(false);
            setToggleReceivedRequestHandler(false);
            setToggleSettingsHandler(open);
          }}
        >
          Settings
        </Li>
      </Ul>
      <SentRequest toggleSentRequest={toggleSentRequest} />
      <ReceivedRequest toggleReceivedRequest={toggleReceivedRequest} />
      <Settings toggleSettings={toggleSettings} />
    </MenuContainer>
  );
};

export default Menu;
