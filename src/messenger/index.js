import React from "react";
import { Grid } from "@mui/material";
import ChatMid from "./chatmid";
import ChatLeft from "./chatLeft";

const Messenger = () => {
  return (
    <div>
      <Grid
        container
        style={{ height: "7vh", backgroundColor: "white" }}
      ></Grid>
      <Grid container style={{ height: "93vh" }}>
        <Grid
          item
          xs={3}
          sx={{ borderRight: 1, borderColor: "white" }}
          style={{ backgroundColor: "#f8f8ff" }}
        >
          <ChatLeft />
        </Grid>
        <Grid
          item
          xs={7}
          sx={{ borderRight: 1, borderColor: "white" }}
          style={{ backgroundColor: "#f8f8ff" }}
        >
          <ChatMid />
        </Grid>
        <Grid item xs style={{ backgroundColor: "#f8f8ff" }}></Grid>
      </Grid>
    </div>
  );
};

export default Messenger;
