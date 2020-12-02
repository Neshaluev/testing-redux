import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr, checkProps } from "../../../Utils/tetsUtils";
import TotalGuesses from "./TotalGuesses";

const defaultProps = { guessCount: 0 };

const setUp = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<TotalGuesses {...setupProps} />);
};

describe("Render TotalGuesses", () => {
  it("renders without erros", () => {
    const wrapper = setUp();
    const component = findByTestAttr(wrapper, "component-total-guesses");
    expect(component.length).toBe(1);
  });
  it("render the number of guesses", () => {
    const guessCount = 8;
    const wrapper = setUp({ guessCount });
    const component = findByTestAttr(wrapper, "component-total-guesses");
    
    expect(component.text()).toContain(guessCount.toString());
  });
});
