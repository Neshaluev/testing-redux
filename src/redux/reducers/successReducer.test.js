import { actionTypes } from "../action";
import successReducer from "./successReducer";

test("returns default inital state of `false` when no action is passed", () => {
  const newState = successReducer(undefined, {});
  expect(newState).toBe(false);
});
test("returns state of true upon receiving an action of type `CORRECT_GUESS` ", () => {
  const newState = successReducer(undefined, {
    type: actionTypes.CORRECT_GUESS,
  });
  expect(newState).toBe(true);
});
