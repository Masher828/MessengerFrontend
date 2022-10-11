import React from "react";
import {
  Grid,
  FormGroup,
  FormControlLabel,
  Typography,
  Button,
} from "@mui/material";
import TextFieldComponent from "../components/textfields";

const ResetPassword = ({ setCurrentPage }) => {
  const [formValue, setFormValue] = React.useState({
    emailId: "",
    password: "",
    confirmPassword: "",
    otp: "",
  });

  const onChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  return (
    <FormGroup>
      <Grid container direction="column" alignItems="center">
        <Grid item xs={12} mt={10} marginBottom={8}>
          <Typography variant="h3">Reset Password</Typography>
        </Grid>
        <Grid item marginBottom="30px">
          <Grid container direction={"row"} columnSpacing={4}>
            <Grid item xs={10} marginLeft={-4}>
              <TextFieldComponent
                value={formValue.emailId}
                onChange={onChange}
                name={"emailId"}
                label={"Email Id"}
                type="text"
              />
            </Grid>
            <Grid item xs={1}>
              <FormControlLabel
                control={<Button variant="contained">Send&nbsp;OTP</Button>}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} marginBottom="30px" marginLeft={3}>
          <Grid container direction={"row"}>
            <Grid item xs={6}>
              <TextFieldComponent
                value={formValue.password}
                onChange={onChange}
                name={"password"}
                label={"Password"}
                type="password"
              />
            </Grid>
            <Grid item xs={6}>
              <TextFieldComponent
                value={formValue.confirmPassword}
                onChange={onChange}
                name={"confirmPassword"}
                label={"Confirm Password"}
                type="password"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} marginBottom={8}>
          <TextFieldComponent
            value={formValue.otp}
            onChange={onChange}
            name={"otp"}
            label={"OTP"}
            type="text"
          />
        </Grid>
        <Grid item xs={12} marginBottom="30px">
          <FormControlLabel
            control={<Button variant="contained">Reset Password</Button>}
          />
        </Grid>
        <Grid item xs={12} marginBottom="30px">
          <Grid container direction={"row"} columnSpacing={2}>
            <Grid item xs={6}>
              <Button href="/" variant="contained">
                Sign In
              </Button>
            </Grid>
            <Grid item xs={6}>
              <FormControlLabel
                control={
                  <Button href="/signup" variant="contained">
                    Sign&nbsp;Up
                  </Button>
                }
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </FormGroup>
  );
};

export default ResetPassword;
