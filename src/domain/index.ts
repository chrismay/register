import { SystemState, systemStateReducer } from "./System";
import { Reducer, combineReducers } from "redux";
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
