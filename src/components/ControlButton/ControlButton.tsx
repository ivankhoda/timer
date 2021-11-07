import React from "react";
interface IProps {
  name: string;
  onClick?: () => void;
}
export const ControlButton = (props: IProps) => {
  const { name, onClick } = props;
  return <button onClick={onClick}>{name}</button>;
};
