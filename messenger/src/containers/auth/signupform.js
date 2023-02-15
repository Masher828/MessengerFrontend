import React from "react";
import {
    Button,
    FormControl,
    FormControlLabel,
    FormGroup,
    Grid,
    IconButton,
    Input,
    InputAdornment,
    InputLabel,
    MenuItem,
    Select,
    Typography,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import {useDispatch, useSelector} from "react-redux";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import {IsEmailValid} from "../../utils/utils";
import {Signup} from "../../redux/auth/action_creator";
import {Paper} from "@mui/material";
import useWindowSize from "../../customhooks/screensizehook";

const SignUpForm = ({setCurrentPage}) => {
    const windowSize = useWindowSize();

    const [formValue, setFormValue] = React.useState({
        emailId: "",
        password: "",
        contactNo: "",
        confirmPassword: "",
        firstName: "",
        lastName: "",
        countryCode: "",
    });

    const [formErrorValue, setFormErrorValue] = React.useState({
        emailId: "",
        password: "",
        contactNo: "",
        confirmPassword: "",
        firstName: "",
        lastName: "",
        countryCode: "",
    });

    const [showPassword, toggleShowPassword] = React.useState(false);

    const authState = useSelector((state) => state.auth);

    const onChange = (e) => {
        setFormValue({...formValue, [e.target.name]: e.target.value});
        var error = "";
        if (e.target.name === "firstName" && e.target.value.length <= 1) {
            error = "length of first name should be more than 1 ";
        } else if (e.target.name === "emailId" && !IsEmailValid(e.target.value)) {
            error = "Invalid email address";
        } else if (e.target.name === "password" && e.target.value.length <= 7) {
            error = "Password length (8, 40)";
        } else if (
            e.target.name === "confirmPassword" &&
            e.target.value != formValue.password
        ) {
            error = "Password and confirm password is not matching";
        }
        setFormErrorValue({
            ...formErrorValue,
            [e.target.name]: error,
        });
    };

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        if (
            formErrorValue.emailId.length === 0 ||
            formErrorValue.password.length === 0 ||
            formErrorValue.confirmPassword.length === 0 ||
            formErrorValue.firstName.length === 0 ||
            formValue.emailId.length === 0 ||
            formValue.password.length === 0 ||
            formValue.confirmPassword.length === 0 ||
            formValue.firstName.length === 0
        ) {
            dispatch(Signup(formValue));
        } else {
            return;
        }
        e.preventDefault();
    };

    const getError = (name) => {
        return formErrorValue[name];
    };

    return (
        <Paper
            sx={{
                width: windowSize.width < 400 ? "380px" : "500px",
                margin: "auto",
                borderRadius: "30px",
            }}
            elevation={20}>
            <form onSubmit={handleSubmit}>
                <FormGroup>
                    <Grid
                        container
                        direction="column"
                        alignItems="center"
                        paddingLeft={3}
                        width="100%">
                        <Grid item xs={12} mt={10} marginBottom={8}>
                            <Typography variant="h3">Sign Up</Typography>
                        </Grid>
                        <Grid item xs={12} marginBottom={8} width="100%">
                            <Grid container direction={"row"}>
                                <Grid item xs={6}>
                                    <FormControl variant="standard" width="100%">
                                        <InputLabel htmlFor="input-with-icon-adornment">
                                            First Name
                                        </InputLabel>
                                        <Input
                                            required
                                            name="firstName"
                                            error={getError("firstName").length > 0}
                                            value={formValue.firstName}
                                            onChange={onChange}
                                            width="100%"
                                            id="input-with-icon-adornment"
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <AccountCircle/>
                                                </InputAdornment>
                                            }
                                        />
                                        <Typography variant="span" fontSize={10} color="red">
                                            {getError("firstName")}
                                        </Typography>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={6}>
                                    <FormControl variant="standard" width="100%">
                                        <InputLabel htmlFor="input-with-icon-adornment">
                                            Last Name
                                        </InputLabel>
                                        <Input
                                            id="input-with-icon-adornment"
                                            name="lastName"
                                            onChange={onChange}
                                            error={getError("lastName").length > 0}
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <AccountCircle/>
                                                </InputAdornment>
                                            }
                                        />
                                    </FormControl>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} marginBottom={8} width="100%">
                            <Grid container direction={"row"}>
                                <Grid item xs={6}>
                                    <FormControl variant="standard" width="100%">
                                        <InputLabel htmlFor="input-with-icon-adornment">
                                            Email
                                        </InputLabel>
                                        <Input
                                            type="email"
                                            required
                                            width="100%"
                                            onChange={onChange}
                                            name="emailId"
                                            error={getError("emailId").length > 0}
                                            id="input-with-icon-adornment"
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <AlternateEmailIcon/>
                                                </InputAdornment>
                                            }
                                        />
                                        <Typography variant="span" fontSize={10} color="red">
                                            {getError("emailId")}
                                        </Typography>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={6}>
                                    <FormControl variant="standard" width="100%">
                                        <InputLabel htmlFor="input-with-icon-adornment">
                                            Contact
                                        </InputLabel>
                                        <Input
                                            width="100%"
                                            name="contactNo"
                                            onChange={onChange}
                                            id="input-with-icon-adornment"
                                            startAdornment={
                                                <Select
                                                    onChange={onChange}
                                                    name="countryCode"
                                                    value={91}
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select">
                                                    <MenuItem value={91}>91</MenuItem>
                                                    <MenuItem value={222}>222</MenuItem>
                                                </Select>
                                            }
                                        />
                                    </FormControl>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} marginBottom={8} width="100%">
                            <Grid container direction={"row"}>
                                <Grid item xs={6}>
                                    <FormControl variant="standard" width="100%">
                                        <InputLabel htmlFor="input-with-icon-adornment">
                                            Password
                                        </InputLabel>
                                        <Input
                                            width="100%"
                                            type={showPassword ? "text" : "password"}
                                            id="input-with-icon-adornment"
                                            onChange={onChange}
                                            name="password"
                                            error={getError("password").length > 0}
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        onClick={() => toggleShowPassword(!showPassword)}>
                                                        {showPassword ? (
                                                            <VisibilityIcon/>
                                                        ) : (
                                                            <VisibilityOffIcon/>
                                                        )}
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                        />
                                        <Typography variant="span" fontSize={10} color="red">
                                            {getError("password")}
                                        </Typography>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={6}>
                                    <FormControl variant="standard" width="100%">
                                        <InputLabel htmlFor="input-with-icon-adornment">
                                            Confirm Password
                                        </InputLabel>
                                        <Input
                                            width="100%"
                                            type={showPassword ? "text" : "password"}
                                            id="input-with-icon-adornment"
                                            onChange={onChange}
                                            name="confirmPassword"
                                            error={getError("confirmPassword").length > 0}
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        onClick={() => toggleShowPassword(!showPassword)}>
                                                        {showPassword ? (
                                                            <VisibilityIcon/>
                                                        ) : (
                                                            <VisibilityOffIcon/>
                                                        )}
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                        />
                                        <Typography variant="span" fontSize={10} color="red">
                                            {getError("confirmPassword")}
                                        </Typography>
                                    </FormControl>
                                </Grid>
                            </Grid>
                        </Grid>
                        {authState.error ? (
                            <Grid item xs={12} marginBottom="30px">
                                <FormControlLabel
                                    control={
                                        <Typography color={"red"}>{authState.error}</Typography>
                                    }
                                />
                            </Grid>
                        ) : null}
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
            </form>
        </Paper>
    );
};

export default SignUpForm;
