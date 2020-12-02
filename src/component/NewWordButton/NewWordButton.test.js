import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr, checkProps } from "../../../Utils/tetsUtils";
import NewWordButton from "./NewWordButton";

const defaultProps = { display: false };

const setUp = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<NewWordButton {...setupProps} />);
};

describe("Render NewWordButton Component", () => {
  it("render without error", () => {
    const wrapper = setUp();
    const component = findByTestAttr(wrapper, "component-new-word-button");
    expect(component.length).toBe(1);
  });
  it("redner no text `display` props is false ", () => {
    const wrapper = setUp({ display: false });
    const component = findByTestAttr(wrapper, "component-new-word-button");
    expect(component.text()).toBe("");
  });

  it("render non-empty text then `display` props is true", () => {
    const wrapper = setUp({ display: true, resetAction: () => {} });
    const component = findByTestAttr(wrapper, "component-new-word-button");

    expect(component.text().length).not.toBe(0);
  });
  it("does not throw warning with expected props", () => {
    const expentedProps = { display: false, resetAction: () => {} };
    checkProps(NewWordButton, expentedProps);
  });
  it("calls `resetAction` prop upon button click", () => {

    const resetActionMock = jest.fn();
    const wrapper = setUp({
      display: true,
      resetAction: resetActionMock,
    });

    const resetButton = findByTestAttr(wrapper, "component-new-word-button");
    resetButton.simulate("click");

    expect(resetActionMock.mock.calls.length).toBe(1);
  });
});
