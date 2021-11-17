import { DECREMENT_REST_END_TIME, INCREMENT_REST_END_TIME, RESET_TIMER, SET_REST_END_TIME } from "../actions/actions";
const initialState = {
  basicReminderTime: 5,
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
    case RESET_TIMER:
      return initialState.basicReminderTime;
    case SET_REST_END_TIME:
      action.payload !== null || undefined ? action.payload : state;
    default:
      return state;
  }
};
