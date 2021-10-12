import { render } from "@testing-library/react";
import React from "react";
import { App } from "./App";

const titleWords = { words: "Welcome to timer App" };

describe("App", () => {
  it("App renders title words", () => {
    const { getByTestId } = render(<App>{titleWords}</App>);

    expect(getByTestId("title").textContent).toMatch(titleWords.words);
  });
  it("App renders timer component", () => {
    const { getByTestId } = render(<App>{titleWords}</App>);

    expect(getByTestId("timer")).not.toBeNull();
  });
});
