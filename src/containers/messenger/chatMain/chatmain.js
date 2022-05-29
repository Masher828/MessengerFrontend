import React from "react";
import { Grid, Avatar, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Chats from "./chats";
import { shadows } from "@mui/system";
import { GrSend } from "react-icons/gr";

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
          <b> Will Smith</b>
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
        <Chats />
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
        <form>
          <input type="text"></input>
          <IconButton aria-label="delete">
            <GrSend />
          </IconButton>
        </form>
      </Grid>
    </div>
  );
};

export default ChatMain;
