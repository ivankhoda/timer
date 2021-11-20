import {
  DECREMENT_CURRENT_ROUND,
  DECREMENT_RESTING_TIME,
  DECREMENT_TOTAL_ROUNDS,
  DECREMENT_WORKING_TIME,
  INCREMENT_CURRENT_ROUND,
  INCREMENT_RESTING_TIME,
  INCREMENT_TOTAL_ROUNDS,
  INCREMENT_WORKING_TIME,
  RESET_ROUNDS,
  RESET_TIMER,
  SET_ROUNDS,
} from "../actions/actions";

export const incrementRounds = () => {
  return { type: INCREMENT_TOTAL_ROUNDS };
};
export const decrementRounds = () => {
  return { type: DECREMENT_TOTAL_ROUNDS };
};
export const set_rounds = (payload: number) => {
  return { type: SET_ROUNDS, payload: payload };
};
export const incrementWorkingTime = (payload: number) => {
  return { type: INCREMENT_WORKING_TIME, payload: payload };
};
export const decrementWorkingTime = (payload: number) => {
  return { type: DECREMENT_WORKING_TIME, payload: payload };
};
export const incrementRestingTime = (payload: number) => {
  return { type: INCREMENT_RESTING_TIME, payload: payload };
};
export const decrementRestingTime = (payload: number) => {
  return { type: DECREMENT_RESTING_TIME, payload: payload };
};
export const incrementCurrentRound = () => {
  return { type: INCREMENT_CURRENT_ROUND };
};
export const decrementCurrentRound = () => {
  return { type: DECREMENT_CURRENT_ROUND };
};
export const resetTimer = () => {
  return { type: RESET_TIMER };
};
export const resetRounds = () => {
  return { type: RESET_ROUNDS };
};

export const selectDiscipline = (discipline: string) => {
  return { type: discipline };
};
