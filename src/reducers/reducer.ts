import { combineReducers } from "redux";
import { setCurrentRound } from "./currentRoundReducer";
import { setTimeForPrepare } from "./preparationTimeReducer";
import { setReminderTimeForEndOfRest } from "./remindTimeForEndOfRestReducer";
import { setReminderTime } from "./remindTimeReducer";
import { setRestingTime } from "./restTimeReducer";
import { setRounds } from "./roundsReducer";
import { setWorkingTime } from "./workingTimeReducer";

export const reducer = combineReducers({
  setRounds: setRounds,
  setWorkingTime: setWorkingTime,
  setRestingTime: setRestingTime,
  setCurrentRound: setCurrentRound,
  setRemindTime: setReminderTime,
  setReminderTimeForEndOfRest: setReminderTimeForEndOfRest,
  setTimeForPrepare: setTimeForPrepare,
});
