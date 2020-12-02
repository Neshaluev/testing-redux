import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr, checkProps } from "../../../Utils/tetsUtils";
import EnterWordButton from "./EnterWordButton";

const defaultProps = { display: true };

const setUp = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<EnterWordButton {...setupProps} />);
};

describe("Render EnterWordButton Component", () => {
  it("render without error", () => {
    const wrapper = setUp();
    const component = findByTestAttr(wrapper, "component-enter-word-button");
    expect(component.length).toBe(1);
  });
  it("renders no text when `display` prop is false", () => {
    const wrapper = setUp({ display: false });
    const component = findByTestAttr(wrapper, "component-enter-word-button");
    expect(component.text()).toBe("");
  });
  it("renders non-empty text when `display` prop is true", () => {
    const wrapper = setUp({ display: true, buttonAction: () => {} });
    const component = findByTestAttr(wrapper, "component-enter-word-button");
    expect(component.text().length).not.toBe(0);
  });
  it("does not throw warnig with expeted props", () => {
    const expentedProps = { display: false };
    checkProps(EnterWordButton, expentedProps);
  });
  it("calls `buttonAction` props upon button click", () => {
    const buttonActionMock = jest.fn();
    const wrapper = setUp({
      display: true,
      buttonAction: buttonActionMock,
    });
    const button = findByTestAttr(wrapper, "component-enter-word-button");
    button.simulate("click");
    expect(buttonActionMock.mock.calls.length).toBe(1);
  });
});
