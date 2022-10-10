import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import { Badge } from "@mui/material";
import Done from "@mui/icons-material/Done";
import DoneAll from "@mui/icons-material/DoneAll";
import React from "react";

const ListItemComponent = ({
  onClicking,
  index,
  person,
  primary,
  secondary,
  messageCount,
  messageStatus,
}) => {
  return (
    <ListItem
      button
      key={index + person}
      onClick={() => {
        onClicking(true);
      }}>
      <ListItemAvatar>
        <Avatar alt="Profile Picture" src={person} />
      </ListItemAvatar>
      <ListItemText
        primary={primary}
        primaryTypographyProps={{ color: "#0288d1" }}
        secondary={secondary}
      />

      {messageCount > 0 ? (
        <Badge badgeContent={messageCount} color="primary" />
      ) : null}
      {messageStatus === "SENT" ? (
        <Done />
      ) : messageStatus === "DELIVERED" ? (
        <DoneAll />
      ) : messageStatus === "READ" ? (
        <DoneAll color="success" />
      ) : null}
    </ListItem>
  );
};

export default ListItemComponent;
