import React from "react";
import { Grid, Avatar, Box } from "@mui/material";
import "./chatStyle.css";

const Chats = () => {
  return (
    <div
      style={{ width: "100%", maxHeight: "70vh", overflowY: "scroll" }}
      className="mainchatWindow"
    >
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
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may
              be used as a placeholder before final copy is available.
            </Grid>
            <small style={{ marginLeft: "1%", color: "grey" }}>09:32</small>
          </Box>
        </Grid>
      </Grid>

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
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content. Lorem ipsum may be
            used as a placeholder before final copy is available.
          </Grid>
          <div style={{ textAlign: "right", paddingRight: "2%" }}>
            <small style={{ marginLeft: "1%", color: "grey" }}>09:32</small>
          </div>
        </Box>
      </Grid>

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
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content. Lorem ipsum may be
            used as a placeholder before final copy is available.
          </Grid>
          <div style={{ textAlign: "right", paddingRight: "2%" }}>
            <small style={{ marginLeft: "1%", color: "grey" }}>09:32</small>
          </div>
        </Box>
      </Grid>

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
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content. Lorem ipsum may be
            used as a placeholder before final copy is available.
          </Grid>
          <div style={{ textAlign: "right", paddingRight: "2%" }}>
            <small style={{ marginLeft: "1%", color: "grey" }}>09:32</small>
          </div>
        </Box>
      </Grid>

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
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content. Lorem ipsum may be
            used as a placeholder before final copy is available.
          </Grid>
          <div style={{ textAlign: "right", paddingRight: "2%" }}>
            <small style={{ marginLeft: "1%", color: "grey" }}>09:32</small>
          </div>
        </Box>
      </Grid>

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
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content. Lorem ipsum may be
            used as a placeholder before final copy is available.
          </Grid>
          <div style={{ textAlign: "right", paddingRight: "2%" }}>
            <small style={{ marginLeft: "1%", color: "grey" }}>09:32</small>
          </div>
        </Box>
      </Grid>
    </div>
  );
};

export default Chats;
