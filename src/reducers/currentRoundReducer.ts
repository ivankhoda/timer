import { DECREMENT_CURRENT_ROUND, INCREMENT_CURRENT_ROUND, RESET_ROUNDS } from "../actions/actions";

const initialState = {
  initialCurrentRound: 1,
};

export const setCurrentRound = (
  state = initialState.initialCurrentRound,
  action: { type: string; payload?: number }
) => {
  switch (action.type) {
    case INCREMENT_CURRENT_ROUND:
      console.log(state);
      return state + 1;
    case DECREMENT_CURRENT_ROUND:
      console.log(state);
      return state > 0 ? state - 1 : state;
    case RESET_ROUNDS:
      return initialState.initialCurrentRound;
    default:
      return state;
  }
};
