import { ActionTypes } from "../constants/actionTypes";

export const setAuthUser = (userId) => {
  return {
    type: ActionTypes.SET_ROOT_USER,
    payload: userId,
  };
};

export const getConversations = (accessToken) => {
  return {
    type: ActionTypes.GET_CONVERSATIONS,
    payload: accessToken,
  };
};

export const setConversationID = (ID) => {
  return {
    type: ActionTypes.SET_CONVERSATION_ID,
    payload: ID,
  };
};
