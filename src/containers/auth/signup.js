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
import AppBar from "../Landing/appbar";

const Signup = () => {
  const navigate = useNavigate();
  const [isError, updateError] = useState(false);
  const [email, updateEmail] = useState("");
  const [password, updatePassword] = useState("");
  const [name, updateName] = useState("");
  const [contact, updateContact] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    const headers = {
      "Content-Type": "application/json",
    };
    const data = {
      name: name,
      email: email,
      password: password,
      contact: contact,
    };
    const url = env.baseURL + "/auth/user/signup";
    const response = await axios
      .post(url, data, { headers: headers })
      .then((response) => {
        console.log("Signed up");
        updateError(false);
        navigate("/login");
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
      <AppBar />
      <Box
        style={{
          position: "fixed",
          top: "15%",
          left: "25%",
          padding: "1%",
        }}
        sx={{
          width: "50vw",
          height: "65vh",
          backgroundColor: "#36393f",
          boxShadow: "3",
          border: 1,
          borderRadius: "16px",
          borderColor: "#36393f",
        }}
      >
        <Grid container style={{ height: "50vh" }}>
          <Grid item xs={8} style={{ textAlign: "center", color: "white" }}>
            <h1>Welcome to the Family</h1>
            <form onSubmit={submitHandler}>
              <TextField
                required
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
                required
                sx={{ width: 1 }}
                style={{ color: "white", marginTop: "5%" }}
                id="outlined-basic"
                label="Name"
                variant="outlined"
                color="success"
                type="text"
                value={name}
                onChange={(e) => updateName(e.target.value)}
                focused
              />
              <TextField
                required
                sx={{ width: 1 }}
                style={{ color: "white", marginTop: "5%" }}
                id="outlined-basic"
                label="Contact"
                variant="outlined"
                color="success"
                type="number"
                value={contact}
                onChange={(e) => updateContact(e.target.value)}
                focused
              />
              <TextField
                required
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
                Sign UP
              </Button>
              {isError ? (
                <p style={{ marginTop: "2%", color: "red" }}>
                  Issue while Signing up.
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

export default Signup;
