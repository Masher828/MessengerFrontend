import React from "react";
import { Grid, Avatar, Button, Box } from "@mui/material";

const Conversation = () => {
  return (
    <div>
      <Grid container style={{ padding: "2%" }}>
        <Grid
          container
          style={{
            height: "7vh",
            backgroundColor: "white",
            padding: "2%",
            marginTop: "1%",
          }}
          sx={{
            border: 1,
            borderRadius: "16px",
            borderColor: "#f8f8ff",
            boxShadow: 1,
          }}
        >
          <Grid item>
            <Avatar
              alt="Remy Sharp"
              src="https://content.api.news/v3/images/bin/afd1ba903dae014db1e991723b742c41"
              sx={{ width: 30, height: 30 }}
            />
          </Grid>
        </Grid>
        <Grid container>
          <h1> Chats</h1>
        </Grid>
        <Grid container>
          <Grid
            container
            style={{
              height: "7vh",
              backgroundColor: "white",
              padding: "2%",
              marginTop: "1%",
            }}
            sx={{
              border: 1,
              borderRadius: "16px",
              borderColor: "#f8f8ff",
              boxShadow: 1,
            }}
          >
            <Grid item>
              <Avatar
                alt="Remy Sharp"
                src="https://assets.mycast.io/actor_images/actor-will-smith-79901_large.jpg?1586732333"
              />
            </Grid>
            <Box style={{ marginLeft: "1vw", width: "auto" }}>
              <Grid item style={{}}>
                <b> Will Smith</b>
              </Grid>
              <Grid item style={{}}>
                <small style={{ color: "grey" }}> How was the day?</small>
              </Grid>
            </Box>
          </Grid>

          <Grid
            container
            style={{
              height: "7vh",
              backgroundColor: "white",
              padding: "2%",
              marginTop: "1%",
            }}
            sx={{
              border: 1,
              borderRadius: "16px",
              borderColor: "#f8f8ff",
              boxShadow: 1,
            }}
          >
            <Grid item>
              <Avatar
                alt="Remy Sharp"
                src="https://assets.mycast.io/actor_images/actor-will-smith-79901_large.jpg?1586732333"
              />
            </Grid>
            <Box style={{ marginLeft: "1vw", width: "auto" }}>
              <Grid item style={{}}>
                <b> Will Smith</b>
              </Grid>
              <Grid item style={{}}>
                <small style={{ color: "grey" }}> How was the day?</small>
              </Grid>
            </Box>
          </Grid>

          <Grid
            container
            style={{
              height: "7vh",
              backgroundColor: "white",
              padding: "2%",
              marginTop: "1%",
            }}
            sx={{
              border: 1,
              borderRadius: "16px",
              borderColor: "#f8f8ff",
              boxShadow: 1,
            }}
          ></Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Conversation;
