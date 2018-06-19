import * as React from "react";
import { StyledFirebaseAuth } from "react-firebaseui";

import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import AppMenuBar from "../components/AppMenuBar";

// Configure FirebaseUI.
const uiConfig = {
  signInFlow: "redirect",
  signInSuccessUrl: "/",
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID]
};

const LoginPage = () => (
  <>
    <AppMenuBar />
    <div>
      <h1>Register</h1>
      <p>Please sign-in:</p>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div>
  </>
);

export default LoginPage;
