/* eslint-disable @typescript-eslint/no-unused-vars */
import { createStore } from "redux";
import { reducer } from "../reducers/reducer";

const store = createStore(reducer);

export { store };