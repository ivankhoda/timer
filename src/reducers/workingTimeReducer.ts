import {
  AMATEUR_BOXING,
  DECREMENT_WORKING_TIME,
  INCREMENT_WORKING_TIME,
  MMA,
  PROFESSIONAL_BOXING,
  RESET_TIMER,
  SET_WORKING_TIME,
} from "../actions/actions";

const initialState = {
  basicWorkingTime: 13,
  threeMinutes: 180,
  fiveMinutes: 300,
};

export const setWorkingTime = (state = initialState.basicWorkingTime, action: { type: string; payload?: number }) => {
  switch (action.type) {
    case INCREMENT_WORKING_TIME:
      return state + 1;
    case DECREMENT_WORKING_TIME:
      return state > 0 ? state - 1 : state;
    case RESET_TIMER:
      return initialState.basicWorkingTime;
    case AMATEUR_BOXING:
      return initialState.threeMinutes;
    case PROFESSIONAL_BOXING:
      return initialState.threeMinutes;
    case MMA:
      return initialState.fiveMinutes;
    case SET_WORKING_TIME:
      console.log(action.payload);
      action.payload !== null || undefined ? action.payload : state;
    default:
      return state;
  }
};
