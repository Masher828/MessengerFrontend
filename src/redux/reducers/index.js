import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { getConversations } from "./messengerReducer";

const reducers = combineReducers({
  root_user: authReducer,
  conversations: getConversations,
});

export default reducers;
