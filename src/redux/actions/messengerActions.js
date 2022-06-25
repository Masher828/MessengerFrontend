import { ActionTypes } from "../constants/actionTypes";

export const setAuthUser = (userId, accessToken) => {
  const data = { id: userId, accessToken: accessToken };
  return {
    type: ActionTypes.SET_ROOT_USER,
    payload: data,
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
