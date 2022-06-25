import { ActionTypes } from "../constants/actionTypes";
const initailUser = {
  id: -1,
  accessToken: "",
};

export const authReducer = (state = initailUser, action) => {
  switch (action.type) {
    case ActionTypes.SET_ROOT_USER:
      return action.payload;
    default:
      return state;
  }
};
