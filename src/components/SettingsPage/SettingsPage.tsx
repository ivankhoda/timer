import React, { useState } from "react";
import { AMATEUR_BOXING, MMA, PROFESSIONAL_BOXING } from "../../actions/actions";
import { store } from "../../store";
import { secondsToWholeMinutes, selectDiscipline } from "../../utils";
import { DisciplinesSelect } from "../DisciplinesSelect/DisciplineSelect";
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

  // const [discipline, setDiscipline] = useState("Custom");

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
    setRounds(store.getState().setRounds);
    setRoundTime(store.getState().setWorkingTime);
    setRest(store.getState().setRestingTime);
    setRemindBeforeRoundEnd(timeForRemindRoundEnd);
    setremindForRestEnd(store.getState().setRemindTime);
    setPrepareTime(store.getState().setTimeForPrepare);
  };

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    console.log(rounds, "before update");
    console.log(e.currentTarget.value, e.target, e.currentTarget.name);
    console.log(workingTimeToMinutes);
    const val = parseInt(e.currentTarget.value);
    setRounds(val);
    console.log(rounds, "after update");
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
      <DisciplinesSelect
        name="Profile"
        options={[{ optionName: "Sport", optionValue: "Bigsport" }]}
        onSelect={onSelect}
      />
      <div className="settings_element">
        <h5 className="settings_title">Настройки количества раундов</h5>
        <input type="number" min="0" max="99" name="roundsTime" onChange={onChange} value={rounds}></input>
      </div>

      <div className="settings_element">
        <h5 className="settings_title">Настройки времени раундов(мин)</h5>
        <input
          type="number"
          min="0"
          max="99"
          name="roundsTime"
          onChange={onChange}
          value={workingTimeToMinutes}
        ></input>
      </div>
      <div className="settings_element">
        <h5 className="settings_title">Настройки времени отдыха(сек)</h5>
        <input type="number" min="0" max="180" name="restTime" onChange={onChange} value={rest}></input>
      </div>
      <div className="settings_element">
        <h5 className="settings_title">Сигнал до окончания раунда(сек)</h5>
        <input
          type="number"
          min="0"
          max="60"
          value={remindBeforeRoundEnd}
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
          value={prepareTime}
          name="timeForFirstRoundPrepare"
          onChange={onChange}
        ></input>
      </div>
      <div className="settings_element">
        <h5 className="settings_title">Сигнал до окончания перерыва(сек)</h5>
        <input type="number" min="0" max="60" value={remindForRestEnd} name="remindRestEnd" onChange={onChange}></input>
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
