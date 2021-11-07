import React from "react";
import { ControlButton } from "../ControlButton/ControlButton";
interface IProps {
  placeHolder: string;
  inputId: string;
  onSubmit: (e: React.FormEvent<HTMLInputElement>) => void;
}
export const Form = (props: IProps) => {
  const { placeHolder, inputId, onSubmit } = props;
  return (
    <form className="setRounds-form" onSubmit={() => onSubmit}>
      <input
        className="setRounds-form_input"
        placeholder={placeHolder}
        type="number"
        min="1"
        id={inputId}
        max="99"
        name="rounds"
      ></input>
      <ControlButton name="Set rounds" />
    </form>
  );
};
