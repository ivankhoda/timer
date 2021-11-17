import React from "react";
import { store } from "../../store";
import { numberToString } from "../../utils";
import { LinkButton } from "../SettingsButton/SettingsButton";
import "./Settings.style.scss";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type Discipline = {
  roundsQuantity: number;
  roundWorkingTime: number;
  disciplineRestTime: number;
};
export enum Disciplines {
  MMA = "mma",
  AmateurBoxing = "amateurBoxing",
  ProfessionalBoxing = "professionalBoxing",
  Custom = "custom",
}

export const SettingsPage = () => {
  // const totalRounds = store.getState().setRounds;
  const workTime = store.getState().setWorkingTime;
  const restTime = store.getState().setRestingTime;
  const timeForRemindRoundEnd = store.getState().setRemindTime;
  const timeForRemindRestEnd = store.getState().setReminderTimeForEndOfRest;
  const timeForPrepare = store.getState().setTimeForPrepare;
  //const remindBefore = 10;
  return (
    <div className="settings">
      <h1>Settings</h1>
      <LinkButton linkTo="/" text="Go back" />
      <select className="settings_element">
        Profile
        <option value="">{Disciplines.MMA}</option>
        <option value="">{Disciplines.AmateurBoxing}</option>
        <option value="">{Disciplines.ProfessionalBoxing}</option>
        <option value="">Custom</option>
      </select>

      {/* <div className="settings_element">
        <label className="settings_title">Количество раундов</label>
        <p>{totalRounds}</p>
        <div className="incrementRounds-control_buttons">
          <button>+</button>
          <button>-</button>
        </div>
      </div> */}

      <div className="settings_element">
        <h5 className="settings_title">Настройки времени раундов(мин)</h5>
        <input type="number" min="0" max="99" placeholder={numberToString(workTime)}></input>
      </div>
      <div className="settings_element">
        <h5 className="settings_title">Настройки времени отдыха(мин)</h5>
        <input type="number" min="0" max="180" placeholder={numberToString(restTime)}></input>
      </div>
      <div className="settings_element">
        <h5 className="settings_title">Сигнал до окончания раунда(сек)</h5>
        <input type="number" min="0" max="60" placeholder={numberToString(timeForRemindRoundEnd)}></input>
      </div>
      <div className="settings_element">
        <h5 className="settings_title">Время для подготовки перед первым раундом(сек)</h5>
        <input type="number" min="0" max="60" placeholder={numberToString(timeForPrepare)}></input>
      </div>
      <div className="settings_element">
        <h5 className="settings_title">Сигнал до окончания перерыва(сек)</h5>
        <input type="number" min="0" max="60" placeholder={numberToString(timeForRemindRestEnd)}></input>
      </div>
      <div className="settings_element">
        <h5 className="settings_title">Не затемнять экран</h5>
        <label className="switch">
          <input type="checkbox"></input>
          <span className="slider"></span>
        </label>
      </div>
      <div className="settings_element">
        <h5 className="settings_title">Голосовое оповещение</h5>
        <label className="switch">
          <input type="checkbox"></input>
          <span className="slider"></span>
        </label>
      </div>
    </div>
  );
};
