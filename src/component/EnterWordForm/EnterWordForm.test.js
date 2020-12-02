import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr, checkProps } from "../../../Utils/tetsUtils";
import EnterWordForm from "./EnterWordForm";

const defaultProps = { formAction: () => {} };

const setUp = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<EnterWordForm {...setupProps} />);
};

describe("Render EnterWordForm Component", () => {
  it("render without errors ", () => {
    const wrapper = setUp();
    const component = findByTestAttr(wrapper, "component-enter-word-form");
    expect(component.length).toBe(1);
  });
  it("render instructions ", () => {
    const wrapper = setUp();
    const component = findByTestAttr(wrapper, "enter-word-instructions");
    expect(component.length).toBe(1);
  });
  it("renders submit button", () => {
    const wrapper = setUp();
    const submit = findByTestAttr(wrapper, "submit-button");
    expect(submit.length).toBe(1);
  });
  it("renders input box", () => {
    const wrapper = setUp();
    const input = findByTestAttr(wrapper, "enter-word-input");
    expect(input.length).toBe(1);
  });
  test("does not throw warning with expected props", () => {
    const expectedProps = { formAction: () => {} };
    checkProps(EnterWordForm, expectedProps);
  });
});

describe("Submit click action", () => {
  let setUserSecretWordMock;
  let wrapper;
  const userSecretWord = "lunch";
  beforeEach(() => {
    setUserSecretWordMock = jest.fn();
    wrapper = setUp({ formAction: setUserSecretWordMock });

    wrapper.instance().inputBox.current = { value: userSecretWord };

    const submit = findByTestAttr(wrapper, "submit-button");
    submit.simulate("click", { preventDefault() {} });
  });
  test("`setUserSecretWord` was called once", () => {
    const setUserSecretWordCallCount = setUserSecretWordMock.mock.calls.length;
    expect(setUserSecretWordCallCount).toBe(1);
  });
  test("`setUserSecretWord` was called with input value as argument", () => {
    const userSecretWordArg = setUserSecretWordMock.mock.calls[0][0];
    expect(userSecretWordArg).toBe(userSecretWord);
  });
});
