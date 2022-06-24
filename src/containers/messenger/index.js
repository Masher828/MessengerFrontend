import React from "react";
import { Grid } from "@mui/material";
import ChatMain from "../messenger/chatMain/chatmain";
import Conversation from "../messenger/conversations/conversation";

const Messenger = () => {
  return (
    <div>
      <Grid
        container
        style={{
          height: "7vh",
          backgroundColor: "white",
          color: "black",
        }}
      >
        <h2 style={{ marginLeft: "2%", marginTop: "0.5%" }}>Unis-Buzz</h2>
      </Grid>
      <Grid container style={{ height: "93vh" }}>
        <Grid
          item
          xs={3}
          sx={{ borderRight: 1, borderColor: "white" }}
          style={{ backgroundColor: "#f8f8ff" }}
        >
          <Conversation />
        </Grid>
        <Grid
          item
          xs={7}
          sx={{ borderRight: 1, borderColor: "white" }}
          style={{ backgroundColor: "#f8f8ff" }}
        >
          <ChatMain />
        </Grid>
        <Grid item xs style={{ backgroundColor: "#f8f8ff" }}></Grid>
      </Grid>
    </div>
  );
};

export default Messenger;
