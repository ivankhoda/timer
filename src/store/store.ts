import { createStore } from "redux";
const initialState = {
  seconds: 0,
  start_time: 0,
  status: "paused",
  decrement_interval: 0,
};
const countdownTimer = (state = initialState, action: { type: any; start_time: any }) => {
  switch (action.type) {
    case "START_TIMER":
      return Object.assign({}, state, {
        start_time: action.start_time,
        seconds: action.start_time,
        status: "counting down",
      });
    case "STOP_TIMER":
      return Object.assign({}, state, { status: "paused" });
    case "TICK":
      return Object.assign({}, state, { seconds: (state.seconds - 0.01).toFixed(2) });
    default:
      return state;
  }
};

const store = createStore(countdownTimer);

export default store;
