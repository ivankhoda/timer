import {
  AMATEUR_BOXING,
  DECREMENT_REMINDING_TIME,
  INCREMENT_REMINDING_TIME,
  RESET_TIMER,
  SET_REMIND_TIME,
} from "../actions/actions";
const initialState = {
  basicReminderTime: 10,
  amateurBoxing: 10,
};

export const setReminderTime = (state = initialState.basicReminderTime, action: { type: string; payload?: number }) => {
  switch (action.type) {
    case INCREMENT_REMINDING_TIME:
      return state + 1;
    case DECREMENT_REMINDING_TIME:
      return state > 0 ? state - 1 : state;
    case AMATEUR_BOXING:
      return initialState.amateurBoxing;
    case RESET_TIMER:
      return initialState.basicReminderTime;
    case SET_REMIND_TIME:
      action.payload !== null || undefined ? action.payload : state;
    default:
      return state;
  }
};
