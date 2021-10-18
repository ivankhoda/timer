/* eslint-disable @typescript-eslint/no-unused-vars */
import { createStore } from "redux";
const initialState = {
  totalRounds: 3,
};

const setRounds = (state = initialState.totalRounds, action: { type: string }) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};

const store = createStore(setRounds);

export { store };
