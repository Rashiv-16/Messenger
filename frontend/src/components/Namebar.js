import styled from "styled-components";
import { connect } from "react-redux";
import { useState } from "react";

import Menu from "./Menu";

const NameSection = styled.section`
  width: 100%;
  height: 9rem;
  background-color: var(--color-5);
  padding: 0 1.6rem;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const PictureContainer = styled.div`
  border-radius: 50%;
  height: 6rem;
  width: 6rem;
  background-color: whitesmoke;
  & > img {
    width: 100%;
    height: 100;
    object-fit: fill;
    border-radius: 50%;
  }
`;

const Hamburger = styled.div`
  cursor: pointer;
`;

const G = styled.g`
  fill: none;
  stroke: #beb3b7;
  stroke-linecap: round;
`;

const Namebar = ({ user, toggleMenu, setToggleMenuHandler }) => {
  const menuOpened = (
    <svg width="33" height="25" viewBox="0 0 33 25">
      <G
        id="Group_19"
        data-name="Group 19"
        transform="translate(-9085.5 -1283)"
      >
        <line
          id="Line_1"
          data-name="Line 1"
          className="cls-1"
          x2="32"
          transform="translate(9086 1287.5)"
        />
        <line
          id="Line_2"
          data-name="Line 2"
          className="cls-1"
          x2="32"
          transform="translate(9086 1295.5)"
        />
        <line
          id="Line_3"
          data-name="Line 3"
          className="cls-1"
          x2="32"
          transform="translate(9086 1303.5)"
        />
        {/* <!-- translate(9086 1283.5) translate(9086 1295.5) translate(9086 1307.5)--> */}
      </G>
    </svg>
  );
  const menuClosed = (
    <svg width="33" height="25" viewBox="0 0 33 25">
      <G
        id="Group_19"
        data-name="Group 19"
        transform="translate(-9085.5 -1283)"
      >
        <line
          id="Line_1"
          data-name="Line 1"
          className="cls-1"
          x2="32"
          transform="translate(9086 1283.5)"
        />
        <line
          id="Line_2"
          data-name="Line 2"
          className="cls-1"
          x2="32"
          transform="translate(9086 1295.5)"
        />
        <line
          id="Line_3"
          data-name="Line 3"
          className="cls-1"
          x2="32"
          transform="translate(9086 1307.5)"
        />
        {/* <!-- translate(9086 1283.5) translate(9086 1295.5) translate(9086 1307.5)--> */}
      </G>
    </svg>
  );

  const [toggleSentRequest, setToggleSentRequest] = useState(false);
  const [toggleReceivedRequest, setToggleReceivedRequest] = useState(false);
  const [toggleSettings, setToggleSettings] = useState(false);

  const setToggleSentRequestHandler = (toggle) => {
    toggle ? setToggleSentRequest(true) : setToggleSentRequest(false);
  };

  const setToggleReceivedRequestHandler = (toggle) => {
    toggle ? setToggleReceivedRequest(true) : setToggleReceivedRequest(false);
  };

  const setToggleSettingsHandler = (toggle) => {
    toggle ? setToggleSettings(true) : setToggleSettings(false);
  };

  return (
    <NameSection>
      <PictureContainer>
        <img src={user.img} alt={user.name} />
      </PictureContainer>
      <Hamburger
        // src={hamburgerIcon}
        onClick={() => {
          let open = !toggleMenu;
          setToggleMenuHandler(open);
          setToggleSentRequestHandler(false);
          setToggleReceivedRequestHandler(false);
          setToggleSettingsHandler(false);
        }}
      >
        {toggleMenu ? menuClosed : menuOpened}
      </Hamburger>
      <Menu
        toggleMenu={toggleMenu}
        toggleReceivedRequest={toggleReceivedRequest}
        setToggleReceivedRequestHandler={setToggleReceivedRequestHandler}
        toggleSettings={toggleSettings}
        setToggleSettingsHandler={setToggleSettingsHandler}
        toggleSentRequest={toggleSentRequest}
        setToggleSentRequestHandler={setToggleSentRequestHandler}
      />
    </NameSection>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.loggedInUser,
  };
};

export default connect(mapStateToProps)(Namebar);
