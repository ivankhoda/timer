/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import useSound from "use-sound";
import reminder_sound from "../../sounds/remindKnock.mp3";
import start_sound from "../../sounds/start_sound.mp3";
import { store } from "../../store/store";
import {
  decrementRestingTime,
  decrementRounds,
  decrementWorkingTime,
  incrementCurrentRound,
  incrementRounds,
  resetRounds,
  resetTimer,
} from "../../utils";
import { ControlButton } from "../ControlButton/ControlButton";
import { Rounds } from "../Rounds/Rounds";
import { LinkButton } from "../SettingsButton/SettingsButton";
import { TimeDisplay } from "../TimeDisplay/TimeDisplay";
import "./Timer.style.scss";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Timer = () => {
  const totalRounds = store.getState().setRounds;
  const workTime = store.getState().setWorkingTime;
  const restTime = store.getState().setRestingTime;
  const currentRound = store.getState().setCurrentRound;
  const [play, { stop }] = useSound(start_sound);
  const [remind] = useSound(reminder_sound);

  const timeForRemindRoundEnd = store.getState().setRemindTime;
  const timeForRemindRestEnd = store.getState().setReminderTimeForEndOfRest;
  const timeForPrepare = store.getState().setTimeForPrepare;

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

  store.subscribe(incrementRounds);
  store.subscribe(decrementRounds);

  const [rounds, setRounds] = useState(totalRounds);
  const [workingTime, setWorkingTime] = useState(workTime);
  const [restingTime, setRestTime] = useState(restTime);
  const [round, setCurrentRound] = useState(currentRound);

  const [isActive, setIsActive] = useState(false);
  const [prepare, setPrepare] = useState(false);
  const [pause, setPause] = useState<boolean | undefined>();
  const [start, setStart] = useState(false);
  const [rest, setRest] = useState(false);

  const startCycle = () => {
    play();
    setStart(true);
    setPause(false);
  };

  const makePause = () => {
    setPause(true);
    setStart(false);
  };
  useEffect(() => {
    let counter = workingTime - 1;

    if (start === true && pause === false) {
      const interval = setInterval(() => {
        store.dispatch(decrementWorkingTime(counter));
        setWorkingTime(store.getState().setWorkingTime);
        if (counter === timeForRemindRoundEnd) {
          remind();
        }
        counter--;
        if (counter < 0) {
          play();
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
    setStart(false);
    setRest(false);
    store.dispatch(resetTimer());
    store.dispatch(resetRounds());
    setCurrentRound(store.getState().setCurrentRound);
    setWorkingTime(store.getState().setWorkingTime);
    setRestTime(store.getState().setRestingTime);
  };

  return (
    <>
      <div data-testid="timer" className="timer">
        <Rounds currentRound={currentRound} totalRounds={totalRounds} />
        <TimeDisplay name={prepare ? "Time for prepare" : "Work"} time={workTime} />
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
        <LinkButton linkTo="settings" text="Settings" />
      </div>
    </>
  );
};
