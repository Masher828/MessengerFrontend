import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import { IoIosAddCircle } from "react-icons/io";
import Modal from "@mui/material/Modal";
import { Grid, Avatar, Box, Button, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { env } from "../../../env_constains";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const AddUserModal = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const user = useSelector((state) => state.root_user);

  const [usertoadd, setUserToAdd] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = user.accessToken;
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    const data = {
      name: "",
      type: "PERSONAL",
      description: "",
      memberIds: [user.id, parseInt(usertoadd)],
    };
    console.log(data);
    const url = env.baseURL + "/messages/conversation";
    const response = await axios
      .post(url, data, {
        headers: headers,
      })
      .then((response) => {
        props.fetchConvo();
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <IconButton
        aria-label="fingerprint"
        color="secondary"
        onClick={handleOpen}
      >
        <IoIosAddCircle />
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={usertoadd}
              onChange={(e) => setUserToAdd(e.target.value)}
            ></input>
            <input type="submit" />
          </form>
        </Box>
      </Modal>
    </>
  );
};

export default AddUserModal;
