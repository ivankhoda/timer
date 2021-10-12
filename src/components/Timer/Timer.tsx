import React from "react";
//TODO:fix type of Timer props, or refactor component
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// eslint-disable-next-line @typescript-eslint/no-explicit-any
import "./Timer.style.scss";
export const Timer = () => {
  return (
    <div data-testid="timer" className="timer">
      <section data-testid="section" className="section">
        <div data-testid="field" className="field">
          <p data-testid="field-name">Раунд</p>
          <p data-testid="field-property">1/3</p>
        </div>
      </section>
      <section data-testid="section" className="section">
        <div data-testid="field" className="field">
          <p data-testid="field-name">Работа</p>
          <p data-testid="field-property">03:00</p>
        </div>
      </section>
      <section data-testid="section" className="section">
        <div data-testid="field" className="field">
          <p data-testid="field-name">Отдых</p>
          <p data-testid="field-property">01:00</p>
        </div>
      </section>
      <div data-testid="button-container" className="button-container">
        <button data-testid="start-button">БОКС!</button>
        <button data-testid="cancel-button">Сброс</button>
        <button data-testid="settings-button">Настройки</button>
      </div>
    </div>
  );
};
