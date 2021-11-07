import React from "react";

interface IProps {
  currentRound: number;
  totalRounds: number | undefined;
}
export const Rounds = (props: IProps) => {
  const { currentRound, totalRounds } = props;
  return (
    <>
      <section data-testid="section" className="section" id="rounds">
        <div data-testid="field" className="field">
          <p data-testid="field-name">Раунд</p>
          <p data-testid="field-property">
            {currentRound}/{totalRounds}
          </p>
        </div>
      </section>
    </>
  );
};
