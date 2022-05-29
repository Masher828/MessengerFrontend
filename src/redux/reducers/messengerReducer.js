import { ActionTypes } from "../constants/actionTypes";
const conversations = [];

export const getConversations = (state = conversations, action) => {
  switch (action.type) {
    case ActionTypes.GET_CONVERSATIONS:
      return action.payload;
    default:
      return state;
  }
};
