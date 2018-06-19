import { Action, ActionCreator, Reducer } from "redux";

export interface Event {
  readonly id: string;
  readonly label: string;
}

export interface EventListState {
  readonly events: Event[];
}

const initialState: EventListState = { events: [] };

export interface AddEventAction extends Action {
  type: "@@events/ADD_EVENT";
  payload: {
    id: string;
    label: string;
  };
}

export const addEvent: ActionCreator<AddEventAction> = () => ({
  type: "@@events/ADD_EVENT",
  payload: {
    id: Date.now() + "",
    label: new Date().toDateString()
  }
});

export const eventsReducer: Reducer<EventListState> = (
  state: EventListState = initialState,
  action
) => {
  switch ((action as EventActions).type) {
    case "@@events/ADD_EVENT":
      return { ...state, events: state.events.concat([action.payload]) };
    default:
      return state;
  }
};
export type EventActions = AddEventAction;
