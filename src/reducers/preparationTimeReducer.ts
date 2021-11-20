import {
  AMATEUR_BOXING,
  DECREMENT_PREPARATION_TIME,
  INCREMENT_PREPARATION_TIME,
  PROFESSIONAL_BOXING,
  RESET_TIMER,
  SET_PREPARATION_TIME,
} from "../actions/actions";
const initialState = {
  basicReminderTime: 5,
  amateurBoxing: 10,
};

export const setTimeForPrepare = (
  state = initialState.basicReminderTime,
  action: { type: string; payload?: number }
) => {
  switch (action.type) {
    case INCREMENT_PREPARATION_TIME:
      return state + 1;
    case DECREMENT_PREPARATION_TIME:
      return state > 0 ? state - 1 : state;
    case AMATEUR_BOXING:
      console.log("Remind time of end rest selected");
      return initialState.amateurBoxing;
    case PROFESSIONAL_BOXING:
      console.log("Remind time of end rest selected");
      return initialState.amateurBoxing;
    case AMATEUR_BOXING:
      console.log("Remind time of end rest selected");
      return initialState.amateurBoxing;
    case RESET_TIMER:
      return initialState.basicReminderTime;
    case SET_PREPARATION_TIME:
      action.payload !== null || undefined ? action.payload : state;
    default:
      return state;
  }
};
