import {
  AMATEUR_BOXING,
  DECREMENT_RESTING_TIME,
  INCREMENT_RESTING_TIME,
  MMA,
  PROFESSIONAL_BOXING,
  RESET_TIMER,
  SET_RESTING_TIME,
} from "../actions/actions";
const initialState = {
  basicRestingTime: 2,
  oneMinute: 60,
  fiveMinutes: 300,
};

export const setRestingTime = (state = initialState.basicRestingTime, action: { type: string; payload?: number }) => {
  switch (action.type) {
    case INCREMENT_RESTING_TIME:
      return state + 1;
    case DECREMENT_RESTING_TIME:
      return state > 0 ? state - 1 : state;
    case RESET_TIMER:
      return initialState.basicRestingTime;
    case AMATEUR_BOXING:
      console.log("selected rest time");

      return initialState.oneMinute;
    case PROFESSIONAL_BOXING:
      console.log("selected rest time");

      return initialState.oneMinute;
    case MMA:
      console.log("selected rest time");

      return initialState.oneMinute;

    case SET_RESTING_TIME:
      action.payload !== null || undefined ? action.payload : state;
    default:
      return state;
  }
};
