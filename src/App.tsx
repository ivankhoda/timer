/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { Timer } from "./components/Timer/Timer";
import { store } from "./store";
import "./style.scss";
//TODO:fix type of App props, or refactor component
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const App = (props: any) => {
  console.log(store.getState());
  return (
    <div>
      <h1 data-testid="title">Welcome to timer App</h1>
      <Timer />
    </div>
  );
};
