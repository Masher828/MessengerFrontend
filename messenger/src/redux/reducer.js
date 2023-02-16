import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import AuthReducer from "./auth/reducer";
import FriendReducer from "./users/reducer";
import MessengerReducer from "./messenger/reducer";

const reducer = combineReducers({
    auth: AuthReducer,
    friends : FriendReducer,
    messenger: MessengerReducer
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
