import { useState } from "react";

const AuthButton = () => {
  let auth;
  const [signIn, setSignIn] = useState(null);
  const gapiInit = () => {
    window.gapi.load("auth2", () => {
      window.gapi.auth2
        .init({
          client_id:
            "383691740409-brveiaohdq2hjd6oebp3k8fa18822tfr.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          auth = window.gapi.auth2.getAuthInstance();
          // await auth.signIn({ prompt: "consent select_account" });
          setSignIn(auth.isSignedIn.get());
          auth.isSignedIn.listen(onAuthChange);
          // console.log(auth.isSignedIn);
        });
    });
  };
  gapiInit();
  const onAuthChange = () => {
    setSignIn(auth.isSignedIn.get());
  };

  const signingIn = () => {
    auth.signIn({ prompt: "consent select_account" });
  };
  const signingOut = () => {
    auth.signOut();
  };

  const renderButton = () => {
    if (signIn === null) {
      return <button>Sign In</button>;
    } else if (signIn === true) {
      return <button onClick={signingOut}>Sign Out</button>;
    } else return <button onClick={signingIn}>Sign In</button>;
  };

  return <>{renderButton()}</>;
};

export default AuthButton;
