import React from "react";
import {
  Grid,
  FormGroup,
  FormControlLabel,
  Typography,
  Button,
} from "@mui/material";
import TextFieldComponent from "../components/textfields";

const SignInForm = ({ setCurrentPage }) => {
  const [formValue, setFormValue] = React.useState({
    emailId: "",
    password: "",
  });

  const onChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  return (
    <FormGroup>
      <Grid container direction="column" alignItems="center">
        <Grid item xs={12} mt={10} marginBottom={8}>
          <Typography variant="h3">Sign In</Typography>
        </Grid>
        <Grid item xs={12} marginBottom={8}>
          <TextFieldComponent
            value={formValue.emailId}
            onChange={onChange}
            name={"emailId"}
            label={"Email Id"}
            type="text"
          />
        </Grid>
        <Grid item xs={12} marginBottom={8}>
          <TextFieldComponent
            value={formValue.password}
            onChange={onChange}
            name={"password"}
            label={"Password"}
            type="password"
          />
        </Grid>
        <Grid item xs={12} marginBottom="30px">
          <FormControlLabel
            control={<Button variant="contained">Login</Button>}
          />
        </Grid>
        <Grid item xs={12} marginBottom="30px">
          <Grid container direction={"row"}>
            <Grid item xs={6}>
              <Button href="/signup" variant="contained">
                Sign Up
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

export default SignInForm;
