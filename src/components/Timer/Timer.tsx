/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import {
  DECREMENT_RESTING_TIME,
  DECREMENT_TOTAL_ROUNDS,
  DECREMENT_WORKING_TIME,
  INCREMENT_RESTING_TIME,
  INCREMENT_TOTAL_ROUNDS,
  INCREMENT_WORKING_TIME,
  SET_ROUNDS,
} from "../../actions/actions";
import { store } from "../../store/store";
import { secondsToMinutes } from "../../utils";
import "./Timer.style.scss";
import { timeset } from "./timeset";
//TODO:fix type of Timer props, or refactor component
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// eslint-disable-next-line @typescript-eslint/no-explicit-any

const incrementRounds = () => {
  return { type: INCREMENT_TOTAL_ROUNDS };
};
const decrementRounds = () => {
  return { type: DECREMENT_TOTAL_ROUNDS };
};
const set_rounds = (payload: number) => {
  return { type: SET_ROUNDS, payload: payload };
};
const incrementWorkingTime = (payload: number) => {
  return { type: INCREMENT_WORKING_TIME, payload: payload };
};
const decrementWorkingTime = (payload: number) => {
  return { type: DECREMENT_WORKING_TIME, payload: payload };
};
const incrementRestingTime = (payload: number) => {
  return { type: INCREMENT_RESTING_TIME, payload: payload };
};
const decrementRestingTime = (payload: number) => {
  return { type: DECREMENT_RESTING_TIME, payload: payload };
};

export const Timer = () => {
  const setRoundsStore = store.getState().setRounds;
  const totalRounds = setRoundsStore;
  const workTime = store.getState().setWorkingTime;
  const restTime = store.getState().setRestingTime;

  const onIncrementButtonClicked = () => {
    store.getState().setRounds !== 99
      ? (store.dispatch(incrementRounds()), setRounds(store.getState().setRounds))
      : console.log("Reached limit");
  };
  const onDecrementButtonClicked = () => {
    store.getState().setRounds !== 1
      ? //checkLimits(store.getState().setRounds, 1)
        (store.dispatch(decrementRounds()), setRounds(store.getState().setRounds))
      : console.log("Reached limit");
  };
  const checkLimits = (value: number, limit: number) => {
    value !== limit ? console.log("limit not reached yet") : console.log("limit reached");
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSetRounds = (e: any) => {
    e.preventDefault();
    const payload = e.target.rounds.value;
    store.getState().setRounds !== 1 || store.getState().setRounds !== 99
      ? (store.dispatch(set_rounds(payload)), setRounds(store.getState().setRounds))
      : console.log("something wrong");
  };
  store.subscribe(incrementRounds);
  store.subscribe(decrementRounds);

  const [rounds, setRounds] = useState(totalRounds);
  const [workingTime, setWorkingTime] = useState(workTime);
  const [restingTime, setRestTime] = useState(restTime);
  const [currentRound, setCurrentRound] = useState(timeset.startRound);
  const [buttonOff, setButtonOff] = useState(false);
  //TODO Make button text depend on state

  const startCycle = (workingSeconds: number, restingSeconds: number, updateTime: () => void) => {
    let counter = workingSeconds - 1;

    const interval = setInterval(() => {
      store.dispatch(decrementWorkingTime(counter));
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
      store.dispatch(decrementRestingTime(counter));
      counter--;
      if (counter < 0) {
        clearInterval(interval);
        console.log("Rest time is over");
        updateTime();
      }
    }, 1000);
  };
  //TODO add cycles logic
  //const cycle = (numOfReps: number) => {};

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
          <p data-testid="field-property">{secondsToMinutes(restingTime)}</p>
        </div>
      </section>
      <div data-testid="button-container" className="button-container">
        <button
          data-testid="start-button"
          className="start-button"
          onClick={() => startCycle(workingTime, restingTime, updateTimer)}
          disabled={buttonOff}
        >
          БОКС!
        </button>
        <button data-testid="cancel-button" className="cancel-button" onClick={() => resetTimer()}>
          Сброс
        </button>
        <button data-testid="settings-button" className="settings-button">
          Настройки
        </button>
      </div>
      <form className="setRounds-form" onSubmit={onSetRounds}>
        <input placeholder="Введите количество раундов" type="number" min="1" max="99" name="rounds"></input>
        <button type="submit">Set rounds</button>
      </form>

      <div className="incrementRounds-control">
        <label>Используйте кнопки, чтобы установить количество раундов</label>
        <div className="incrementRounds-control_buttons">
          <button onClick={onIncrementButtonClicked}>+</button>
          <button onClick={onDecrementButtonClicked}>-</button>
        </div>
      </div>
    </div>
  );
};
