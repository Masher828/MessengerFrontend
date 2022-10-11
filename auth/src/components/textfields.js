import React from "react";
import {
  FormControlLabel,
  TextField,
  InputAdornment,
  Box,
  IconButton,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PhoneIcon from "@mui/icons-material/Phone";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const TextFieldComponent = ({ value, onChange, name, label, type }) => {
  const IconStyle = { display: "flex", alignItems: "flex-end" };
  const [showPassword, toggleShowPassword] = React.useState(false);
  return (
    <FormControlLabel
      control={
        <Box sx={IconStyle}>
          {name === "emailId" ? (
            <AlternateEmailIcon sx={IconStyle} />
          ) : name === "firstName" || name === "lastName" ? (
            <AccountCircle sx={IconStyle} />
          ) : name === "contactNo" ? (
            <PhoneIcon sx={IconStyle} />
          ) : null}
          <TextField
            value={value}
            onChange={onChange}
            name={name}
            type={
              type === "password" ? (showPassword ? "text" : "password") : type
            }
            label={label}
            id="standard-size-normal"
            variant="standard"
            InputProps={
              type === "password" || type === "confirmPassword"
                ? showPassword
                  ? {
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={() => toggleShowPassword(!showPassword)}>
                            <VisibilityIcon />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }
                  : {
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={() => toggleShowPassword(!showPassword)}>
                            <VisibilityOffIcon />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }
                : null
            }
          />
        </Box>
      }
    />
  );
};

export default TextFieldComponent;
