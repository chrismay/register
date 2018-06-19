import { SystemState, systemStateReducer } from "./System";
import { Reducer, combineReducers, Dispatch, Action } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import { eventsReducer, EventListState } from "./Events";

export interface RegisterAppState {
  system: SystemState;
  firebase: any;
  events: EventListState
}

export const rootReducer: Reducer<RegisterAppState> = combineReducers<
  RegisterAppState
>({
  firebase: firebaseReducer,
  system: systemStateReducer,
  events: eventsReducer
});

export interface ConnectedReduxProps<S extends Action> {
  // Correct types for the `dispatch` prop passed by `react-redux`.
  // Additional type information is given through generics.
  dispatch: Dispatch<S >;
}
