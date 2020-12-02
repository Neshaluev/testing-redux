import { storeFactory } from "../Utils/tetsUtils";
import { actionTypes, guessWord } from "./redux/action";

describe("guessWord action dispatcher", () => {
  const secretWord = "party";
  const unsuccessfulGuess = "train";
  describe("no guessed words", () => {
    let store;
    const initialState = { secretWord };
    beforeEach(() => {
      store = storeFactory(initialState);
    });
    test("updates state correctly for unsuccessful guess", () => {
      store.dispatch(guessWord(unsuccessfulGuess));
      const newState = store.getState();

      const expectedState = {
        ...initialState,
        success: false,
        gaveUp: false,
        userEnter: null,
        guessedWords: [
          {
            guessedWord: unsuccessfulGuess,
            letterMatchCount: 3,
          },
        ],
      };

      expect(newState).toEqual(expectedState);
    });
    test("updates state correctly for successful guess", () => {
      store.dispatch(guessWord(secretWord));
      const newState = store.getState();
      const expectedState = {
        secretWord,
        success: true,
        gaveUp: false,
        userEnter: null,
        guessedWords: [
          {
            guessedWord: secretWord,
            letterMatchCount: 5,
          },
        ],
      };
      expect(newState).toEqual(expectedState);
    });
  });
  describe("some guessed words", () => {
    const guessedWords = [{ guessedWord: "agile", letterMatchCount: 1 }];
    const initialState = { guessedWords, secretWord };
    let store;
    beforeEach(() => {
      store = storeFactory(initialState);
    });
    test("updates state correctly for unsuccessful guess", () => {
      store.dispatch(guessWord(unsuccessfulGuess));
      const newState = store.getState();
      const expectedState = {
        secretWord,
        gaveUp: false,
        success: false,
        userEnter: null,
        guessedWords: [
          ...guessedWords,
          { guessedWord: unsuccessfulGuess, letterMatchCount: 3 },
        ],
      };
      expect(newState).toEqual(expectedState);
    });
    test("updates state correctly for successful guess", () => {
      store.dispatch(guessWord(secretWord));
      const newState = store.getState();
      const expectedState = {
        secretWord,
        success: true,
        gaveUp: false,
        userEnter: null,
        guessedWords: [
          ...guessedWords,
          { guessedWord: secretWord, letterMatchCount: 5 },
        ],
      };
      expect(newState).toEqual(expectedState);
    });
  });
});
