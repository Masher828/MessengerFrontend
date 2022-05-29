import { ActionTypes } from "../constants/actionTypes";
const initailUser = {
  id: 1,
  accessToken: "11562233-b5e7-4528-931f-d2fc93549f0f",
};

export const authReducer = (state = initailUser, action) => {
  switch (action.type) {
    case ActionTypes.SET_ROOT_USER:
      return action.payload;
    default:
      return state;
  }
};
