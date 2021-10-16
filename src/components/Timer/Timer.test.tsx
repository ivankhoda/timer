import { render } from "@testing-library/react";
import React from "react";
import { Timer } from "./Timer";

describe("Timer", () => {
  const defaultValues = {
    initialWorkingTime: "03:00",
    currentRound: 1,
    totalRounds: 3,
    restTime: "01:00",
  };

  it("Section with timer", () => {
    const { getByTestId } = render(<Timer />);

    expect(getByTestId("timer")).not.toBeNull();
  });
  it("Contains three section with content", () => {
    const { getAllByTestId } = render(<Timer />);

    expect(getAllByTestId("section")).toHaveLength(3);
  });
  it("Has fields for displaying rounds, working time, and rest time", () => {
    const { getAllByTestId } = render(<Timer />);

    expect(getAllByTestId("field")).toHaveLength(3);
  });
  it("Has buttons container", () => {
    const { getByTestId } = render(<Timer />);

    expect(getByTestId("button-container")).not.toBeNull();
  });
  it("Has start-stop button", () => {
    const { getByTestId } = render(<Timer />);

    expect(getByTestId("start-button")).not.toBeNull();
  });
  it("Has cancel timer button", () => {
    const { getByTestId } = render(<Timer />);

    expect(getByTestId("cancel-button")).not.toBeNull();
  });
  it("Has settings button", () => {
    const { getByTestId } = render(<Timer />);
    expect(getByTestId("settings-button")).not.toBeNull();
  });
  it("Has field name and field property", () => {
    const { getAllByTestId } = render(<Timer />);
    expect(getAllByTestId("field-name")).toHaveLength(3);
    expect(getAllByTestId("field-property")).toHaveLength(3);
  });
  it("Timer renders rounds values, working and rest time", () => {
    const { getAllByTestId } = render(<Timer />);

    expect(getAllByTestId("field-property")[1]).not.toBeNull();
    expect(getAllByTestId("field-property")[1]).toEqual(defaultValues.initialWorkingTime);
    expect(getAllByTestId("field-property")[2]).not.toBeNull();
    expect(getAllByTestId("field-property")[2]).toEqual(defaultValues.currentRound);
    // expect(totalRounds).not.toBeNull();
    // expect(totalRounds).toEqual(defaultValues.totalRounds);
  });
});
