import React from "react";
import { Routes } from "react-router";
import { HashRouter, Route } from "react-router-dom";
import { SettingsPage } from "./components/SettingsPage/SettingsPage";
import { Timer } from "./components/Timer/Timer";
import "./style.scss";

export const App = () => {
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
