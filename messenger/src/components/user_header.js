import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import ModeEditOutlineTwoToneIcon from "@mui/icons-material/ModeEditOutlineTwoTone";
import ModalComponent from "./modal";
import React from "react";
import { Grid } from "@mui/material";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import useWindowSize from "../customhooks/screensizehook";

const UserHeaderComponent = ({
  index,
  person,
  primary,
  secondary,
  avatarWidth,
  avatarHeight,
  avatarMarginLeft,
  showEdit,
  setChatScreenToggle,
}) => {
  const windowSize = useWindowSize();
  const [openModal, setOpenModal] = React.useState(false);
  return (
    <Grid
      container
      direction={"row"}
      alignItems="center"
      bgcolor={"#0288d1"}
      sx={{ pt: 1, pb: 1, pl: 1 }}>
      {windowSize.width < 900 && !showEdit ? (
        <IconButton onClick={() => setChatScreenToggle(false)}>
          <ArrowBackIosIcon fontSize="large" />
        </IconButton>
      ) : null}

      <Avatar
        alt="Profile Picture"
        src={person}
        sx={{
          width: avatarWidth,
          height: avatarHeight,
        }}
      />
      <ListItemText
        primaryTypographyProps={{ fontSize: 20, color: "#F8F8F8" }}
        primary={primary}
        secondary={secondary}
        sx={{ marginLeft: avatarMarginLeft }}
      />
      {showEdit ? (
        <>
          <ModalComponent open={openModal} setOpen={setOpenModal} />
          <IconButton
            aria-label="delete"
            size="large"
            onClick={() => setOpenModal(true)}>
            <ModeEditOutlineTwoToneIcon sx={{ fontSize: 30 }} />
          </IconButton>
        </>
      ) : (
        <>
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite />}
          />
          <IconButton
            aria-label="delete"
            size="large"
            onClick={() => setOpenModal(true)}>
            <FavoriteBorderIcon sx={{ fontSize: 30 }} />
          </IconButton>
        </>
      )}
    </Grid>
  );
};

export default UserHeaderComponent;
