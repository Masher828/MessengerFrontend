import React from "react";
import { Grid, Avatar } from "@mui/material";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Conversation from "./conversation";
import { shadows } from "@mui/system";

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

const ChatMid = () => {
  return (
    <div style={{}}>
      <Grid
        container
        style={{
          height: "auto",
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
        style={{ padding: "2%", backgroundColor: "white", marginTop: "1%" }}
        sx={{
          border: 1,
          borderRadius: "16px",
          borderColor: "#f8f8ff",
        }}
      >
        <Conversation />
      </Grid>
    </div>
  );
};

export default ChatMid;
