import styled from "styled-components";

const SettingsContainer = styled.div`
  position: absolute;
  left: 0;
  top: 12.5rem;
  background-color: var(--color-subMenu);
  width: 100%;
  padding: 0.5rem 0 0.5rem 0;

  & > h1 {
    font-family: var(--roboto);
    color: var(--color-2);
    font-size: 1.4rem;
    text-align: center;
    padding: 1rem 0 1rem 0;
    cursor: pointer;
    font-weight: 500;
  }
`;

const Settings = ({ toggleSettings }) => {
  //change display name
  //change display picture
  //change chat theme
  //change online status
  //delete account
  return (
    <SettingsContainer style={{ display: toggleSettings ? "block" : "none" }}>
      <h1>Settings</h1>;
    </SettingsContainer>
  );
};

export default Settings;
