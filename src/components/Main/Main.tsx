/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import { store } from "../../store";
import {
  decrementRestingTime,
  decrementRounds,
  decrementWorkingTime,
  incrementCurrentRound,
  incrementRounds,
  resetRounds,
  resetTimer,
  set_rounds,
} from "../../utils";
import { ControlButton } from "../ControlButton/ControlButton";
import { Rounds } from "../Rounds/Rounds";
import { TimeDisplay } from "../TimeDisplay/TimeDisplay";

export const Main = () => {
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

  const onSetRounds = (e: React.FormEvent): void => {
    e.preventDefault();
    console.log(e);
    const inputValue = (document.getElementById("inputRounds") as HTMLInputElement).value;
    const payload = parseInt(inputValue);

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
  const [pause, setPause] = useState<boolean | undefined>();
  const [start, setStart] = useState(false);
  const [rest, setRest] = useState(false);

  const startCycle = () => {
    setStart(true);
    setPause(false);
  };
  //TODO add pause function
  const makePause = () => {
    setPause(true);
  };
  useEffect(() => {
    let counter = workingTime - 1;
    if (start === true && pause === false) {
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
    if (rest === true && pause === false) {
      const interval1 = setInterval(() => {
        store.dispatch(decrementRestingTime(counter1));
        setRestTime(store.getState().setRestingTime);
        counter1--;
        if (counter1 < 0) {
          updateTimer();
          setRest(false);
          console.log(currentRound, totalRounds);
          if (currentRound !== totalRounds) {
            startCycle();
          }
        }
      }, 1000);
      return () => clearInterval(interval1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentRound, pause, rest, restTime, restingTime, start, totalRounds, workTime, workingTime]);

  // cycles logic
  const updateTimer = () => {
    store.dispatch(resetTimer());

    if (currentRound !== totalRounds) {
      store.dispatch(incrementCurrentRound());
      setCurrentRound(store.getState().setCurrentRound);
      setWorkingTime(store.getState().setWorkingTime);
      setRestTime(store.getState().setRestingTime);
    }
  };
  //TODO add restart current round progress

  const reset = () => {
    console.log("reser btn");
    store.dispatch(resetTimer());
    store.dispatch(resetRounds());
    setCurrentRound(store.getState().setCurrentRound);
    setWorkingTime(store.getState().setWorkingTime);
    setRestTime(store.getState().setRestingTime);
  };

  return (
    <div data-testid="timer" className="timer">
      <Rounds currentRound={currentRound} totalRounds={totalRounds} />
      <TimeDisplay name="work" time={workTime} />
      <TimeDisplay name="rest" time={restTime} />
      <div data-testid="button-container" className="button-container">
        <ControlButton name="Start" onClick={startCycle} />
        <ControlButton name="Reset" onClick={reset} />
        <ControlButton name="Pause" onClick={makePause} />
      </div>

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
