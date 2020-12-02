import moxios from "moxios";

import { storeFactory } from "../../../Utils/tetsUtils";
import { getSecretWord } from "./index";

describe("getSecretWord action create", () => {
  beforeEach(() => {
    moxios.install();
  });
  beforeAll(() => {
    moxios.uninstall();
  });
  it("adds response word to state", () => {
    const secretWord = "party";
    const store = storeFactory();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: secretWord,
      });
    });

    return store.dispatch(getSecretWord()).then(() => {
      const newState = store.getState();
      expect(newState.secretWord).toBe(secretWord);
    });
  });
});
