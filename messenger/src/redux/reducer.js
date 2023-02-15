import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import AuthReducer from "./auth/reducer";

const reducer = combineReducers({
    auth: AuthReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
