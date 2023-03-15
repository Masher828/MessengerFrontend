import * as ActionConstants from "./action_contants";
import axios from "axios";

const url = "http://localhost:8085/";

const LoginRequest = () => {
    return {
        type: ActionConstants.LOGIN_REQUEST,
    };
};

const LoginRequestSucess = (data) => {
    return {
        type: ActionConstants.LOGIN_REQUEST_SUCCESS,
        data: data,
    };
};

const LoginRequestFailure = (err) => {
    return {
        type: ActionConstants.LOGIN_REQUEST_FAILURE,
        err: err,
    };
};

export const Login = (payload) => (dispatch) => {
    dispatch(LoginRequest());

    axios
        .post(url + "auth/signin", payload)
        .then((resp) => {
            if (resp != null && resp.data != null) {
                dispatch(LoginRequestSucess(resp.data));
            } else {
                dispatch(LoginRequestFailure({}));
            }
        })
        .catch((err) => {
            console.log(err);
            dispatch(LoginRequestFailure(err?.response?.data?.err));
        });
};

const SignupRequest = () => {
    return {
        type: ActionConstants.SIGNUP_REQUEST,
    };
};

const SignupRequestSuccess = (data) => {
    return {
        type: ActionConstants.SIGNUP_REQUEST_SUCCESS,
        data: data,
    };
};

const SignupRequestFailure = (err) => {
    return {
        type: ActionConstants.SIGNUP_REQUEST_FAILURE,
        err: err,
    };
};

export const Signup = (payload) => (dispatch) => {
    dispatch(SignupRequest);

    axios
        .post(url + "auth/signup", payload)
        .then((resp) => {
            if (resp != null) {
                dispatch(SignupRequestSuccess(resp.data));
            } else {
                dispatch(SignupRequestFailure({}));
            }
        })
        .catch((err) => {
            dispatch(SignupRequestFailure(err.response.data.err));
        });
};

const getLoggedInUserRequest = () => {
    return {
        type: ActionConstants.GET_LOGGEDIN_USER_REQUEST
    }
}

const getLoggedInUserSuccess = (data) => {
    return {
        type: ActionConstants.GET_LOGGEDIN_USER_SUCCESS,
        data: data
    }
}

const getLoggedInUserFailure = (err) => {
    return {
        type: ActionConstants.GET_LOGGEDIN_USER_FAILURE,
        err: err
    }
}

export const GetLoggedInUserinfo = () => (dispatch) => {
    dispatch(getLoggedInUserRequest())
    const header = {headers: {"Authorization": `Bearer ${localStorage.getItem("sessionToken")}`}}

    axios
        .get(url + "auth/profile", header)
        .then((resp) => {
            if (resp != null) {
                dispatch(getLoggedInUserSuccess(resp.data));
            } else {
                dispatch(getLoggedInUserFailure({}));
            }
        })
        .catch((err) => {
            dispatch(getLoggedInUserFailure(err?.response?.data?.err));
        });
}

const searchUserRequest = () => {
    return {
        type: ActionConstants.SEARCH_USER_REQUEST
    }
}

const searchUserSuccess = (data) => {
    return {
        type: ActionConstants.SEARCH_USER_SUCCESS,
        data: data
    }
}

const searchUserFailure = (err) => {
    return {
        type: ActionConstants.SEARCH_USER_FAILURE,
        err: err
    }
}

export const SearchUser = (searchQuery) => dispatch => {
  dispatch(searchUserRequest())
    const header = {headers: {"Authorization": `Bearer ${localStorage.getItem("sessionToken")}`}}

  axios
      .get(url + "auth/user/search?searchQuery="+searchQuery, header)
      .then((resp) => {
        if (resp != null) {
          dispatch(searchUserSuccess(resp.data));
        } else {
          dispatch(searchUserFailure({}));
        }
      })
      .catch((err) => {
        dispatch(searchUserFailure(err?.response?.data?.err));
      });
}