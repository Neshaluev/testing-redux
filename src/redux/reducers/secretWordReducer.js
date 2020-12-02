import { actionTypes } from "../action";
const initlaState = "train";

export default (state = initlaState, action) => {
  switch (action.type) {
    case actionTypes.SET_SECRET_WORD:
      return action.payload;

    default:
      return state;
  }
};
