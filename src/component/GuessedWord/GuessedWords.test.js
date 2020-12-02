import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr, checkProps } from "../../../Utils/tetsUtils";

import GuessedWords from "./GuessedWords";

const defaultProps = {
  guessedWords: [{ guessedWord: "train", letterMatchCount: 3 }],
};

const setUp = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };

  return shallow(<GuessedWords {...setupProps} />);
};

test("does not throw  warning with expented props ", () => {
  checkProps(GuessedWords, defaultProps);
});

describe("if there are no words guessed", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setUp({ guessedWords: [] });
  });
  it("renders wihout errors", () => {
    const component = findByTestAttr(wrapper, "component-guessed-words");
    expect(component.length).toBe(1);
  });
  it("renders instructions to guess a word", () => {
    const instructions = findByTestAttr(wrapper, "guess-instructions");
    expect(instructions.text().length).not.toBe(0);
  });
});

describe("if there are word guessed", () => {
  let guessedWords = [
    { guessedWord: "train", letterMatchCount: 3 },
    { guessedWord: "agile", letterMatchCount: 1 },
    { guessedWord: "party", letterMatchCount: 5 },
  ];
  let wrapper;
  beforeEach(() => {
    wrapper = setUp({ guessedWords });
  });
  it("renders without errors", () => {
    const component = findByTestAttr(wrapper, "component-guessed-words");
    expect(component.length).toBe(1);
  });

  it('redners "guessed word" section', () => {
    const guessedWordsNode = findByTestAttr(wrapper, "guessed-words");
    expect(guessedWordsNode.length).toBe(1);
  });
  it("current number of guessed words", () => {
    const guessedWordsNodes = findByTestAttr(wrapper, "guessed-word");
    expect(guessedWordsNodes.length).toBe(guessedWords.length);
  });
});
