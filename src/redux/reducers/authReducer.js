import { ActionTypes } from "../constants/actionTypes";
const initailUser = {
  id: 1,
  accessToken: "19944167-c7d0-4af9-b61b-f1a32af2043c",
};

export const authReducer = (state = initailUser, action) => {
  switch (action.type) {
    case ActionTypes.SET_ROOT_USER:
      return action.payload;
    default:
      return state;
  }
};
