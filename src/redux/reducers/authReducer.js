import { ActionTypes } from "../constants/actionTypes";
const initailUser = {
  id: 1,
  accessToken: "7db2dbd3-0cfa-4beb-acf4-8df480b42258",
};

export const authReducer = (state = initailUser, action) => {
  switch (action.type) {
    case ActionTypes.SET_ROOT_USER:
      return action.payload;
    default:
      return state;
  }
};
