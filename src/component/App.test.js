import React from "react";
import { shallow } from "enzyme";

import App, { UnconnectedApp } from "./App";
import { storeFactory } from "../../Utils/tetsUtils";

let setUp = (state = {}) => {
  const store = storeFactory(state);
  const wrapper = shallow(<App store={store} />)
    .dive()
    .dive();
  // if (state) wrapper.setState(state);
  return wrapper;
};

describe("redux properties", () => {
  it("has access to `success` state", () => {
    const success = true;
    const wrapper = setUp({ success });
    const propsSuccess = wrapper.instance().props.success;
    expect(propsSuccess).toBe(success);
  });
  it("has acces to `secret word` state", () => {
    const secretWord = "party";
    const wrapper = setUp({ secretWord });
    const secretWordProps = wrapper.instance().props.secretWord;
    expect(secretWordProps).toBe(secretWord);
  });
  it("has acces to `guessedWords` state", () => {
    const guessedWords = [{ guessedWord: "train", letterMatchCount: 3 }];
    const wrapper = setUp({ guessedWords });
    const guessedWordsProps = wrapper.instance().props.guessedWords;
    expect(guessedWordsProps).toEqual(guessedWords);
  });
  it("`getSecretWord` action creator is a function on the props", () => {
    const wrapper = setUp();
    const getSecretWordProps = wrapper.instance().props.getSecretWord;
    expect(getSecretWordProps).toBeInstanceOf(Function);
  });
});

test("`getSecretWord` runs an App mount ", () => {
  const getSecretWordMock = jest.fn();
  const props = {
    getSecretWord: getSecretWordMock,
    success: false,
    guessedWords: [],
  };

  const wrapper = shallow(<UnconnectedApp {...props} />);

  wrapper.instance().componentDidMount();

  const getSecretWordCallCount = getSecretWordMock.mock.calls.length;
  //console.log("getSecretWordCallCount", getSecretWordCallCount);

  expect(getSecretWordCallCount).toBe(1);
});
