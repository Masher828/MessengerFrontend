import * as ActionConstants from "./action_contants";
import axios from "axios";

const url = "http://localhost:8083/";

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

  console.log(payload)
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
