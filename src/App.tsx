import * as React from "react";
import "./App.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import Routes from "./pages/Routes";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { withRouter } from "react-router";


const AppComponent = () => {
  return (
    <>
      <CssBaseline />
      <div className="App">
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
};


const App = withRouter(AppComponent);
export default App;
