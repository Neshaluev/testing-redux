import React from "react";
import { shallow } from "enzyme";
import checkPropTypes from "check-prop-types";

import {
  findByTestAttr,
  checkProps,
  storeFactory,
} from "../../../Utils/tetsUtils";
import Input, { UnconnectInput } from "./Input";

const setUp = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store} />)
    .dive()
    .dive();
  //   console.log(wrapper.debug());
  return wrapper;
};
// setUp();
describe("render input component", () => {
  describe("word has not been guessed", () => {
    const initialState = { success: false };
    const wrapper = setUp(initialState);
    it("renders component without error", () => {
      const component = findByTestAttr(wrapper, "component-input");
      expect(component.length).toBe(1);
    });
    it("renders input box", () => {
      const component = findByTestAttr(wrapper, "input-box");
      expect(component.length).toBe(1);
    });
    it("renders submit button", () => {
      const component = findByTestAttr(wrapper, "submit-button");
      expect(component.length).toBe(1);
    });
  });
  describe("word has been guessed", () => {
    it("renders component without error", () => {});
    it("does not render input box", () => {});
    it("does not render sumbit button", () => {});
  });
});

describe("redux props", () => {
  it("has success price of state as props", () => {
    const success = true;
    const wrapper = setUp({ success });
    const successProp = wrapper.instance().props.success;

    expect(successProp).toBe(success);
  });
  it("`guesWord` action creator is a function prop", () => {
    const wrapper = setUp();
    const guessWordProp = wrapper.instance().props.guessWord;

    expect(guessWordProp).toBeInstanceOf(Function);
  });
});

describe(" `guessWord` action creator call ", () => {
  let guessWordMock;
  let wrapper;
  const guessedWord = "train";
  beforeEach(() => {

    guessWordMock = jest.fn();

    const props = {
      guessWord: guessWordMock,
    };

    wrapper = shallow(<UnconnectInput {...props} />);

    wrapper.setState({ currentGuess: guessedWord });

    const submitButton = findByTestAttr(wrapper, "submit-button");
    submitButton.simulate("click", { preventDefault() {} });
    wrapper.update();
  });
  it("calls `guessWord` was called once", () => {
    const guessWordCallCount = guessWordMock.mock.calls.length;

    expect(guessWordCallCount).toBe(1);
  });

  it("calls `guessWord` with input value as argument ", () => {
    const guessWordArg = guessWordMock.mock.calls[0][0];
    expect(guessWordArg).toBe(guessedWord);
  });

  it("input box clears  on sumbit", () => {
    expect(wrapper.state("currentGuess")).toBe("");
  });
});
