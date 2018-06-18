import * as React from "react";
import "./App.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "./components/AppBar";
import { SignInScreen } from "./components/LoginScreen";

import { connect } from "react-redux";
import { isLoaded } from "react-redux-firebase";
import { Spinner } from "./components/Spinner";

type AuthState = Partial<{
  uid: string;
}>;

interface Props {
  auth: AuthState;
}

const AppComponent: React.SFC<Props> = props => {
  const auth = props.auth;
  console.log(auth);
  if (!isLoaded(auth)) {
    return (<Spinner/>
    );
  }
  if (auth.uid) {
    return (
      <>
        <CssBaseline />
        <div className="App">
          <AppBar />
          <p className="App-intro">Stuff goes here</p>
        </div>
      </>
    );
  } else {
    return (
      <>
        <CssBaseline />
        <div className="App">
          <SignInScreen />
        </div>
      </>
    );
  }
};

interface AuthContainer {
  firebase: { auth: AuthState };
}

function mapStateToProps(state: AuthContainer): Props {
  return { auth: state.firebase.auth };
}

const App: React.ComponentType<{}> = connect(mapStateToProps)(AppComponent);

export default App;
