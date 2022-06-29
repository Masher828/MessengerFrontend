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
import { useState } from "react";
import { BiLogOutCircle } from "react-icons/bi";
import IconButton from "@mui/material/IconButton";
import { setAuthUser } from "../../../redux/actions/messengerActions";
import { BroadcastChannel } from "broadcast-channel";
import "./style.css";

const converStyle = {
  height: "8vh",
  backgroundColor: "white",
  padding: "2%",
  marginTop: "1%",
  cursor: "pointer",
};

const converStylesx = {
  border: 1,
  borderRadius: "16px",
  borderColor: "#f8f8ff",
  boxShadow: 1,
};

const converStyleselected = {
  height: "8vh",
  backgroundColor: "#30323d",
  color: "white",
  padding: "2%",
  marginTop: "1%",
  cursor: "pointer",
};

const converStylesxselected = {
  border: 1,
  borderRadius: "16px",
  borderColor: "#30323d",
  boxShadow: 1,
};

const Conversation = () => {
  const [selectedConvo, updateSelectedConvo] = useState("");

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
        // console.log(response);
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
    updateSelectedConvo(id);
  };

  const logout = () => {
    const channel = new BroadcastChannel("uniscast");
    channel.postMessage("Logout proc");
    dispacth(setAuthUser(-1, ""));
  };

  let convo = "";
  if (conversations == null) {
    convo = "";
  } else {
    convo = conversations.map((convo) => {
      //console.log(convo);
      let style = "";
      let stylesx = "";
      if (convo.conversation[0].id == selectedConvo) {
        style = converStyleselected;
        stylesx = converStylesxselected;
      } else {
        style = converStyle;
        stylesx = converStylesx;
      }
      return (
        <Grid
          container
          style={style}
          sx={stylesx}
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
              <b>{convo.name}</b>
            </Grid>
            <Grid item style={{}}>
              <small style={{ color: "grey" }}>How was the day?</small>
            </Grid>
          </Box>
        </Grid>
      );
    });
  }

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
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
            onClick={logout}
          >
            <BiLogOutCircle />
          </IconButton>
        </Grid>
        <Grid container>
          <h1> Chats</h1>
          <AddUserModal fetchConvo={fetchConversations} />
        </Grid>
        <Grid
          container
          style={{ overflowY: "scroll", maxHeight: "70vh" }}
          className="example"
        >
          {convo}
        </Grid>
      </Grid>
    </div>
  );
};

export default Conversation;
