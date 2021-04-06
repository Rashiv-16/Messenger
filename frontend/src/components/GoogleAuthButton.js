import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import googleIcon from "../img/icon-google.svg";
import { googleSignIn, googleSignOut } from "../Actions";
import history from "../history";

const SocialLoginGoogle = styled.button`
  width: 5.6rem;
  height: 5.6rem;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--color-2);
  border-radius: 50%;
  cursor: pointer;

  & > img {
    width: 30%;
    height: 30%;
  }
`;

class GoogleAuthButton extends React.Component {
  componentDidMount() {
    try {
      window.gapi.load("auth2", () => {
        window.gapi.auth2
          .init({
            client_id:
              "383691740409-brveiaohdq2hjd6oebp3k8fa18822tfr.apps.googleusercontent.com",
            scope: "email",
          })
          .then(() => {
            this.auth = window.gapi.auth2.getAuthInstance();
            this.auth.isSignedIn.listen(this.onAuthChange);
            if (this.auth.isSignedIn) {
              history.push("/messenger");
            }
          });
      });
    } catch (error) {
      console.log(error.message);
      // PUT ERROR HANDLING METHODS HERE
    }
  }

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.googleSignIn();
    } else this.props.googleSignOut();
  };
  onSignInClick = async () => {
    await this.auth.signIn({ prompt: "consent select_account" });
    if (this.auth.isSignedIn) {
      history.push("/messenger");
    }
    // googleSignIn();
  };
  render() {
    return (
      <SocialLoginGoogle onClick={() => this.onSignInClick()}>
        <img src={googleIcon} alt="" />
      </SocialLoginGoogle>
    );
  }
}

export default connect(null, { googleSignIn, googleSignOut })(GoogleAuthButton);
