import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import { compose, createStore, applyMiddleware } from "redux";
import { reactReduxFirebase } from "react-redux-firebase";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import { Provider } from "react-redux";
import logger from "redux-logger";
import { createBrowserHistory } from "history";
import {
  connectRouter,
  routerMiddleware,
  ConnectedRouter
} from "connected-react-router";
import { rootReducer } from "./domain";
import { notifyUpdateAvailable } from "./domain/System";

const history = createBrowserHistory();

const fbConfig = {
  apiKey: "AIzaSyCtVezJQwRDky7FRzRvgAyLNhaqzko2Xfs",
  authDomain: "rsb-register.firebaseapp.com",
  databaseURL: "https://rsb-register.firebaseio.com",
  projectId: "rsb-register",
  storageBucket: "",
  messagingSenderId: "325992862414"
};

firebase.initializeApp(fbConfig);

// react-redux-firebase options
const config = {
  userProfile: "users", // firebase root where user profiles are stored
  enableLogging: false // enable/disable Firebase's database logging
};

// Add redux Firebase to compose
const createStoreWithFirebase = compose(reactReduxFirebase(firebase, config))(
  createStore
);

const middleware = [logger, routerMiddleware(history)];

// Create store with reducers and initial state
const store = createStoreWithFirebase(
  connectRouter(history)(rootReducer),
  {},
  applyMiddleware(...middleware)
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root") as HTMLElement
);

function onAppUpdateAvailable() {
  store.dispatch(notifyUpdateAvailable());
  console.log("Application update available; please refresh!");
}

registerServiceWorker(onAppUpdateAvailable);
