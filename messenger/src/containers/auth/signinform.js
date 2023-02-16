import React, { useEffect } from "react";
import {
  Grid,
  FormGroup,
  FormControlLabel,
  Typography,
  Button,
  InputLabel,
  Input,
  FormControl,
  InputAdornment,
  IconButton,
} from "@mui/material";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import {Paper} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import LoadingButton from "@mui/lab/LoadingButton";
import useWindowSize from "../../customhooks/screensizehook";
import { Login } from "../../redux/auth/action_creator";
import { IsEmailValid } from "../../utils/utils";
import {useNavigate} from "react-router-dom";

const SignInForm = ({ setCurrentPage }) => {
  const windowSize = useWindowSize();
  const navigate = useNavigate()
  const [formValue, setFormValue] = React.useState({
    emailId: "",
    password: "",
  });

  const authStore = useSelector(state => state.auth)

  useEffect(()=>{
    if (authStore.isAuthenticated) {
      navigate("/messenger", {replace:true});
    }
  },[authStore.isAuthenticated])
  const [formErrorValue, setFormErrorValue] = React.useState({
    emailId: "",
    password: "",
  });
  const [showPassword, toggleShowPassword] = React.useState(false);

  const onChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
    if (e.target.name === "emailId") {
      if (!IsEmailValid(e.target.value)) {
        setFormErrorValue({
          ...formErrorValue,
          [e.target.name]: "Invalid email address",
        });
      } else {
        setFormErrorValue({ ...formErrorValue, [e.target.name]: "" });
      }
    } else if (e.target.name === "password") {
      if (e.target.value.length < 8 || e.target.value.length > 40) {
        setFormErrorValue({
          ...formErrorValue,
          [e.target.name]: "Password length (8, 40)",
        });
      } else {
        setFormErrorValue({ ...formErrorValue, [e.target.name]: "" });
      }
    }
  };

  const dispatch = useDispatch();

  const authState = useSelector((state) => state.auth);

  const handleSubmit = () => {
    if (formValue.emailId.length === 0 || formValue.password.length === 0) {
      return;
    } else {
      dispatch(
        Login({ emailId: formValue.emailId, password: formValue.password })
      );
      return;
    }
  };

  const getError = (name) => {
    return formErrorValue[name];
  };
  return (
      <Paper
          sx={{
            width: windowSize.width < 400 ? "380px" : "500px",
            margin: "auto",
            borderRadius: "30px",
          }}
          elevation={20}>
    <form onSubmit={handleSubmit}>
      <FormGroup>
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12} mt={10} marginBottom={8}>
            <Typography variant="h3">Sign In</Typography>
          </Grid>
          <Grid item xs={12} marginBottom={8}>
            <FormControl variant="standard" width="100%">
              <InputLabel htmlFor="input-with-icon-adornment">Email</InputLabel>
              <Input
                type="email"
                error={getError("emailId").length > 0}
                required
                name="emailId"
                onChange={onChange}
                width="100%"
                id="input-with-icon-adornment"
                endAdornment={
                  <InputAdornment position="end">
                    <AlternateEmailIcon />
                  </InputAdornment>
                }
              />
              <Typography variant="span" fontSize={10} color="red">
                {getError("emailId")}
              </Typography>
            </FormControl>
          </Grid>
          <Grid item xs={12} marginBottom={3}>
            <FormControl variant="standard" width="100%">
              <InputLabel htmlFor="input-with-icon-adornment">
                Password
              </InputLabel>
              <Input
                width="100%"
                error={getError("password").length > 0}
                name="password"
                type={showPassword ? "text" : "password"}
                id="input-with-icon-adornment"
                onChange={onChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => toggleShowPassword(!showPassword)}>
                      {showPassword ? (
                        <VisibilityIcon />
                      ) : (
                        <VisibilityOffIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
              />
              <Typography variant="span" fontSize={10} color="red">
                {getError("password")}
              </Typography>
            </FormControl>
          </Grid>
          {authState.error ? (
            <Grid item xs={12} marginBottom="30px">
              <FormControlLabel
                control={
                  <Typography color={"red"}>{authState.error}</Typography>
                }
              />
            </Grid>
          ) : null}
          <Grid item xs={12} marginBottom="30px">
            <FormControlLabel
              control={
                <LoadingButton
                  onClick={handleSubmit}
                  loading={authState.isLoading}
                  disabled={
                    getError("emailId").length > 0 ||
                    getError("password").length > 0
                  }
                  variant="contained">
                  Login
                </LoadingButton>
              }
            />
          </Grid>
          <Grid item xs={12} marginBottom="30px">
            <Grid container direction={"row"}>
              <Grid item xs={6}>
                <Button href="/signup" variant="contained">
                  Sign Up
                </Button>
              </Grid>
              <Grid item xs={6}>
                <FormControlLabel
                  control={
                    <Button href="/resetpassword" variant="contained">
                      Reset&nbsp;Passssword
                    </Button>
                  }
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </FormGroup>
    </form>
      </Paper>
  );
};

export default SignInForm;
