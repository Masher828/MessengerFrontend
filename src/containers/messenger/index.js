import React from "react";
import { Grid } from "@mui/material";
import { useEffect } from "react";
import axios from "axios";
import { env } from "../../env_constains";
import { useSelector, useDispatch } from "react-redux";
import { getConversations } from "../../redux/actions/messengerActions";
import ChatMain from "../messenger/chatMain/chatmain";
import Conversation from "../messenger/conversations/conversation";

const Messenger = () => {
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
        dispacth(getConversations(response.data));
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchConversations();
  }, []);

  console.log(conversations);
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
