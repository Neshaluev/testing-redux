import { combineReducers } from "redux";

import success from "./successReducer";
import guessedWords from "./guessedWordReducer";
import secretWord from "./secretWordReducer";
import gaveUp from "./gaveUpReducer";
import userEnter from "./userEnterReducer";

export default combineReducers({
  success,
  guessedWords,
  secretWord,
  gaveUp,
  userEnter,
});
