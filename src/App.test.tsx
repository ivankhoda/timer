import { render } from "@testing-library/react";
import React from "react";
import { App } from "./App";

const titleWords = { words: "Welcome to timer App" };

describe("App", () => {
  it("Render initial words", () => {
    const { getByTestId } = render(<App>{titleWords}</App>);

    expect(getByTestId("title").textContent).toMatch(titleWords.words);
  });
  it.skip("Check for skip", () => {
    const { getByTestId } = render(<App>{titleWords}</App>);

    expect(getByTestId("title")).toBeNull();
  });
});
