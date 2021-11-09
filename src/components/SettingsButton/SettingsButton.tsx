import React from "react";
import { Link } from "react-router-dom";

export const LinkToSettings = () => {
  return (
    <Link to={"/settings"} data-testid="settings-button" className="settings-button">
      Settings
    </Link>
  );
};
