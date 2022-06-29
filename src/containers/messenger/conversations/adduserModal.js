import React, { useState, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import { IoIosAddCircle } from "react-icons/io";
import Modal from "@mui/material/Modal";
import { Grid, Avatar, Box, Button, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { env } from "../../../env_constains";
import Select, { components } from "react-select";

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
  const [dummy, updateDummy] = useState("");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const user = useSelector((state) => state.root_user);

  const [usertoadd, setUserToAdd] = useState("");

  const options = [];
  const fetch_global_users = async () => {
    const token = user.accessToken;
    const url = env.baseURL + "/auth/user/search";
    const response = await axios
      .get(url, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        // console.log(response.data);
        response.data.data.forEach((data, i) => {
          let obj = {
            id: data.id,
            value: data.email,
            label: data.name,
            icon: "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile.png",
          };
          options.push(obj);
        });
      })
      .catch((err) => console.log(err));
  };

  fetch_global_users();

  const { Option } = components;
  const IconOption = (props) => (
    <Option {...props}>
      <img src={props.data.icon} style={{ width: 36 }} alt={props.data.label} />
      {props.data.label}
    </Option>
  );

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
    //console.log(data);
    const url = env.baseURL + "/messages/conversation";
    const response = await axios
      .post(url, data, {
        headers: headers,
      })
      .then((response) => {
        props.fetchConvo();
        handleClose();
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
            <Select
              defaultValue={options[0]}
              options={options}
              components={{ Option: IconOption }}
              style={{ maxHeight: "2vh", overflow: "scroll" }}
              onChange={(e) => setUserToAdd(e.id)}
            />
            <input type="submit" />
          </form>
        </Box>
      </Modal>
    </>
  );
};

export default AddUserModal;
