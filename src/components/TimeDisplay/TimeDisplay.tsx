import React from "react";
import { secondsToMinutes } from "../../utils";

interface IProps {
  name: string;
  time: number;
}
export const TimeDisplay = (props: IProps) => {
  const { name, time } = props;
  const timeToMinutes = secondsToMinutes(time);

  return (
    <>
      <section data-testid="section" className="section">
        <div data-testid="field" className="field">
          <p data-testid="field-name">{name}</p>
          <p data-testid="field-property" className="time">
            {timeToMinutes}
          </p>
        </div>
      </section>
    </>
  );
};
