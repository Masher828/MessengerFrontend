import React from "react";
import {
  FormControlLabel,
  TextField,
  InputAdornment,
  Box,
  IconButton,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const TextFieldComponent = ({
  value,
  onChange,
  name,
  label,
  type,
  helperText,
}) => {
  const IconStyle = { display: "flex", alignItems: "flex-end" };
  const [showPassword, toggleShowPassword] = React.useState(false);
  return (
    <FormControlLabel
      control={
        <Box sx={IconStyle}>
          <TextField
            error={helperText ? true : false}
            helperText={helperText}
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
