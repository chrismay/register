import * as React from "react";
import "./App.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "./components/AppBar";
import SignInScreen from "./components/LoginScreen";

import { connect } from "react-redux";
import { isLoaded } from "react-redux-firebase";
import Spinner from "./components/Spinner";
import Routes from "./pages/Routes";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { withRouter } from "react-router";

type AuthState = Partial<{
  uid: string;
}>;

interface Props {
  auth: AuthState;
}

const AppComponent: React.SFC<Props> = props => {
  const auth = props.auth;
  if (!isLoaded(auth)) {
    return <Spinner />;
  }
  if (auth.uid) {
    return (
      <>
        <CssBaseline />
        <div className="App">
          <AppBar />
          <Routes />
          <BottomNavigation
            style={{
              position: "absolute",
              bottom: 0,
              width: "100%"
            }}
          >
            <BottomNavigationAction
              label="Something..."
              icon={<FavoriteIcon />}
            />
          </BottomNavigation>
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

const App = withRouter(connect(mapStateToProps)(AppComponent) as any);

export default App;
