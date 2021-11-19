import React from "react";
import { store } from "../../store";
import { numberToString, secondsToWholeMinutes } from "../../utils";
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
  const workingTimeToMinutes = secondsToWholeMinutes(workTime);

  //const remindBefore = 10;
  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value, e.target, e.currentTarget.name);
    console.log(workingTimeToMinutes);
  };
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

      <div className="settings_element">
        <h5 className="settings_title">Настройки времени раундов(мин)</h5>
        <input
          type="number"
          min="0"
          max="99"
          name="roundsTime"
          onChange={onChange}
          defaultValue={workingTimeToMinutes}
        ></input>
      </div>
      <div className="settings_element">
        <h5 className="settings_title">Настройки времени отдыха(сек)</h5>
        <input
          type="number"
          min="0"
          max="180"
          placeholder={numberToString(restTime)}
          name="restTime"
          onChange={onChange}
          defaultValue={restTime}
        ></input>
      </div>
      <div className="settings_element">
        <h5 className="settings_title">Сигнал до окончания раунда(сек)</h5>
        <input
          type="number"
          min="0"
          max="60"
          defaultValue={timeForRemindRoundEnd}
          name="remindOfRoundsEnd"
          onChange={onChange}
        ></input>
      </div>
      <div className="settings_element">
        <h5 className="settings_title">Время для подготовки перед первым раундом(сек)</h5>
        <input
          type="number"
          min="0"
          max="60"
          defaultValue={timeForPrepare}
          name="timeForFirstRoundPrepare"
          onChange={onChange}
        ></input>
      </div>
      <div className="settings_element">
        <h5 className="settings_title">Сигнал до окончания перерыва(сек)</h5>
        <input
          type="number"
          min="0"
          max="60"
          defaultValue={timeForRemindRestEnd}
          name="remindRestEnd"
          onChange={onChange}
        ></input>
      </div>
      <div className="settings_element">
        <h5 className="settings_title">Не затемнять экран</h5>
        <label className="switch">
          <input type="checkbox" name="doNotTurnOfScreen" onChange={onChange}></input>
          <span className="slider"></span>
        </label>
      </div>
      <div className="settings_element">
        <h5 className="settings_title">Голосовое оповещение</h5>
        <label className="switch">
          <input type="checkbox" name="useVoiceToRemind" onChange={onChange}></input>
          <span className="slider"></span>
        </label>
      </div>
    </div>
  );
};
