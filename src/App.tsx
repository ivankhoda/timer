/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { Routes } from "react-router";
import { HashRouter, Route } from "react-router-dom";
import { SettingsPage } from "./components/SettingsPage/SettingsPage";
import { Timer } from "./components/Timer/Timer";
import "./style.scss";

//TODO:fix type of App props, or refactor component
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const App = (props: any) => {
  const routes = [
    { path: "/", name: "Timer", Component: <Timer /> },
    { path: "/settings", name: "Settings", Component: <SettingsPage /> },
  ];
  return (
    <HashRouter>
      <Routes>
        {routes.map(({ path, Component }) => (
          <Route key={path} path={path} element={Component} />
        ))}
      </Routes>
    </HashRouter>
  );
};
