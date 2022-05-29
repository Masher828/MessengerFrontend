import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { getConversations, setConversationID } from "./messengerReducer";

const reducers = combineReducers({
  root_user: authReducer,
  conversations: getConversations,
  conversationID: setConversationID,
});

export default reducers;
