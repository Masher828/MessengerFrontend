import "./App.css";
import { Paper } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpForm from "./container/signupform";
import ResetPassword from "./container/resetpassword";
import useWindowSize from "./customhooks/screensizehook";
import SignInForm from "./container/signinform";

function App() {
  const windowSize = useWindowSize();
  return (
    <Paper
      sx={{
        width: windowSize.width < 400 ? "380px" : "500px",
        margin: "auto",
        borderRadius: "30px",
      }}
      elevation={20}>
      <BrowserRouter>
        <Routes>
          <Route path="" index element={<SignInForm />}></Route>
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
        </Routes>
      </BrowserRouter>
    </Paper>
  );
}

export default App;
