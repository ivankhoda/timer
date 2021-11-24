import React, { ChangeEventHandler } from "react";

type Options = {
  name: string;
  options: [{ optionName: string; optionValue: string }];
  onSelect: ChangeEventHandler<HTMLSelectElement>;
};

export const DisciplinesSelect = (props: Options) => {
  const { name } = props;
  return (
    <select className="settings_element" onChange={props.onSelect}>
      {name}

      {props.options.map((elem) => {
        <option value={elem.optionValue}>{elem.optionValue}</option>;
      })}
    </select>
  );
};
