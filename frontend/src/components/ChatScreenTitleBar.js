import styled from "styled-components";
import backKey from "../img/back-key.svg";
import option from "../img/three-dots.svg";
import { connect } from "react-redux";

const TitleBar = styled.div`
  width: 100%;
  height: 9rem;
  background-color: var(--color-4);
  padding: 0 1.6rem;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;
const BasicDetail = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  flex-grow: 0;
  flex-shrink: 2;
  justify-content: flex-start;
  /* border: 1px solid red; */
  max-width: 40%;
  /* display: none; */
`;
const Option = styled.div`
  /* border: 1px solid red; */
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
  }
`;
const Back = styled.div`
  cursor: pointer;
  margin-right: 2rem;
  min-height: max-content;
  min-width: max-content;
  img {
    width: 100%;
    height: 100%;
  }
`;

const PictureContainer = styled.div`
  border-radius: 50%;
  min-height: 6rem;
  min-width: 6rem;
  background-color: whitesmoke;
  margin-right: 1.6rem;
  & > img {
    width: 100%;
    object-fit: fill;
    border-radius: 50%;
  }
`;

const Name = styled.h5`
  /* border: 1px solid red; */
  color: var(--color-2);
  font-family: var(--montserat);
  font-size: 1.6rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 65%;
`;

const ChatScreenTitleBar = ({ chat, setToggleChatHandler }) => {
  return (
    <TitleBar>
      <BasicDetail>
        <Back onClick={() => setToggleChatHandler(false)}>
          <img src={backKey} alt="" />
        </Back>
        <PictureContainer>
          <img src="" alt="" />
          {/* alt="Profile Picture" */}
        </PictureContainer>
        <Name>{chat.name}</Name>
      </BasicDetail>
      <Option>
        <img src={option} alt="" />
      </Option>
    </TitleBar>
  );
};

const mapStateToProps = (state) => {
  return {
    chat: state.currentChat,
  };
};

export default connect(mapStateToProps)(ChatScreenTitleBar);
