import React, { useState } from "react";
//TODO:fix type of Timer props, or refactor component
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// eslint-disable-next-line @typescript-eslint/no-explicit-any
import "./Timer.style.scss";
export const Timer = () => {
  const secondsToMinutes = (seconds: number) => {
    const date = new Date(0);
    date.setSeconds(seconds);
    const time = date.toISOString().substr(14, 5);
    return time;
  };
  const [workingTime, setWorkingTime] = useState(secondsToMinutes(180));
  const [restTime, setRestTime] = useState(secondsToMinutes(60));
  const [currentRound, setCurrentRound] = useState(1);
  const [totalRounds, setTotalRounds] = useState(3);

  return (
    <div data-testid="timer" className="timer">
      <section data-testid="section" className="section">
        <div data-testid="field" className="field">
          <p data-testid="field-name">Раунд</p>
          <p data-testid="field-property">
            {currentRound}/{totalRounds}
          </p>
        </div>
      </section>
      <section data-testid="section" className="section">
        <div data-testid="field" className="field">
          <p data-testid="field-name">Работа</p>
          <p data-testid="field-property" className="working-time">
            {workingTime}
          </p>
        </div>
      </section>
      <section data-testid="section" className="section">
        <div data-testid="field" className="field">
          <p data-testid="field-name">Отдых</p>
          <p data-testid="field-property">{restTime}</p>
        </div>
      </section>
      <div data-testid="button-container" className="button-container">
        <button data-testid="start-button">БОКС!</button>
        <button data-testid="cancel-button">Сброс</button>
        <button data-testid="settings-button">Настройки</button>
      </div>
    </div>
  );
};
