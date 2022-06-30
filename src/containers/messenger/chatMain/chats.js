import React from "react";
import { Grid, Avatar, Box } from "@mui/material";
import "./chatStyle.css";
import { useSelector } from "react-redux";
import Chip from "@mui/material/Chip";
import { memo } from "react";

const Chats = (props) => {
  const user = useSelector((state) => state.root_user);
  const id = user.id;
  //cc started
  const chats = props.data;
  let renderedChats = "";
  let prevdate = "";
  let prevtime = "";
  let prevuser = "";
  if (chats != null && chats != "") {
    // console.log(chats);
    renderedChats = chats
      .slice(0)
      .reverse()
      .map((chat, index, elements) => {
        let next = elements[index + 1];
        let date = new Date(chat.sentOn * 1000);
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        const ts = hours + ":" + minutes;
        const datex = day + "-" + month + "-" + year;
        let renderdate = "";
        let timechatsent = (
          <small style={{ marginLeft: "1%", color: "grey" }}>{ts}</small>
        );
        let linebreak = <br />;
        if (datex != prevdate) {
          prevdate = datex;
          renderdate = (
            <Chip
              color="success"
              label={datex}
              key={datex}
              style={{ margin: "auto" }}
            />
          );
        }
        if (next != undefined) {
          let nextts = new Date(next.sentOn * 1000);
          let currts = new Date(chat.sentOn * 1000);
          let nexttsdata =
            nextts.getDate() +
            "-" +
            nextts.getMonth() +
            "-" +
            nextts.getYear() +
            "-" +
            nextts.getHours() +
            "-" +
            nextts.getMinutes();
          let currtsdata =
            currts.getDate() +
            "-" +
            currts.getMonth() +
            "-" +
            currts.getYear() +
            "-" +
            currts.getHours() +
            "-" +
            currts.getMinutes();
          if (next.userId == chat.userId && nexttsdata == currtsdata) {
            timechatsent = "";
            linebreak = "";
          }
        }
        if (chat.userId == id) {
          return (
            <div key={chat.id} style={{ textAlign: "center" }}>
              {renderdate}
              <Grid
                container
                style={{
                  marginTop: "1vh",
                  justifyContent: "right",
                }}
                key={chat.id}
              >
                <Box
                  style={{
                    marginLeft: "1vw",
                    maxWidth: "60%",
                    justifyContent: "right",
                  }}
                >
                  <Grid
                    item
                    style={{
                      backgroundColor: "#7541ea",
                      color: "white",
                      padding: "0.5vw",
                      minWidth: "5vw",
                    }}
                    sx={{ borderRadius: "16px" }}
                  >
                    {chat.body}
                  </Grid>
                  <div style={{ textAlign: "right", paddingRight: "2%" }}>
                    {timechatsent}
                  </div>
                </Box>
              </Grid>
              {linebreak}
            </div>
          );
        } else {
          return (
            <div key={chat.id} style={{ textAlign: "center" }}>
              {renderdate}
              <Grid container style={{ marginTop: "1vh" }} key={chat.id}>
                <Grid container style={{ width: "auto" }}>
                  <Grid item>
                    <Avatar
                      alt="Remy Sharp"
                      src="https://assets.mycast.io/actor_images/actor-will-smith-79901_large.jpg?1586732333"
                      sx={{ width: 30, height: 30 }}
                    />
                  </Grid>
                  <Box style={{ marginLeft: "1vw", maxWidth: "60%" }}>
                    <Grid
                      item
                      style={{
                        backgroundColor: "#e9eff4",
                        padding: "0.5vw",
                        minWidth: "5vw",
                      }}
                      sx={{ borderRadius: "16px" }}
                    >
                      {chat.body}
                    </Grid>

                    {timechatsent}
                  </Box>
                </Grid>
              </Grid>
              {linebreak}
            </div>
          );
        }
      });
  }

  return (
    <div
      style={{ width: "100%", maxHeight: "70vh", overflowY: "scroll" }}
      className="mainchatWindow"
    >
      {renderedChats}
    </div>
  );
};

export default memo(Chats);
