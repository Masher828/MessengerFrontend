import React from "react";
import { Grid, Avatar, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Chats from "./chats";
import { shadows } from "@mui/system";
import { GrSend } from "react-icons/gr";
import { useSelector } from "react-redux";
import { useState } from "react";
import { env } from "../../../env_constains";
//import { useSelector } from "react-redux";
//import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const ChatMain = () => {
  const [chatmsg, setChatmsg] = useState("");
  const conversationID = useSelector((state) => state.conversationID);
  const user = useSelector((state) => state.root_user);
  const [chats, updateChats] = useState("");
  const id = user.id;

  const fetchChats = async () => {
    //console.log("api call was made");
    if (conversationID != "") {
      const token = user.accessToken;
      const url =
        env.baseURL +
        "/messages/conversation/" +
        conversationID.id +
        "/messages?offset=0&limit=100";
      const response = await axios
        .get(url, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          console.log(response.data.data);
          updateChats(response.data.data);
        })
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {
    fetchChats();
  }, [conversationID]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const token = user.accessToken;
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    const data = {
      conversationId: conversationID.id,
      body: chatmsg,
      type: "TEXT",
    };
    console.log(data);
    const url = env.baseURL + "/messages/send";
    const response = await axios
      .post(url, data, {
        headers: headers,
      })
      .then((response) => {
        fetchChats();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Grid
        container
        style={{
          height: "7vh",
          backgroundColor: "white",
          padding: "1%",
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
          <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            variant="dot"
          >
            <Avatar
              alt="Remy Sharp"
              src="https://assets.mycast.io/actor_images/actor-will-smith-79901_large.jpg?1586732333"
              sx={{ width: 30, height: 30 }}
            />
          </StyledBadge>
        </Grid>
        <Grid item xs={3} style={{ paddingLeft: "2%", color: "grey" }}>
          <b> {conversationID.name}</b>
        </Grid>
      </Grid>
      <Grid
        container
        style={{
          padding: "2%",
          backgroundColor: "white",
          marginTop: "1%",
          height: "75vh",
        }}
        sx={{
          border: 1,
          borderRadius: "16px",
          borderColor: "#f8f8ff",
        }}
      >
        <Chats data={chats} />
      </Grid>
      <Grid
        container
        style={{
          padding: "2%",
          backgroundColor: "white",
          marginTop: "1%",
          height: "7vh",
        }}
      >
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            value={chatmsg}
            onChange={(e) => setChatmsg(e.target.value)}
          ></input>
          <IconButton type="submit">
            <GrSend />
          </IconButton>
        </form>
      </Grid>
    </div>
  );
};

export default ChatMain;
