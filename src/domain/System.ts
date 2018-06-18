import { Action, ActionCreator, Reducer } from "redux";

export interface SystemState {
  readonly updateAvailable: boolean;
}

const initialSystemState: SystemState = { updateAvailable: false };

export interface NotifyUpdateAvailableAction extends Action {
  type: "@@system/NOTIFY_UPDATE_AVAILABLE";
}

export const notifyUpdateAvailable: ActionCreator<
  NotifyUpdateAvailableAction
> = () => ({
  type: "@@system/NOTIFY_UPDATE_AVAILABLE"
});

export const systemStateReducer: Reducer<SystemState> = (
  state: SystemState = initialSystemState,
  action
) => {
  // We'll augment the action type on the switch case to make sure we have
  // all the cases handled.
  switch ((action as SystemActions).type) {
    case "@@system/NOTIFY_UPDATE_AVAILABLE":
      return { ...state, updateAvailable: true };
    default:
      return state;
  }
};

export type SystemActions = NotifyUpdateAvailableAction;
