import { actionTypes } from "../action";
import userEnterReducer from "./userEnterReducer";

test("returns default initial state of `null` when no action is passed", () => {
  const newState = userEnterReducer(undefined, {});
  expect(newState).toBeNull();
});
test('returns state of "inProgress" upon receiving an action of type `USER_ENTERING`', () => {
  const newState = userEnterReducer(undefined, {
    type: actionTypes.USER_ENTERING,
  });
  expect(newState).toBe("inProgress");
});
test('returns state of "done" upon receiving an action of type `USER_ENTERED`', () => {
  const newState = userEnterReducer("inProgress", {
    type: actionTypes.USER_ENTERED,
  });
  expect(newState).toBe("done");
});
test("returns state of `null` upon receiving an action of type `RESET_GAME`", () => {
  const newState = userEnterReducer("done", { type: actionTypes.RESET_GAME });
  expect(newState).toBeNull();
});
