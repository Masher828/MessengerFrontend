import React from "react";
import {
  Grid,
  FormGroup,
  FormControlLabel,
  Typography,
  Button,
} from "@mui/material";
import TextFieldComponent from "../components/textfields";

const SignUpForm = ({ setCurrentPage }) => {
  const [formValue, setFormValue] = React.useState({
    emailId: "",
    password: "",
    contactNo: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
  });

  const onChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  return (
    <FormGroup>
      <Grid container direction="column" alignItems="center">
        <Grid item xs={12} mt={10} marginBottom={8}>
          <Typography variant="h3">Sign Up</Typography>
        </Grid>
        <Grid item xs={12} marginBottom={8}>
          <Grid container direction={"row"}>
            <Grid item xs={6}>
              <TextFieldComponent
                value={formValue.emailId}
                onChange={onChange}
                name={"emailId"}
                label={"Email Id"}
                type="email"
              />
            </Grid>
            <Grid item xs={6}>
              <TextFieldComponent
                value={formValue.contactNo}
                onChange={onChange}
                name={"contactNo"}
                label={"Contact Number"}
                type="text"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} marginBottom={8}>
          <Grid container direction={"row"}>
            <Grid item xs={6}>
              <TextFieldComponent
                value={formValue.firstName}
                onChange={onChange}
                name={"firstName"}
                label={"First Name"}
                type="text"
              />
            </Grid>
            <Grid item xs={6}>
              <TextFieldComponent
                value={formValue.lastName}
                onChange={onChange}
                name={"lastName"}
                label={"Last Name"}
                type="text"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} marginBottom={8} marginLeft={2}>
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
        <Grid item xs={12} marginBottom="30px">
          <FormControlLabel
            control={
              <Button type="submit" variant="contained">
                Sign Up
              </Button>
            }
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
                  <Button href="/resetpassword" variant="contained">
                    Reset&nbsp;Passssword
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

export default SignUpForm;
