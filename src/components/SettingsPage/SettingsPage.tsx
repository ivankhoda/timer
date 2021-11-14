import React from "react";
import { LinkButton } from "../SettingsButton/SettingsButton";
import "./Settings.style.scss";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type Discipline = {
  roundsQuantity: number;
  roundWorkingTime: number;
  disciplineRestTime: number;
};
export enum Disciplines {
  ClassicBoxing = "classicBoxing",
  MMA = "mma",
  AmateurBoxing = "amateurBoxing",
  ProfessionalBoxing = "professionalBoxing",
  Custom = "custom",
}

export const SettingsPage = () => {
  return (
    <div className="settings">
      <h1>Settings</h1>
      <LinkButton linkTo="/" text="Go back" />
      <select className="settings_element">
        Profile
        <option value="">Classic box</option>
        <option value="">MMA</option>
        <option value="">Amateur box</option>
        <option value="">Professional box</option>
        <option value="">Custom</option>
      </select>

      <div className="settings_element">
        <label className="settings_title">Количество раундов</label>
        <p>3</p>
        <div className="incrementRounds-control_buttons">
          <button>+</button>
          <button>-</button>
        </div>
      </div>

      <div className="settings_element">
        <h5 className="settings_title">Настройки времени раундов</h5>
        <input placeholder="3 минуты"></input>
      </div>
      <div className="settings_element">
        <h5 className="settings_title">Настройки времени отдыха раундов</h5>
        <input placeholder="1 минута"></input>
      </div>
      <div className="settings_element">
        <h5 className="settings_title">Сигнал до окончания раунда</h5>
        <input placeholder="10 секунд"></input>
      </div>
      <div className="settings_element">
        <h5 className="settings_title">Время для подготовки</h5>
        <input placeholder="5 секунд"></input>
      </div>
      <div className="settings_element">
        <h5 className="settings_title">Сигнал окончания перерыва</h5>
        <input placeholder="5 секунд"></input>
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
