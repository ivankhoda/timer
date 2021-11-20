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
      console.log("selected rounds QTY");
      return action.payload;
    case AMATEUR_BOXING:
      console.log("selected rounds QTY");
      return initialState.amateurBoxing;
    case PROFESSIONAL_BOXING:
      console.log("selected rounds QTY");
      return initialState.professionalBoxing;
    case MMA:
      console.log("selected rounds QTY");

      return initialState.mma;

    default:
      return state;
  }
};
