import {
  AMATEUR_BOXING,
  DECREMENT_TOTAL_ROUNDS,
  INCREMENT_TOTAL_ROUNDS,
  MMA,
  PROFESSIONAL_BOXING,
  SET_ROUNDS,
} from "../actions/actions";
const initialState = {
  totalRounds: 3,
  amateurBoxing: 3,
  mma: 5,
  professionalBoxing: 12,
};

export const setRounds = (state = initialState.totalRounds, action: { type: string; payload?: number }) => {
  switch (action.type) {
    case INCREMENT_TOTAL_ROUNDS:
      return state + 1;
    case DECREMENT_TOTAL_ROUNDS:
      return state - 1;
    case SET_ROUNDS:
      return action.payload;
    case AMATEUR_BOXING:
      return initialState.amateurBoxing;
    case MMA:
      return initialState.mma;
    case PROFESSIONAL_BOXING:
      return initialState.professionalBoxing;
    default:
      return state;
  }
};
