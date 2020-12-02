import { actionTypes } from "../action";
import guessedWordReducer from "./guessedWordReducer";

test("return state of `[]` upon receving  am action of type  `RESET_GAME` ", () => {
  const initialState = [{ guessedWord: "train", letterMatchCount: 3 }];
  const newState = guessedWordReducer(initialState, {
    type: actionTypes.RESET_GAME,
  });
  expect(newState).toEqual([]);
});
