import React, { ChangeEventHandler } from "react";

type Options = {
  title: string;
  type: string;
  min?: string;
  max?: string;
  name: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  value?: string | number | undefined;
};

export const SettingsElement = (props: Options) => {
  const { title, type, min, max, name, onChange, value } = props;
  return (
    <div className="settings_element">
      <h5 className="settings_title">{title}</h5>
      {type === "number" ? (
        <input type={type} min={min} max={max} name={name} onChange={onChange} value={value}></input>
      ) : (
        <input type={type} name={name} onChange={onChange}></input>
      )}
    </div>
  );
};
