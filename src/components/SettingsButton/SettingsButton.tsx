import React from "react";
import { Link } from "react-router-dom";

type ButtonProps = {
  linkTo: string;
  text: string;
};

export const LinkButton = (props: ButtonProps) => {
  const link = props.linkTo;
  const text = props.text;
  return (
    <Link to={`${link}`} data-testid="settings-button" className="settings-button">
      {text}
    </Link>
  );
};
