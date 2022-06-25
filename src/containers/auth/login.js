import React from "react";
import Box from "@mui/material/Box";
import { shadows } from "@mui/system";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setAuthUser } from "../../redux/actions/messengerActions";
import { env } from "../../env_constains";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [isError, updateError] = useState(false);
  const [email, updateEmail] = useState("");
  const [password, updatePassword] = useState("");
  const dispatch = useDispatch();

  const submitHandler = async (e) => {
    e.preventDefault();
    const headers = {
      "Content-Type": "application/json",
    };
    const data = {
      email: email,
      password: password,
    };
    const url = env.baseURL + "/auth/user/signin";
    const response = await axios
      .post(url, data, { headers: headers })
      .then((response) => {
        dispatch(
          setAuthUser(
            response.data.userContext.id,
            response.data.userContext.accessToken
          )
        );
        updateError(false);
        navigate("/messenger");
      })
      .catch((err) => {
        updateError(true);
        console.log(err);
      });
  };

  return (
    <div
      style={{
        backgroundImage: `url("https://papers.co/wallpaper/papers.co-aq61-art-work-pattern-illustration-graffiti-27-wallpaper.jpg")`,
        height: "100vh",
        width: "100vw",
      }}
    >
      <Box
        style={{
          position: "fixed",
          top: "20%",
          left: "25%",
          padding: "1%",
        }}
        sx={{
          width: "50vw",
          height: "55vh",
          backgroundColor: "#36393f",
          boxShadow: "3",
          border: 1,
          borderRadius: "16px",
          borderColor: "#36393f",
        }}
      >
        <Grid container style={{ height: "50vh" }}>
          <Grid item xs={8} style={{ textAlign: "center", color: "white" }}>
            <h1>Welcome Back</h1>
            <form onSubmit={submitHandler}>
              <TextField
                sx={{ width: 1 }}
                style={{ color: "white" }}
                id="outlined-basic"
                label="Email"
                variant="outlined"
                color="success"
                type="email"
                value={email}
                onChange={(e) => updateEmail(e.target.value)}
                focused
              />
              <TextField
                sx={{ width: 1 }}
                style={{ color: "white", marginTop: "5%" }}
                id="outlined-basic"
                label="Password"
                variant="outlined"
                color="success"
                type="password"
                value={password}
                onChange={(e) => updatePassword(e.target.value)}
                focused
              />

              <Button
                variant="contained"
                color="success"
                sx={{ width: 1 }}
                style={{ marginTop: "2%" }}
                type="submit"
              >
                Login
              </Button>
              {isError ? (
                <p style={{ marginTop: "2%", color: "red" }}>
                  Invalid UserId/Password
                </p>
              ) : (
                ""
              )}
            </form>
          </Grid>
          <Grid item xs={4}>
            4
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Login;
