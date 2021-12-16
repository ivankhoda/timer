import React, { ChangeEventHandler } from "react";

type Options = {
  name: string;
  options: { optionName: string; optionValue: string }[];
  onSelect: ChangeEventHandler<HTMLSelectElement>;
};

export const DisciplinesSelect = (props: Options) => {
  return (
    <select className="settings_element" onChange={props.onSelect}>
      {props.name}
      {props.options.map((elem) => (
        <option key={elem.optionName} value={elem.optionValue}>
          {elem.optionName}
        </option>
      ))}
    </select>
  );
};
