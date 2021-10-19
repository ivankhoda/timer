/* eslint-disable @typescript-eslint/no-unused-vars */
import { createStore } from "redux";
import { setRounds } from "../reducers";

const store = createStore(setRounds);

export { store };
