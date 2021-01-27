import styled from "styled-components";
import { Link } from "react-router-dom";
import homepageIllustration from "../img/homepage-illustration.svg";
import passwordIcon from "../img/icon-password.svg";
import usernameIcon from "../img/icon-username.svg";
import fbIcon from "../img/icon-fb.svg";
import twitterIcon from "../img/icon-twitter.svg";
import googleIcon from "../img/icon-google.svg";

import InputField from "../components/InputField";

const Main = styled.main`
  width: 100%;
  min-height: 100vh;
  height: max-content;
  /* border: 1px solid blue; */
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-content: space-around;
  align-items: center;
  padding: 2rem;
`;

const IllustrationContainer = styled.div`
  /* border: 1px solid blue; */
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 5.6rem;
  min-width: 32.8rem;
`;

const FormContainer = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  max-width: 33rem;
  min-width: 33rem;
`;

const MainIllustration = styled.img`
  /* position: absolute;
    top: 50%;
    left: 0;
    transform: translate(0, -50%); */
  width: 100%;
  height: 100%;
  /* object-position:  */
  /* border: 1px solid red; */
`;

const Form = styled.form`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 32.8rem;
`;

const LoginButton = styled.button`
  font-family: var(--montserat);
  margin-top: 0.8rem;
  margin-bottom: 3.2rem;
  font-size: 1.6rem;
  width: 100%;
  height: 4.8rem;
  max-width: 32.8rem;
  color: var(--color-4);
  background-color: var(--color-2);
  border: none;
  cursor: pointer;
  border-radius: 0.4rem;
`;

const SocialLoginContainer = styled.div`
  margin-bottom: 4.8rem;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: center;
  width: 80%;
`;

const SocialLogin = styled.a`
  width: 5.6rem;
  height: 5.6rem;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--color-2);
  border-radius: 50%;

  & > img {
    width: 30%;
    height: 30%;
  }
`;

const NoAccount = styled.p`
  font-family: var(--roboto);
  margin-bottom: 2rem;
  color: var(--color-2);
  font-size: 1rem;
`;

const SignUpLink = styled(Link)`
  font-family: var(--montserat);
  width: 100%;
  max-width: 32.8rem;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-5);
  color: var(--color-2);
  width: 100%;
  font-size: 1.6rem;
  height: 4.8rem;
  border-radius: 0.4rem;
  cursor: pointer;
`;

const Homepage = () => {
  return (
    <Main>
      <IllustrationContainer>
        <MainIllustration src={homepageIllustration} alt="" />
      </IllustrationContainer>
      <FormContainer>
        <Form>
          <InputField
            type="text"
            placeholder="Email/Username"
            icon={usernameIcon}
          />
          <InputField
            type="password"
            placeholder="Password"
            icon={passwordIcon}
          />
          <LoginButton type="submit">LOGIN</LoginButton>
        </Form>
        <SocialLoginContainer>
          <SocialLogin href="#">
            <img src={fbIcon} alt="" />
          </SocialLogin>
          <SocialLogin href="#">
            <img src={twitterIcon} alt="" />
          </SocialLogin>
          <SocialLogin href="#">
            <img src={googleIcon} alt="" />
          </SocialLogin>
        </SocialLoginContainer>
        <NoAccount>Don't have an account?</NoAccount>
        <SignUpLink to="/signup">SIGNUP</SignUpLink>
      </FormContainer>
    </Main>
  );
};

export default Homepage;
