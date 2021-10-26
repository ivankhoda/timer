/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { store } from "../../store";
import "./Timer.style.scss";
//TODO:fix type of Timer props, or refactor component
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface Props {
  round: string;
}
export class TimerClass<Props> {
  round: number;
  constructor() {
    this.round = store.getState().setCurrentRound;
  }
  // constructor() {
  //   super();
  //   this.state = {
  //     input: [0, 0, 0, 0, 0, 0],
  //     timer: "",
  //     remainingTime: 0,
  //     intervalId: null,
  //     countdownRunning: false,
  //     buttonName: "Start",
  //   };
  //   this.updateTimer = this.updateTimer.bind(this);
  // }
  updateTimer() {
    console.log(this.round);
  }
  render() {
    return (
      <div data-testid="timer" className="timer">
        <section data-testid="section" className="section">
          <div data-testid="field" className="field">
            <p data-testid="field-name">Раунд</p>
            <p data-testid="field-property">round/rounds</p>
          </div>
        </section>
        <section data-testid="section" className="section">
          <div data-testid="field" className="field">
            <p data-testid="field-name">Работа</p>
            <p data-testid="field-property" className="working-time">
              {}
            </p>
          </div>
        </section>
        <section data-testid="section" className="section">
          <div data-testid="field" className="field">
            <p data-testid="field-name">Отдых</p>
            <p data-testid="field-property">work</p>
          </div>
        </section>
        <div data-testid="button-container" className="button-container">
          <button data-testid="start-button" className="start-button" onClick={this.updateTimer}>
            Start
          </button>
          <button data-testid="cancel-button" className="cancel-button">
            Сброс
          </button>
          <button data-testid="cancel-button" className="cancel-button">
            Get intervals
          </button>
          <button data-testid="settings-button" className="settings-button">
            Настройки
          </button>
        </div>
        <form className="setRounds-form">
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
            <button>+</button>
            <button>-</button>
          </div>
        </div>
      </div>
    );
  }
  // const totalRounds = store.getState().setRounds;
  // const workTime = store.getState().setWorkingTime;
  // const restTime = store.getState().setRestingTime;
  // const currentRound = store.getState().setCurrentRound;
  // const onIncrementButtonClicked = () => {
  //   store.getState().setRounds !== 99
  //     ? (store.dispatch(incrementRounds()), setRounds(store.getState().setRounds))
  //     : console.log("Reached limit");
  // };
  // const onDecrementButtonClicked = () => {
  //   store.getState().setRounds !== 1
  //     ? (store.dispatch(decrementRounds()), setRounds(store.getState().setRounds))
  //     : console.log("Reached limit");
  // };
  // const checkLimits = (value: number, limit: number) => {
  //   value !== limit ? console.log("limit not reached yet") : console.log("limit reached");
  // };
  // // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // const onSetRounds = (e: any) => {
  //   e.preventDefault();
  //   const payload = e.target.rounds.value;
  //   store.getState().setRounds !== 1 || store.getState().setRounds !== 99
  //     ? (store.dispatch(set_rounds(payload)), setRounds(store.getState().setRounds))
  //     : console.log("something wrong");
  // };
  // store.subscribe(incrementRounds);
  // store.subscribe(decrementRounds);
  // const [rounds, setRounds] = useState(totalRounds);
  // const [workingTime, setWorkingTime] = useState(workTime);
  // const [restingTime, setRestTime] = useState(restTime);
  // const [round, setCurrentRound] = useState(currentRound);
  // //TODO Make button text depend on state
  // const [isActive, setIsActive] = useState(false);
  // const startCycle = (workingSeconds: number, restingSeconds: number, updateTime: () => void) => {
  //   let counter = workingSeconds;
  //   toggle();
  //   const interval = setInterval(() => {
  //     store.dispatch(decrementWorkingTime(counter));
  //     setWorkingTime(store.getState().setWorkingTime);
  //     counter--;
  //     if (counter < 0) {
  //       clearInterval(interval);
  //       startRestTime(restingSeconds, updateTime);
  //     }
  //   }, 1000);
  // };
  // const startRestTime = (seconds: number, updateTime: () => void) => {
  //   let counter = seconds;
  //   const interval = setInterval(() => {
  //     store.dispatch(decrementRestingTime(counter));
  //     setRestTime(store.getState().setRestingTime);
  //     counter--;
  //     if (counter < 0) {
  //       clearInterval(interval);
  //       updateTime();
  //     }
  //   }, 1000);
  // };
  // // cycles logic
  // const cycles = totalRounds;
  // let i = 0;
  // const start = () => {
  //   startCycle(workingTime, restingTime, updateTimer);
  //   const sumOfWorkingTimeAndRestingTime = workingTime + restingTime;
  //   const timeout = sumOfWorkingTimeAndRestingTime * 1000;
  //   i++;
  //   if (i === cycles) {
  //     i = 0;
  //     return;
  //   }
  //   setTimeout(start, timeout);
  // };
  // //TODO add pause function
  // //TODO add restart current round progress
  // const updateTimer = () => {
  //   store.dispatch(resetTimer());
  //   store.dispatch(incrementCurrentRound());
  //   setWorkingTime(workingTime);
  //   setRestTime(restingTime);
  //   setCurrentRound(store.getState().setCurrentRound);
  // };
  // const reset = () => {
  //   console.log("reser btn");
  //   store.dispatch(resetTimer());
  //   store.dispatch(resetRounds());
  //   setIsActive(false);
  //   setWorkingTime(workingTime);
  //   setRestTime(restingTime);
  //   setCurrentRound(store.getState().setCurrentRound);
  // };
  // const getInterv = () => {
  //   console.log("get intervals information");
  // };
  // //TODO Make button text depend on state
  // const toggle = () => {
  //   setIsActive(!isActive);
  // };
  // return (
  //   <div data-testid="timer" className="timer">
  //     <section data-testid="section" className="section">
  //       <div data-testid="field" className="field">
  //         <p data-testid="field-name">Раунд</p>
  //         <p data-testid="field-property">
  //           {round}/{rounds}
  //         </p>
  //       </div>
  //     </section>
  //     <section data-testid="section" className="section">
  //       <div data-testid="field" className="field">
  //         <p data-testid="field-name">Работа</p>
  //         <p data-testid="field-property" className="working-time">
  //           {secondsToMinutes(workingTime)}
  //         </p>
  //       </div>
  //     </section>
  //     <section data-testid="section" className="section">
  //       <div data-testid="field" className="field">
  //         <p data-testid="field-name">Отдых</p>
  //         <p data-testid="field-property">{secondsToMinutes(restingTime)}</p>
  //       </div>
  //     </section>
  //     <div data-testid="button-container" className="button-container">
  //       <button data-testid="start-button" className="start-button" onClick={() => start()}>
  //         {isActive ? "Pause" : "Start"}
  //       </button>
  //       <button data-testid="cancel-button" className="cancel-button" onClick={() => reset()}>
  //         Сброс
  //       </button>
  //       <button data-testid="cancel-button" className="cancel-button" onClick={() => getInterv()}>
  //         Get intervals
  //       </button>
  //       <button data-testid="settings-button" className="settings-button">
  //         Настройки
  //       </button>
  //     </div>
  //     <form className="setRounds-form" onSubmit={onSetRounds}>
  //       <input
  //         className="setRounds-form_input"
  //         placeholder="Введите количество раундов"
  //         type="number"
  //         min="1"
  //         max="99"
  //         name="rounds"
  //       ></input>
  //       <button className="setRounds-form_button" type="submit">
  //         Set rounds
  //       </button>
  //     </form>
  //     <div className="incrementRounds-control">
  //       <label>Используйте кнопки, чтобы установить количество раундов</label>
  //       <div className="incrementRounds-control_buttons">
  //         <button onClick={onIncrementButtonClicked}>+</button>
  //         <button onClick={onDecrementButtonClicked}>-</button>
  //       </div>
  //     </div>
  //   </div>
  // );
}