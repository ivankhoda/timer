import { DECREMENT_WORKING_TIME, INCREMENT_WORKING_TIME, SET_WORKING_TIME } from "../actions/actions";

const initialState = {
  basicWorkingTime: 2,
};

export const setWorkingTime = (state = initialState.basicWorkingTime, action: { type: string; payload?: number }) => {
  switch (action.type) {
    case INCREMENT_WORKING_TIME:
      return state + 1;
    case DECREMENT_WORKING_TIME:
      console.log(action);
      return state - 1;
    case SET_WORKING_TIME:
      action.payload !== null || undefined ? action.payload : state;

    default:
      return state;
  }
};
