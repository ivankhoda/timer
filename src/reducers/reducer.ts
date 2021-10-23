import { combineReducers } from "redux";
import { setCurrentRound } from "./currentRoundReducer";
import { setRestingTime } from "./restTimeReducer";
import { setRounds } from "./roundsReducer";
import { setWorkingTime } from "./workingTimeReducer";

export const reducer = combineReducers({
  setRounds: setRounds,
  setWorkingTime: setWorkingTime,
  setRestingTime: setRestingTime,
  setCurrentRound: setCurrentRound,
});
