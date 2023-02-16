import * as ActionConstants from "./action_contants";
const initState = {
  isLoading: false,
  error: "",
  isAuthenticated: localStorage.getItem("sessionToken") !== 'undefined' && localStorage.getItem("sessionToken") !== null,
  userDetails: localStorage.getItem("userDetails"),
};

const AuthReducer = (state = initState, action) => {
  switch (action.type) {
    case ActionConstants.LOGIN_REQUEST:
      return { ...state, isLoading: true, error: null, success: false };

    case ActionConstants.LOGIN_REQUEST_SUCCESS:
      localStorage.setItem("sessionToken", action.data.data.accessToken)
      return {
        ...state,
        isLoading: false,
        isAuthenticated:true,
        userDetails: action.data.data,
        success: action.data.success,
      };

    case ActionConstants.LOGIN_REQUEST_FAILURE:
      return { ...state, isLoading: false, error: action.err };

    case ActionConstants.SIGNUP_REQUEST:
      return { ...state, isLoading: true, error: null, success: false };

    case ActionConstants.SIGNUP_REQUEST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        userDetails: action.data,
        success: action.data.success,
      };

    case ActionConstants.SIGNUP_REQUEST_FAILURE:
      return { ...state, isLoading: false, error: action.err };

    default:
      return state;
  }
};

export default AuthReducer;
