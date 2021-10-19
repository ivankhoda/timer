import { DECREMENT_TOTAL_ROUNDS, INCREMENT_TOTAL_ROUNDS } from "../actions/actions";
const initialState = {
  totalRounds: 3,
};

export const setRounds = (state = initialState.totalRounds, action: { type: string }) => {
  switch (action.type) {
    case INCREMENT_TOTAL_ROUNDS:
      return state + 1;
    case DECREMENT_TOTAL_ROUNDS:
      return state - 1;
    default:
      return state;
  }
};
