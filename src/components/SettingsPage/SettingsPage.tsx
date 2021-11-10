import React from "react";
import { LinkButton } from "../SettingsButton/SettingsButton";

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
    <div>
      <h1>Settings</h1>
      <LinkButton linkTo="/" text="Go back" />
      <select>
        Profile
        <option value="">Classic box</option>
        <option value="">MMA</option>
        <option value="">Amateur box</option>
        <option value="">Professional box</option>
        <option value="">Custom</option>
      </select>

      <div className="incrementRounds-control">
        <label>Количество раундов</label>
        <p>3</p>
        <div className="incrementRounds-control_buttons">
          <button>+</button>
          <button>-</button>
        </div>
      </div>

      <div>
        <h3>Настройки времени раундов</h3>
        <p>03.00</p>
      </div>
      <div>
        <h3>Настройки времени отдыха раундов</h3>
        <p>01.00</p>
      </div>
      <div>
        <h3>Сигнал до окончания раунда</h3>
        <p>00.10</p>
      </div>
      <div>
        <h3>Время для подготовки</h3>
        <p>00.05</p>
      </div>
      <div>
        <h3>Сигнал окончания перерыва</h3>
        <p>00.05</p>
      </div>
      <div>
        <h3>Не затемнять экран</h3>
        <label className="switch">
          <input type="checkbox"></input>
          <span className="slider"></span>
        </label>
      </div>
      <div>
        <h3>Голосовое оповещение</h3>
        <label className="switch">
          <input type="checkbox"></input>
          <span className="slider"></span>
        </label>
      </div>
    </div>
  );
};
