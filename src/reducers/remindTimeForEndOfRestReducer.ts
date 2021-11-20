import {
  AMATEUR_BOXING,
  DECREMENT_REST_END_TIME,
  INCREMENT_REST_END_TIME,
  MMA,
  PROFESSIONAL_BOXING,
  RESET_TIMER,
  SET_REST_END_TIME,
} from "../actions/actions";
const initialState = {
  basicReminderTime: 10,
  amateurBoxing: 10,
};

export const setReminderTimeForEndOfRest = (
  state = initialState.basicReminderTime,
  action: { type: string; payload?: number }
) => {
  switch (action.type) {
    case INCREMENT_REST_END_TIME:
      return state + 1;
    case DECREMENT_REST_END_TIME:
      return state > 0 ? state - 1 : state;
    case AMATEUR_BOXING:
      console.log("Remind time of end rest selected");
      return initialState.amateurBoxing;
    case PROFESSIONAL_BOXING:
      console.log("Remind time of end rest selected");
      return initialState.basicReminderTime;
    case MMA:
      console.log("Remind time of end rest selected");
      return initialState.basicReminderTime;
    case RESET_TIMER:
      return initialState.basicReminderTime;
    case SET_REST_END_TIME:
      action.payload !== null || undefined ? action.payload : state;
    default:
      return state;
  }
};
