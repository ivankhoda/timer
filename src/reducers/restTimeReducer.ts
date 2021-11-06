import { DECREMENT_RESTING_TIME, INCREMENT_RESTING_TIME, RESET_TIMER, SET_RESTING_TIME } from "../actions/actions";
const initialState = {
  basicRestingTime: 2,
};

export const setRestingTime = (state = initialState.basicRestingTime, action: { type: string; payload?: number }) => {
  switch (action.type) {
    case INCREMENT_RESTING_TIME:
      return state + 1;
    case DECREMENT_RESTING_TIME:
      return state > 0 ? state - 1 : state;
    case RESET_TIMER:
      return initialState.basicRestingTime;
    case SET_RESTING_TIME:
      action.payload !== null || undefined ? action.payload : state;
    default:
      return state;
  }
};
