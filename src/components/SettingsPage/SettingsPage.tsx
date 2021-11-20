import React, { useState } from "react";
import { AMATEUR_BOXING, MMA, PROFESSIONAL_BOXING } from "../../actions/actions";
import { store } from "../../store";
import { secondsToWholeMinutes, selectDiscipline } from "../../utils";
import { LinkButton } from "../SettingsButton/SettingsButton";
import "./Settings.style.scss";

export enum Disciplines {
  MMA = "MMA",
  AmateurBoxing = "Amateur boxing",
  ProfessionalBoxing = "Professional boxing",
  Custom = "Custom",
}

export const SettingsPage = () => {
  const totalRounds = store.getState().setRounds;
  const workTime = store.getState().setWorkingTime;
  const restTime = store.getState().setRestingTime;
  const timeForRemindRoundEnd = store.getState().setRemindTime;
  const timeForRemindRestEnd = store.getState().setReminderTimeForEndOfRest;
  const timeForPrepare = store.getState().setTimeForPrepare;

  const [rounds, setRounds] = useState(totalRounds);
  const [roundTime, setRoundTime] = useState(workTime);
  const [rest, setRest] = useState(restTime);
  const [remindBeforeRoundEnd, setRemindBeforeRoundEnd] = useState(timeForRemindRoundEnd);
  const [remindForRestEnd, setremindForRestEnd] = useState(timeForRemindRestEnd);
  const [prepareTime, setPrepareTime] = useState(timeForPrepare);

  const workingTimeToMinutes = secondsToWholeMinutes(roundTime);

  const onSelect = (e: React.FormEvent<HTMLSelectElement>) => {
    const discipline = e.currentTarget.value;

    store.dispatch(selectDiscipline(discipline));
    console.log(store.getState().setRounds);
    console.log(totalRounds);
    setRounds(store.getState().setRounds);
    setRoundTime(roundTime);
    setRest(rest);
    setRemindBeforeRoundEnd(timeForRemindRoundEnd);
    setremindForRestEnd(timeForRemindRestEnd);
    setPrepareTime(timeForPrepare);
  };

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value, e.target, e.currentTarget.name);
    console.log(workingTimeToMinutes);
  };
  return (
    <div className="settings">
      <h1>Settings</h1>
      <LinkButton linkTo="/" text="Go back" />
      <select className="settings_element" onChange={onSelect}>
        Profile
        <option value="">Custom</option>
        <option value={MMA}>{Disciplines.MMA}</option>
        <option value={AMATEUR_BOXING}>{Disciplines.AmateurBoxing}</option>
        <option value={PROFESSIONAL_BOXING}>{Disciplines.ProfessionalBoxing}</option>
      </select>

      <div className="settings_element">
        <h5 className="settings_title">Настройки количества раундов</h5>
        <input type="number" min="0" max="99" name="roundsTime" onChange={onChange} defaultValue={rounds}></input>
      </div>

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
        <input type="number" min="0" max="180" name="restTime" onChange={onChange} defaultValue={rest}></input>
      </div>
      <div className="settings_element">
        <h5 className="settings_title">Сигнал до окончания раунда(сек)</h5>
        <input
          type="number"
          min="0"
          max="60"
          defaultValue={remindBeforeRoundEnd}
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
          defaultValue={prepareTime}
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
          defaultValue={remindForRestEnd}
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
