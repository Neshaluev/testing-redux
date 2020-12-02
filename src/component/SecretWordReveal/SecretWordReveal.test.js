import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr, checkProps } from "../../../Utils/tetsUtils";
import SecretWordReveal from "./SecretWordReveal";

const secretWord = "party";
const defaultProps = { display: false, secretWord };

const setUp = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<SecretWordReveal {...setupProps} />);
};

describe("Render SecretWordReveal Component", () => {
  it("render without error ", () => {
    const wrapper = setUp();
    const component = findByTestAttr(wrapper, "component-secret-word-reveal");
    expect(component.length).toBe(1);
  });
  it("renders no text when `display` prop is false ", () => {
    const wrapper = setUp({ display: false });
    const component = findByTestAttr(wrapper, "component-secret-word-reveal");
    expect(component.text()).toBe("");
  });
  it("redners message conatining secret word then `display` prop is true", () => {
    const wrapper = setUp({ display: true });
    const message = findByTestAttr(wrapper, "reveal-message");
    expect(message.text()).toContain(secretWord);
  });
  it("does not throw warnig with expect props", () => {
    const expectedProps = { display: false, secretWord };
    checkProps(SecretWordReveal, expectedProps);
  });
});
