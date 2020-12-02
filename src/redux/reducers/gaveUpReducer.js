import { actionTypes } from "../action";

export default (state = false, action) => {
  switch (action.type) {
    case actionTypes.GIVE_UP:
      return true;
    default:
      return state;
  }
};
