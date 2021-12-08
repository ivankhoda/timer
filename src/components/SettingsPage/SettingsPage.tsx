import NoSleep from "nosleep.js";
import React, { useState } from "react";
import { AMATEUR_BOXING, MMA, PROFESSIONAL_BOXING } from "../../actions/actions";
import { store } from "../../store";
import {
  minutesToSeconds,
  secondsToWholeMinutes,
  selectDiscipline,
  setPreparationTime,
  setRemindTime,
  setRestTime,
  setTimeRemindRestEnd,
  setWorkTime,
  set_rounds,
} from "../../utils";
import { DisciplinesSelect } from "../DisciplinesSelect/DisciplineSelect";
import { LinkButton } from "../SettingsButton/SettingsButton";
import { SettingsElement } from "../SettingsElement/SettingElement";
import "./Settings.style.scss";

export enum Disciplines {
  MMA = "MMA",
  AmateurBoxing = "Amateur boxing",
  ProfessionalBoxing = "Professional boxing",
  Custom = "Custom",
}
const disciplines = [
  { optionName: Disciplines.Custom, optionValue: Disciplines.Custom },
  { optionName: Disciplines.MMA, optionValue: MMA },
  { optionName: Disciplines.AmateurBoxing, optionValue: AMATEUR_BOXING },
  { optionName: Disciplines.ProfessionalBoxing, optionValue: PROFESSIONAL_BOXING },
];

export const SettingsPage = () => {
  const totalRounds = store.getState().setRounds;
  const workTime = store.getState().setWorkingTime;
  const restTime = store.getState().setRestingTime;
  const timeForRemindRoundEnd = store.getState().setRemindTime;
  const timeForRemindRestEnd = store.getState().setReminderTimeForEndOfRest;
  const timeForPrepare = store.getState().setTimeForPrepare;

  const workingTimeToMinutes = secondsToWholeMinutes(workTime);

  const [rounds, setRounds] = useState(totalRounds);
  const [roundTime, setRoundTime] = useState(workingTimeToMinutes);
  const [rest, setRest] = useState(restTime);
  const [remindBeforeRoundEnd, setRemindBeforeRoundEnd] = useState(timeForRemindRoundEnd);
  const [remindForRestEnd, setremindForRestEnd] = useState(timeForRemindRestEnd);
  const [prepareTime, setPrepareTime] = useState(timeForPrepare);

  const noSleep = new NoSleep();

  const onSelect = (e: React.FormEvent<HTMLSelectElement>) => {
    const discipline = e.currentTarget.value;
    store.dispatch(selectDiscipline(discipline));
    setRounds(store.getState().setRounds);
    setRoundTime(secondsToWholeMinutes(store.getState().setWorkingTime));
    setRest(store.getState().setRestingTime);
    setRemindBeforeRoundEnd(timeForRemindRoundEnd);
    setremindForRestEnd(store.getState().setReminderTimeForEndOfRest);
    setPrepareTime(store.getState().setTimeForPrepare);
  };

  const onRoundsChange = (e: React.FormEvent<HTMLInputElement>) => {
    const value = parseInt(e.currentTarget.value);

    store.dispatch(set_rounds(value));
    setRounds(value);
  };
  const onRoundTimeChange = (e: React.FormEvent<HTMLInputElement>) => {
    const value = parseInt(e.currentTarget.value);

    const seconds = minutesToSeconds(value);
    store.dispatch(setWorkTime(seconds));
    setRoundTime(value);
  };
  const onRestTimeChange = (e: React.FormEvent<HTMLInputElement>) => {
    const value = parseInt(e.currentTarget.value);
    store.dispatch(setRestTime(value));
    setRest(value);
  };
  const onRemindTimeChange = (e: React.FormEvent<HTMLInputElement>) => {
    const value = parseInt(e.currentTarget.value);
    store.dispatch(setRemindTime(value));
    setRemindBeforeRoundEnd(store.getState().setRemindTime);
  };

  const onTimeForPrepareChange = (e: React.FormEvent<HTMLInputElement>) => {
    const value = parseInt(e.currentTarget.value);
    store.dispatch(setPreparationTime(value));
    setPrepareTime(value);
  };
  const onTimeRemindRestEndChange = (e: React.FormEvent<HTMLInputElement>) => {
    const value = parseInt(e.currentTarget.value);
    store.dispatch(setTimeRemindRestEnd(value));
    setremindForRestEnd(store.getState().setReminderTimeForEndOfRest);
  };

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget;
    console.log(value, "onChange value");
  };
  const onNoSleep = () => {
    noSleep.enable();
  };

  return (
    <div className="settings">
      <h1>Настройки</h1>
      <LinkButton linkTo="/" text="Назад" />

      <DisciplinesSelect name="Profile" options={disciplines} onSelect={onSelect} />
      <SettingsElement
        title="Настройки количества раундов"
        type="number"
        min="0"
        max="99"
        name={"rounds"}
        onChange={onRoundsChange}
        value={rounds}
      />
      <SettingsElement
        title="Настройки времени раундов(мин)"
        type="number"
        min="0"
        max="99"
        name={"roundsTime"}
        onChange={onRoundTimeChange}
        value={roundTime}
      />
      <SettingsElement
        title="Настройки времени отдыха(сек)"
        type="number"
        min="0"
        max="180"
        name={"restTime"}
        onChange={onRestTimeChange}
        value={rest}
      />
      <SettingsElement
        title="Сигнал до окончания раунда(сек)"
        type="number"
        min="0"
        max="60"
        name={"remindOfRoundsEnd"}
        onChange={onRemindTimeChange}
        value={remindBeforeRoundEnd}
      />
      <SettingsElement
        title="Время для подготовки перед первым раундом(сек)"
        type="number"
        min="0"
        max="60"
        name={"timeForFirstRoundPrepare"}
        onChange={onTimeForPrepareChange}
        value={prepareTime}
      />
      <SettingsElement
        title="Сигнал до окончания перерыва(сек)"
        type="number"
        min="0"
        max="60"
        name={"remindRestEnd"}
        onChange={onTimeRemindRestEndChange}
        value={remindForRestEnd}
      />
      {/* <SettingsElement title="Не затемнять экран" type="checkbox" name={"doNotTurnOfScreen"} onChange={onNoSleep} />
      <SettingsElement title="Голосовое оповещение" type="checkbox" name={"useVoiceToRemind"} onChange={onChange} /> */}
    </div>
  );
};
