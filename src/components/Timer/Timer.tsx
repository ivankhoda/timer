/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import { store } from "../../store/store";
import {
  decrementRestingTime,
  decrementRounds,
  decrementWorkingTime,
  incrementCurrentRound,
  incrementRounds,
  resetRounds,
  resetTimer,
  secondsToMinutes,
  set_rounds,
} from "../../utils";
import "./Timer.style.scss";
//TODO:fix type of Timer props, or refactor component
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Timer = () => {
  const totalRounds = store.getState().setRounds;
  const workTime = store.getState().setWorkingTime;
  const restTime = store.getState().setRestingTime;
  const currentRound = store.getState().setCurrentRound;

  const onIncrementButtonClicked = () => {
    store.getState().setRounds !== 99
      ? (store.dispatch(incrementRounds()), setRounds(store.getState().setRounds))
      : console.log("Reached limit");
  };
  const onDecrementButtonClicked = () => {
    store.getState().setRounds !== 1
      ? (store.dispatch(decrementRounds()), setRounds(store.getState().setRounds))
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
  const [round, setCurrentRound] = useState(currentRound);
  //TODO Make button text depend on state
  const [isActive, setIsActive] = useState(false);
  const [pause, setPause] = useState(false);
  const [start, setStart] = useState(false);
  const [rest, setRest] = useState(false);

  const startCycle = () => {
    setStart(true);
  };
  //TODO add pause function
  const makePause = () => {
    setPause(true);
    setStart(false);
  };
  useEffect(() => {
    let counter = workingTime - 1;
    if (start === true) {
      const interval = setInterval(() => {
        store.dispatch(decrementWorkingTime(counter));
        setWorkingTime(store.getState().setWorkingTime);
        counter--;
        if (counter < 0) {
          setStart(false);
          setRest(true);
        }
      }, 1000);

      return () => clearInterval(interval);
    }
    let counter1 = restTime - 1;
    if (rest === true) {
      const interval1 = setInterval(() => {
        store.dispatch(decrementRestingTime(counter1));
        setRestTime(store.getState().setRestingTime);
        counter1--;
        if (counter1 < 0) {
          updateTimer();
          setRest(false);
        }
      }, 1000);
      return () => clearInterval(interval1);
    }
  }, [pause, rest, restTime, restingTime, start, workTime, workingTime]);
  const updateTimer = () => {
    store.dispatch(resetTimer());
    store.dispatch(incrementCurrentRound());
    setCurrentRound(store.getState().setCurrentRound);
    setWorkingTime(store.getState().setWorkingTime);
    setRestTime(store.getState().setRestingTime);
  };
  // cycles logic

  //TODO add restart current round progress

  const reset = () => {
    console.log("reser btn");
    store.dispatch(resetTimer());
    store.dispatch(resetRounds());
    setWorkingTime(workingTime);
    setRestTime(restingTime);
    setCurrentRound(store.getState().setCurrentRound);
  };

  const getInterv = () => {
    console.log("get intervals information");
  };

  return (
    <div data-testid="timer" className="timer">
      <section data-testid="section" className="section">
        <div data-testid="field" className="field">
          <p data-testid="field-name">Раунд</p>
          <p data-testid="field-property">
            {round}/{rounds}
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
        <button data-testid="start-button" className="start-button" onClick={() => startCycle()}>
          {isActive ? "Pause" : "Start"}
        </button>
        <button data-testid="cancel-button" className="cancel-button" onClick={() => reset()}>
          Сброс
        </button>
        <button data-testid="cancel-button" className="cancel-button" onClick={() => makePause()}>
          Pause
        </button>
        <button data-testid="settings-button" className="settings-button">
          Настройки
        </button>
      </div>
      <form className="setRounds-form" onSubmit={onSetRounds}>
        <input
          className="setRounds-form_input"
          placeholder="Введите количество раундов"
          type="number"
          min="1"
          max="99"
          name="rounds"
        ></input>
        <button className="setRounds-form_button" type="submit">
          Set rounds
        </button>
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
