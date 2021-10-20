import { combineReducers } from "redux";
import { setRounds } from "./roundsReducer";

export const reducer = combineReducers({
  setRounds: setRounds,
});
