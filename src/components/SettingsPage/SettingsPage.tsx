import React from "react";

export const SettingsPage = () => {
  return (
    <div>
      <h1>Settings</h1>

      <select>
        Profile
        <option value="">Classic box</option>
        <option value="">MMA</option>
        <option value="">Amateur box</option>
        <option value="">Professional box</option>
        <option value="">Custom</option>
      </select>
    </div>
  );
};
