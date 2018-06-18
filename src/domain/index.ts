import { SystemState, systemStateReducer } from "./System";
import { Reducer, combineReducers, Dispatch, Action } from "redux";
import { firebaseReducer } from "react-redux-firebase";

export interface RegisterAppState {
  system: SystemState;
  firebase: any;
}

export const rootReducer: Reducer<RegisterAppState> = combineReducers<
  RegisterAppState
>({
  firebase: firebaseReducer,
  system: systemStateReducer
});

export interface ConnectedReduxProps<S> {
  // Correct types for the `dispatch` prop passed by `react-redux`.
  // Additional type information is given through generics.
  dispatch: Dispatch<Action<S>>;
}
