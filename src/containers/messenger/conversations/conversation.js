import React from "react";
import { Grid, Avatar, Box, Button, Typography } from "@mui/material";
import axios from "axios";
import { useEffect } from "react";
import { env } from "../../../env_constains";
import { useSelector, useDispatch } from "react-redux";
import {
  getConversations,
  setConversationID,
} from "../../../redux/actions/messengerActions";
import AddUserModal from "./adduserModal";

const Conversation = () => {
  const conversations = useSelector((state) => state.conversations);
  const user = useSelector((state) => state.root_user);
  const dispacth = useDispatch();

  const fetchConversations = async () => {
    const token = user.accessToken;
    const id = user.id;
    const url = env.baseURL + "/messages/conversation";
    const response = await axios
      .get(url, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        dispacth(getConversations(response.data.conversation));
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchConversations();
  }, []);

  const updateConversationID = (id, name) => {
    const data = { id: id, name: name };
    dispacth(setConversationID(data));
  };

  const convo = conversations.map((convo) => {
    console.log("convo rendered");
    return (
      <Grid
        container
        style={{
          height: "7vh",
          backgroundColor: "white",
          padding: "2%",
          marginTop: "1%",
          cursor: "pointer",
        }}
        sx={{
          border: 1,
          borderRadius: "16px",
          borderColor: "#f8f8ff",
          boxShadow: 1,
        }}
        key={convo.conversation[0].id}
        onClick={() =>
          updateConversationID(
            convo.conversation[0].id,
            convo.conversation[0].name
          )
        }
      >
        <Grid item>
          <Avatar
            alt="profile"
            src="https://assets.mycast.io/actor_images/actor-will-smith-79901_large.jpg?1586732333"
          />
        </Grid>
        <Box style={{ marginLeft: "1vw", width: "auto" }}>
          <Grid item style={{}}>
            <b>{convo.conversation[0].name}</b>
          </Grid>
          <Grid item style={{}}>
            <small style={{ color: "grey" }}> How was the day?</small>
          </Grid>
        </Box>
      </Grid>
    );
  });

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
          <AddUserModal fetchConvo={fetchConversations} />
        </Grid>
        <Grid container>{convo}</Grid>
      </Grid>
    </div>
  );
};

export default Conversation;
