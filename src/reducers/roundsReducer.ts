import { DECREMENT_TOTAL_ROUNDS, INCREMENT_TOTAL_ROUNDS, SET_ROUNDS } from "../actions/actions";
const initialState = {
  totalRounds: 3,
};

export const setRounds = (state = initialState.totalRounds, action: { type: string; payload?: number }) => {
  switch (action.type) {
    case INCREMENT_TOTAL_ROUNDS:
      return state + 1;
    case DECREMENT_TOTAL_ROUNDS:
      return state - 1;
    case SET_ROUNDS:
      return action.payload;
    default:
      return state;
  }
};
