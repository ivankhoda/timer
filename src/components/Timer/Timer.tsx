import React, { useState } from "react";
import "./Timer.style.scss";
//TODO:fix type of Timer props, or refactor component
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const timeset = {
  threeMinutes: 5,
  oneMinute: 3,
  totalRounds: 3,
  startRound: 1,
};
export const Timer = () => {
  const secondsToMinutes = (seconds: number) => {
    const date = new Date(0);
    date.setSeconds(seconds);
    const time = date.toISOString().substr(14, 5);
    return time;
  };

  const [workingTime, setWorkingTime] = useState(timeset.threeMinutes);
  const [restTime, setRestTime] = useState(timeset.oneMinute);
  const [currentRound, setCurrentRound] = useState(timeset.startRound);
  const [totalRounds, setTotalRounds] = useState(timeset.totalRounds);
  const [buttonOff, setButtonOff] = useState(false);
  //TODO Make button text depend on state

  const startWorkingTime = (workingSeconds: number, restingSeconds: number) => {
    let counter = workingSeconds - 1;

    const interval1 = setInterval(() => {
      setWorkingTime(counter);
      counter--;
      if (counter < 0) {
        clearInterval(interval1);
        console.log("Working time is over");
        startRestTime(restingSeconds);
      }
    }, 1000);
    console.log(interval1);
  };

  const startRestTime = (seconds: number) => {
    let counter = seconds - 1;

    const interval = setInterval(() => {
      setRestTime(counter);
      counter--;
      if (counter < 0) {
        clearInterval(interval);
        console.log("Rest time is over");
        updateTimer();
      }
    }, 1000);
  };

  //TODO add cycles
  const startWork = (work: number, rest: number) => {
    console.log("Work started");
    startWorkingTime(work, rest);
  };
  const updateTimer = () => {
    setWorkingTime(timeset.threeMinutes);
    setRestTime(timeset.oneMinute);
    setCurrentRound(currentRound + 1);
  };
  const resetTimer = () => {
    setWorkingTime(timeset.threeMinutes);
    setRestTime(timeset.oneMinute);
    setCurrentRound(timeset.startRound);
  };
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
            {secondsToMinutes(workingTime)}
          </p>
        </div>
      </section>
      <section data-testid="section" className="section">
        <div data-testid="field" className="field">
          <p data-testid="field-name">Отдых</p>
          <p data-testid="field-property">{secondsToMinutes(restTime)}</p>
        </div>
      </section>
      <div data-testid="button-container" className="button-container">
        <button data-testid="start-button" onClick={() => startWork(workingTime, restTime)} disabled={buttonOff}>
          БОКС!
        </button>
        <button data-testid="cancel-button" onClick={() => resetTimer()}>
          Сброс
        </button>
        <button data-testid="settings-button">Настройки</button>
      </div>
    </div>
  );
};
