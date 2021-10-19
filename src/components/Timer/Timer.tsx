/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { DECREMENT_TOTAL_ROUNDS, INCREMENT_TOTAL_ROUNDS } from "../../actions/actions";
import { store } from "../../store/store";
import "./Timer.style.scss";
import { timeset } from "./timeset";
//TODO:fix type of Timer props, or refactor component
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// eslint-disable-next-line @typescript-eslint/no-explicit-any

const increment = () => {
  return { type: INCREMENT_TOTAL_ROUNDS };
};

const decrement = () => {
  return { type: DECREMENT_TOTAL_ROUNDS };
};

export const Timer = () => {
  const secondsToMinutes = (seconds: number) => {
    const date = new Date(0);
    date.setSeconds(seconds);
    const time = date.toISOString().substr(14, 5);
    return time;
  };
  const totalRounds = store.getState();
  const [rounds, setRounds] = useState(totalRounds);
  const [workingTime, setWorkingTime] = useState(timeset.threeMinutes);
  const [restTime, setRestTime] = useState(timeset.oneMinute);
  const [currentRound, setCurrentRound] = useState(timeset.startRound);
  const [buttonOff, setButtonOff] = useState(false);
  //TODO Make button text depend on state

  const startCycle = (workingSeconds: number, restingSeconds: number, updateTime: () => void) => {
    let counter = workingSeconds - 1;

    const interval = setInterval(() => {
      setWorkingTime(counter);
      counter--;
      if (counter < 0) {
        clearInterval(interval);
        console.log("Working time is over");
        startRestTime(restingSeconds, updateTime);
      }
    }, 1000);
  };

  const startRestTime = (seconds: number, updateTime: () => void) => {
    let counter = seconds - 1;

    const interval = setInterval(() => {
      setRestTime(counter);
      counter--;
      if (counter < 0) {
        clearInterval(interval);
        console.log("Rest time is over");
        updateTime();
      }
    }, 1000);
  };

  const onIncrementButtonClicked = () => {
    store.dispatch(increment());
    setRounds(store.getState());
  };

  const onDecrementButtonClicked = () => {
    store.dispatch(decrement());
    setRounds(store.getState());
  };
  store.subscribe(increment);
  store.subscribe(decrement);

  //TODO add cycles logic
  //TODO add pause function
  //TODO add restart current round progress

  const updateTimer = () => {
    setWorkingTime(timeset.threeMinutes);
    setRestTime(timeset.oneMinute);
    if (currentRound !== timeset.totalRounds) {
      setCurrentRound(currentRound + 1);
    }
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
            {currentRound}/{rounds}
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
        <button
          data-testid="start-button"
          onClick={() => startCycle(workingTime, restTime, updateTimer)}
          disabled={buttonOff}
        >
          БОКС!
        </button>
        <button data-testid="cancel-button" onClick={() => resetTimer()}>
          Сброс
        </button>
        <button data-testid="settings-button">Настройки</button>
      </div>

      <input placeholder="Введите количество раундов"></input>
      <button onClick={onIncrementButtonClicked}>+</button>
      <button onClick={onDecrementButtonClicked}>-</button>
    </div>
  );
};
