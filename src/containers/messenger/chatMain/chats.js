import React from "react";
import { Grid, Avatar, Box } from "@mui/material";
import "./chatStyle.css";
import { env } from "../../../env_constains";
import { useSelector } from "react-redux";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const Chats = () => {
  const conversationID = useSelector((state) => state.conversationID);
  const user = useSelector((state) => state.root_user);
  const [chats, updateChats] = useState("");
  const id = user.id;

  const fetchChats = async () => {
    if (conversationID != "") {
      const token = user.accessToken;
      const url =
        env.baseURL +
        "/messages/conversation/" +
        conversationID +
        "/messages?offset=0&limit=100";
      const response = await axios
        .get(url, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          //console.log(response.data.data);
          updateChats(response.data.data);
        })
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {
    fetchChats();
  }, [conversationID]);

  let renderedChats = "";
  if (chats != "") {
    renderedChats = chats.map((chat) => {
      if (chat.userId == id) {
        return (
          <Grid
            container
            style={{
              marginTop: "1vh",
              justifyContent: "right",
            }}
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
                }}
                sx={{ borderRadius: "16px" }}
              >
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content. Lorem ipsum
                may be used as a placeholder before final copy is available.
              </Grid>
              <div style={{ textAlign: "right", paddingRight: "2%" }}>
                <small style={{ marginLeft: "1%", color: "grey" }}>09:32</small>
              </div>
            </Box>
          </Grid>
        );
      } else {
        return (
          <Grid container style={{ marginTop: "1vh" }}>
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
                  }}
                  sx={{ borderRadius: "16px" }}
                >
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document or a typeface without relying on meaningful content.
                  Lorem ipsum may be used as a placeholder before final copy is
                  available.
                </Grid>
                <small style={{ marginLeft: "1%", color: "grey" }}>09:32</small>
              </Box>
            </Grid>
          </Grid>
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

export default Chats;
